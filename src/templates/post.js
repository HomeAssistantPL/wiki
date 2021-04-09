import React from "react"
import { graphql } from "gatsby"
import Main from "../components/main"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../components/seo"

const Post = ({ pageContext, data }) => {
  const {
    mdx: {
      body,
      tableOfContents,
      slug,
      frontmatter: { tags, title },
      excerpt,
    },
    allMdx: connectedTags,
  } = data
  return (
    <Main
      tags={tags}
      pageContext={pageContext}
      toc={tableOfContents}
      connectedTags={connectedTags}
    >
      <Seo
        title={title || slug.substring(slug.lastIndexOf("/") + 1)}
        description={excerpt}
      />
      <MDXRenderer>{body}</MDXRenderer>
    </Main>
  )
}

export default Post

export const pageQuery = graphql`
  query MyQuery($id: String, $tags: [String!]) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        tags
      }
      slug
      tableOfContents(maxDepth: 3)
      body
      excerpt(pruneLength: 10)
    }
    allMdx(filter: { frontmatter: { tags: { in: $tags } }, id: { ne: $id } }) {
      edges {
        node {
          slug
          frontmatter {
            title
            tags
          }
          id
        }
      }
    }
  }
`
