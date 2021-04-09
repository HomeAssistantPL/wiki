/** @jsx jsx */
import { jsx, Link, Box } from "theme-ui";
import React from "react";
import { Link as GatsbyLink, graphql } from "gatsby";
import Main from "../components/main";
import Seo from "../components/seo";
import { FiArrowRightCircle } from "react-icons/fi";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  return (
    <>
      <Seo title={`#${tag}`} />
      <Main showEdit={false}>
        <h3
          sx={{
            letteSpacing: 2,
          }}
        >
          Artykuły z tagiem{" "}
          <span
            sx={{
              color: "secondary",
            }}
          >
            #{tag}
          </span>
        </h3>
        <Box
          sx={{
            mt: 2,
            py: 2,
          }}
        >
          <ul
            sx={{
              spacing: 3,
              marginTop: 1,
            }}
          >
            {data.allMdx.edges.map(
              ({
                node: {
                  slug,
                  frontmatter: { title },
                },
              }) => (
                <li
                  key={`tagsSite/${slug}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FiArrowRightCircle
                    sx={{
                      mr: 2,
                    }}
                  />
                  <Link
                    as={GatsbyLink}
                    // apply="mdx.a"
                    to={`/${slug}`}
                    // color={bottomListColor}
                    // _hover={{
                    //   color: bottomListHoverColor,
                    // }}
                  >
                    {title || slug.substring(slug.lastIndexOf("/") + 1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </Box>
      </Main>
    </>
  );
};

export default Tags;

export const pageQuery = graphql`
  query Tag($tag: String) {
    allMdx(
      sort: {
        fields: [fields___pathDepth, frontmatter___nav_order, slug]
        order: ASC
      }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
