// const queries = require("./src/utils/algolia");
require("dotenv").config();

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: "HomeAssistant PL",
    author: "pszafer@gmail.com",
    github: "https://github.com/HomeAssistantPL/wiki",
    facebook: "https://www.facebook.com/groups/homeassistantpolska/",
    discord: "https://discord.gg/eqP6VsV4Wa",
    siteUrl: "https://hapl.help",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HA Polska Wiki`,
        short_name: `HAPL`,
        start_url: `/`,
        background_color: `#63B3ED`,
        theme_color_in_head: false,
        display: `standalone`,
        icon: `src/images/logo.svg`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "materials",
        path: "./src/materials/",
      },
      __key: "materials",
    },
    `gatsby-remark-images`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: `${__dirname}/src/templates/index-template.js`,
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        rehypePlugins: [require("rehype-slug")],
      },
    },
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     indexName: process.env.ALGOLIA_INDEX_NAME,
    //     queries,
    //     chunkSize: 10000, // default: 1000
    //     matchFields: ["matchFields"],
    //     // matchFields: ["slug", "modified"],
    //   },
    // },
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        prismPreset: "night-owl",
        preset: "@theme-ui/preset-funk",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "pages",
        engine: "flexsearch",
        engineOptions: "speed",
        query: `
          {
            allMdx(filter: {fileAbsolutePath: {regex: "/materials/"}}) {
              nodes {
                id
                frontmatter {
                  title
                }
                slug
                rawBody
                excerpt(pruneLength: 300, truncate: true)
              }
            }
          }
        `,
        ref: "id",
        index: ["title", "body"],
        store: ["id", "slug", "title", "excerpt"],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map((node) => ({
            id: node.id,
            slug: node.slug,
            title:
              node.frontmatter.title ||
              node.slug.substring(node.slug.lastIndexOf("/") + 1),
            body: node.rawBody,
            excerpt: node.excerpt,
          })),
      },
    },
  ],
};
