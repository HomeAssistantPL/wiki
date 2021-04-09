/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button } from "theme-ui";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const MenuButton = ({ toggle, isOpen }) => {
  return (
    <Button
      sx={{
        display: ["flex", "flex", "none"],
        position: "fixed",
        color: "primary",
        bg: "menuBg",
        zIndex: 10,
        bottom: "3em",
        py: 3,
        px: 3,
        right: "3em",
        borderRadius: "full",
        outline: "none",
        "&:focus": {
          outline: "none",
        },
      }}
      onClick={toggle}
    >
      {isOpen ? (
        <AiOutlineClose size="1.5em" />
      ) : (
        <AiOutlineMenu size="1.5em" />
      )}
    </Button>
  );
};

export default MenuButton;
