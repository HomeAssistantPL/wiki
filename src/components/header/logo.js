/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Link, Heading } from "theme-ui";
import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const LogoImage = () => {
  return (
    <Box
      sx={{
        borderRadius: "full",
        boxSize: "40px",
      }}
    >
      <StaticImage
        height={40}
        width={40}
        src="../../images/logo.svg"
        alt="Home Assistant Wiki"
      />
    </Box>
  );
};

const Logo = ({ closeMenu, siteTitle }) => (
  <>
    <Box
      sx={{
        display: ["block", "block", "flex"],
        minWidth: "3rem",
      }}
    >
      <Link as={GatsbyLink} to="/" variant="sitelink" onClick={closeMenu}>
        <LogoImage />
        <Heading
          as="h2"
          sx={{
            marginLeft: 3,
            display: ["none", "none", "block"],
            fontSize: [3, 4],
          }}
        >
          {siteTitle}
        </Heading>
      </Link>
    </Box>
  </>
);

export default Logo;
