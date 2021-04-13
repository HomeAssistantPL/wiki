/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Flex } from "theme-ui";

import ThemeToggle from "./theme-toggle";
import Logo from "./logo";
import Social from "./social";
import { SearchButton } from "../search";

const Header = ({
  siteTitle,
  github,
  discord,
  facebook,
  toggleSearch,
  closeMenu,
}) => {
  return (
    <Box as="header" variant="header">
      <div
        sx={{
          height: "4.5rem",
          mx: "auto",
          maxWidth: "1400px",
        }}
      >
        <Flex
          sx={{
            marginBottom: "1.45rem",
            width: "100%",
            px: 4,
            py: 3,
            align: "center",
            justifyItems: "space-between",
          }}
        >
          <Flex
            sx={{
              alignItems: "center",
              flex: 1,
              spacing: 1,
            }}
          >
            <Logo siteTitle={siteTitle} closeMenu={closeMenu} />
          </Flex>
          <Flex
            sx={{
              flex: "auto",
            }}
          >
            <SearchButton
              toggleSearch={toggleSearch}
              sxx={{
                display: ["none", "none", "flex"],
              }}
            />
          </Flex>
          <Flex
            sx={{
              justifyContent: "flex-end",
              flex: 1,
              align: "center",
            }}
          >
            <Social
              facebook={facebook}
              discord={discord}
              github={github}
              sxx={{
                display: ["none", "none", "flex"],
              }}
            />
            <ThemeToggle />
          </Flex>
        </Flex>
      </div>
    </Box>
  );
};

export default Header;
