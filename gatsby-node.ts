import type { GatsbyNode } from "gatsby"

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
  const { createTypes } = actions
  
  // Override ImageSharp to make gatsbyImageData nullable
  // This prevents build failures when Sharp fails to process an image
  createTypes(`
    type ImageSharp implements Node {
      id: ID!
      gatsbyImageData: JSON
    }
  `)
}

// Ensure the resolver handles null gracefully
export const createResolvers: GatsbyNode["createResolvers"] = ({ createResolvers }) => {
  createResolvers({
    ImageSharp: {
      gatsbyImageData: {
        resolve: async (source: any, args: any, context: any, info: any) => {
          // Try to get the original resolver's result
          const result = await info.originalResolver(source, args, context, info)
          // Return null instead of throwing if the result is null/undefined
          return result ?? null
        },
      },
    },
  })
}
