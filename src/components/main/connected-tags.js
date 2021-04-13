/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Link } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";
import { FiArrowRightCircle } from "react-icons/fi";

const ConnectedTags = ({ connectedTags }) => {
  if (!connectedTags || !connectedTags.edges || !connectedTags.edges.length)
    return null;
  return (
    <Box
      sx={{
        mt: 2,
        py: 2,
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: "borderLeft",
      }}
    >
      Zobacz też:
      <ul
        sx={{
          spacing: 3,
          marginTop: 1,
          listStyle: "none",
        }}
      >
        {connectedTags.edges.map(
          ({
            node: {
              slug,
              frontmatter: { title, tags = [] },
            },
          }) => (
            <li
              key={`tagsconn/${slug}`}
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
              <Link as={GatsbyLink} to={`/${slug}`}>
                {title || slug.substring(slug.lastIndexOf("/") + 1)}
              </Link>
              {tags.map((x) => (
                <Link
                  as={GatsbyLink}
                  key={`extragags-${x}`}
                  to={`/tags/${x}`}
                  sx={{
                    ml: 1,
                  }}
                >
                  #{x}
                </Link>
              ))}
            </li>
          )
        )}
      </ul>
    </Box>
  );
};

export default ConnectedTags;
