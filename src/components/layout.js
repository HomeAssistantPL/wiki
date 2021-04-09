/** @jsx jsx */
import { jsx } from "theme-ui";

import React, { useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "../components/sidebar";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import { Box } from "theme-ui";
import MenuButton from "./menu-button";
import Container from "./container";
import Search from "./search";

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggleSearch = () => setSearch(!isSearch);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          github
          facebook
          discord
        }
      }
    }
  `);
  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        github={data.site.siteMetadata.github}
        facebook={data.site.siteMetadata.facebook}
        discord={data.site.siteMetadata.discord}
        toggleSearch={toggleSearch}
      />
      <MenuButton toggle={toggle} isOpen={isOpen} />
      {isSearch && (
        <Search
          closeSearch={() => {
            if (isOpen) {
              setIsOpen(false);
            }
            setSearch(false);
          }}
        />
      )}
      <Container as="main">
        <Box
          sx={{
            display: ["block", "flex"],
            height: "100%",
          }}
        >
          <Sidebar
            pathname={props.location?.pathname}
            isOpen={isOpen}
            closeMenu={() => setIsOpen(false)}
            github={data.site.siteMetadata.github}
            facebook={data.site.siteMetadata.facebook}
            discord={data.site.siteMetadata.discord}
            toggleSearch={toggleSearch}
          />
          <div
            sx={{
              flex: 1,
            }}
          >
            <Box
              id="content"
              sx={{
                pt: 3,
                px: 3,
                mx: "auto",
                minHeight: "76vh",
                mt: "4.5rem",
                maxWidth: "58rem",
              }}
            >
              {props.children}
            </Box>
          </div>
        </Box>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
