/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode, Box } from "theme-ui";
import { FaRegMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [colorMode, setColorMode] = useColorMode();
  const Icon = colorMode === "light" ? FaSun : FaRegMoon;

  return (
    <Box
      as="button"
      aria-label="Toggle Theme"
      variant="headerbutton"
      onClick={() => {
        setColorMode(colorMode === "light" ? "dark" : "light");
      }}
    >
      <Icon
        sx={{
          width: 6,
          height: 6,
        }}
      />
    </Box>
  );
};

export default ThemeToggle;
