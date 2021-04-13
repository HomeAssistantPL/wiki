/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link, Box, Flex, Heading } from "theme-ui";
// import React from "react";
import TocItems from "./toc";
import { Link as GatsbyLink } from "gatsby";
import EditPageLink from "./edit-page-link";
import CategoryArticles from "./category-articles";
import ConnectedTags from "./connected-tags";

const Main = ({
  pageContext = {},
  children,
  toc,
  tags,
  connectedTags,
  title,
  showEdit,
}) => {
  const { mdxChildren } = pageContext;
  return (
    <Flex
      sx={{
        flexDirection: ["column", "column", "column", "row-reverse"],
        minHeight: "86vh",
      }}
    >
      {toc && toc.items && !!toc.items.length && (
        <Box
          sx={{
            color: "gray.6",
            ml: [null, null, 11],
            mb: [3, null, null],
          }}
        >
          <Heading
            as="h4"
            sx={{
              fontSize: 1,
              marginBottom: 2,
              letterSpacing: 2,
            }}
          >
            SPIS TREŚCI
          </Heading>
          <ul
            sx={{
              spacing: 3,
              marginTop: 1,
              pl: 0,
              listStyle: "none",
            }}
          >
            <TocItems
              level={0}
              items={[{ url: `#${title}`, title, items: toc.items }]}
            />
          </ul>
        </Box>
      )}
      <Box
        sx={{
          flex: "1",
        }}
      >
        {tags &&
          tags.map((x) => (
            <Link
              key={`tagto${x}`}
              as={GatsbyLink}
              to={`/tags/${x}`}
              sx={{
                display: "inline",
                mr: 2,
                color: "secondary",
                fontWeight: "bold",
              }}
            >
              #{x}
            </Link>
          ))}
        <Heading
          as="h1"
          sx={{
            letterSpacing: 2,
            mt: 2,
            color: "secondary",
          }}
          id={title.toLowerCase()}
        >
          {title}
        </Heading>
        {children}
        <CategoryArticles mdxChildren={mdxChildren} />
        <ConnectedTags connectedTags={connectedTags} />{" "}
        {showEdit && (
          <Box mt={2}>
            <EditPageLink
              href="https://github.com/HomeAssistantPL/wiki/edit/develop/src/materials/komunikacja/index.md"
              isExternal
            />
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default Main;
