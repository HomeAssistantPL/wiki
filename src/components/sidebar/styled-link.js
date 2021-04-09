/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "theme-ui";
import React from "react";
import { Link as GatsbyLink } from "gatsby";

const StyledLink = React.forwardRef(function StyledLink(props, ref) {
  const { isActive, ...rest } = props;
  const sx = isActive
    ? {
        color: "primary",
        fontWeight: "bold",
        backgroundColor: "activeLinkBg",
      }
    : {};

  return (
    <Link
      as={GatsbyLink}
      aria-current={isActive ? "page" : undefined}
      variant="nav"
      ref={ref}
      sx={sx}
      {...rest}
    />
  );
});

export default StyledLink;
