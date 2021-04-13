/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link, Box } from "theme-ui";
import { MdEdit } from "react-icons/md";

const EditPageLink = ({ href }) => {
  return (
    <Link
      href={href}
      isExternal
      sx={{
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "row",
          spacing: 1,
          alignItems: "center",
          opacity: 0.7,
        }}
      >
        <MdEdit
          sx={{
            mr: 1,
          }}
        />
        <span>Edytuj tą stronę</span>
      </Box>
    </Link>
  );
};

export default EditPageLink;
