import type { GatsbyNode } from "gatsby"

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
  const { createTypes } = actions
  
  createTypes(`
    type ImageSharp implements Node {
      gatsbyImageData: JSON
    }
  `)
}
