import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
    const data = useStaticQuery<Queries.SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
          twitterUsername
        }
      }
    }
  `)

    if (!data.site?.siteMetadata) {
        throw new Error('Site metadata not found')
    }

    return data.site.siteMetadata;
}