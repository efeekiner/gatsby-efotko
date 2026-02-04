import type { GatsbyNode } from "gatsby"

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
  const { createTypes } = actions
  
  // Override the ImageSharp type to make gatsbyImageData nullable
  // This prevents build failures when images are missing or fail to process
  createTypes(`
    type ImageSharp implements Node @dontInfer {
      fixed: JSON
      fluid: JSON
      gatsbyImageData: JSON
      original: JSON
      resize: JSON
      id: ID!
      parent: Node
      children: [Node!]!
      internal: Internal!
    }
  `)
}
