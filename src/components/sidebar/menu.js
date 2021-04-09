/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex, Box } from "theme-ui";
import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import StyledLink from "./styled-link";
import AccordionButton from "./accordion-button";

const Menu = ({ pathname, closeMenu }) => {
  const data = useStaticQuery(graphql`
    query Menu {
      allMdx(
        filter: {
          slug: { ne: "" }
          frontmatter: { nav_exclude: { in: [false, null] } }
          fields: { pathDepth: { lte: 2 } }
        }
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
              title
              nav_order
            }
          }
        }
      }
    }
  `);
  const [expanded, setExpanded] = useState({});

  const toggle = (i) => (e) => {
    e.stopPropagation();
    setExpanded({
      ...expanded,
      [i]: !expanded[i],
    });
  };

  const cache = {};
  const menuData = data.allMdx.edges.reduce((acc, curr) => {
    const {
      node: {
        slug,
        fields: { pathDepth },
      },
    } = curr;
    if (pathDepth === 1) {
      curr["sub"] = [];
      acc.push(curr);
      cache[slug] = acc.length - 1;
    }
    if (pathDepth === 2) {
      const parent = slug.substring(0, slug.indexOf("/") + 1);
      const parentElem = acc[cache[parent]];
      if (parentElem) {
        parentElem["sub"].push(curr);
      }
    }
    return acc;
  }, []);

  return (
    <>
      {menuData.map(
        (
          {
            node: {
              id,
              slug,
              frontmatter: { title },
            },
            sub,
          },
          i
        ) => {
          const uri = `/${slug}`;
          const isActive = pathname === uri;
          return (
            <Flex
              key={id}
              sx={{
                flexDirection: "column",
              }}
            >
              {sub ? (
                <>
                  <Box>
                    <AccordionButton
                      href={uri}
                      mainUri={uri}
                      pathname={pathname}
                      open={expanded[i]}
                      onClick={toggle(i)}
                    >
                      <span
                        sx={{
                          ml: 2,
                        }}
                      >
                        {title}
                      </span>
                    </AccordionButton>
                  </Box>
                  <Flex
                    sx={{
                      ml: "4.5px",
                      pb: 3,
                      flexDirection: "column",
                    }}
                  >
                    <SubLinks
                      mainUri={uri}
                      isMainActive={isActive}
                      links={sub}
                      pathname={pathname}
                      open={expanded[i]}
                      closeMenu={closeMenu}
                    />
                  </Flex>
                </>
              ) : (
                <Box bg={isActive}>
                  <StyledLink to={uri} onClick={closeMenu} isActive={isActive}>
                    {title}
                  </StyledLink>
                </Box>
              )}
            </Flex>
          );
        }
      )}
    </>
  );
};

const SubLinks = ({
  links,
  pathname,
  closeMenu,
  open,
  mainUri,
  isMainActive,
}) => {
  if (!links || (!open && !pathname.includes(mainUri))) return null;
  return (
    <>
      <StyledLink to={mainUri} isActive={isMainActive} onClick={closeMenu}>
        Ogólnie
      </StyledLink>
      {links.map(
        (
          {
            node: {
              id,
              slug,
              frontmatter: { title },
            },
          },
          j
        ) => {
          const subSlub = `/${slug}`;
          const activeSub = pathname.includes(subSlub);
          return (
            <StyledLink
              key={id}
              to={subSlub}
              isActive={activeSub}
              onClick={closeMenu}
            >
              {title || slug.substring(slug.indexOf("/") + 1)}
            </StyledLink>
          );
        }
      )}
    </>
  );
};

export default Menu;
