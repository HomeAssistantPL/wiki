/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Link, Heading } from "theme-ui";
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

export const LogoHeader = ({ children }) => (
  <Box
    sx={{
      display: ["none", "none", "flex"],
    }}
  >
    <Link as={GatsbyLink} to="/" variant="sitelink">
      <LogoImage />
      <Heading
        as="h2"
        sx={{
          marginLeft: 3,
          fontSize: [3, 4],
        }}
      >
        {children}
      </Heading>
    </Link>
  </Box>
);

export const OnlyLogo = () => (
  <Box
    sx={{
      display: ["block", "block", "none"],
      minWidth: "3rem",
    }}
  >
    <Link as={GatsbyLink} to="/">
      <LogoImage />
    </Link>
  </Box>
);
