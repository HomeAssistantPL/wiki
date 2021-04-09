const { createFilePath } = require("gatsby-source-filesystem")
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "pathDepth",
      node,
      value: (value.match(/\//g) || ["/"]).length - 1,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = require.resolve(`./src/templates/post.js`)
  const tagTemplate = require.resolve(`./src/templates/tags.js`)
  const result = await graphql(`
    query Mdx {
      postsMdx: allMdx(
        sort: {
          fields: [fields___pathDepth, frontmatter___nav_order, slug]
          order: ASC
        }
      ) {
        edges {
          node {
            id
            slug
            fields {
              pathDepth
            }
            frontmatter {
              tags
              title
              has_toc
            }
          }
        }
      }
      tagList: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  if (result.errors) {
    return
  }
  const posts = result.data.postsMdx.edges
  const menuData = posts.reduce((acc, curr, ind) => {
    const {
      node: { slug, frontmatter },
    } = curr
    const parent = slug.substring(0, slug.lastIndexOf("/") + 1)
    if (parent !== slug) {
      acc[parent] = acc[parent]
        ? [...acc[parent], { slug, frontmatter }]
        : [{ slug, frontmatter }]
    }
    return acc
  }, {})
  posts.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: postTemplate,
      context: {
        id: node.id,
        mdxChildren: menuData[node.slug],
        tags: node.frontmatter.tags || [],
      },
    })
  })

  const tags = result.data.tagList.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
