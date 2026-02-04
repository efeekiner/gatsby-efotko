import type { GatsbyNode } from "gatsby"

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions, schema }) => {
  const { createTypes } = actions
  
  // Explicitly define MdxFrontmatter to make hero_image fields nullable
  // This prevents build failures when images are missing or fail to process
  createTypes([
    schema.buildObjectType({
      name: "MdxFrontmatter",
      fields: {
        title: "String",
        slug: "String",
        date: {
          type: "Date",
          extensions: { dateformat: {} },
        },
        author: "String",
        hero_image: {
          type: "File",
          extensions: { fileByRelativePath: {} },
        },
        hero_image_alt: "String",
        hero_image_credit_text: "String",
        hero_image_credit_link: "String",
      },
    }),
  ])
}
