/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box } from "theme-ui";
import React from "react";
import PropTypes from "prop-types";
import Menu from "./menu";
import Social from "../header/social";
import { SearchButton } from "../search";

const Sidebar = ({
  pathname,
  isOpen,
  closeMenu,
  facebook,
  github,
  discord,
  toggleSearch,
}) => {
  const ref = React.useRef();
  if (!pathname) return null;
  const smDisplay = isOpen ? "block" : "none";
  return (
    <Box
      ref={ref}
      as="nav"
      variant="nav"
      aria-label="Main Navigation"
      sx={{
        display: [smDisplay, smDisplay, "block", "block"],
        bg: "background",
      }}
    >
      <Social
        facebook={facebook}
        discord={discord}
        github={github}
        sxx={{
          display: ["flex", "flex", "none"],
          flex: "1 1 1",
          mb: 4,
          px: 4,
        }}
      />
      <SearchButton
        toggleSearch={toggleSearch}
        sxx={{
          display: ["flex", "flex", "none"],
        }}
      />
      <Menu pathname={pathname} closeMenu={closeMenu} />
    </Box>
  );
};

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
};

Sidebar.defaultProps = {
  siteTitle: "",
};

export default Sidebar;
