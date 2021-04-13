/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box } from "theme-ui";
// import React from "react";

export const Container = ({ children, ...props }) => (
  <Box
    sx={{
      width: "full",
      pb: 5,
      pt: 3,
      maxWidth: "1400px",
      mx: "auto",
      px: ["0", 4],
    }}
    {...props}
  >
    {children}
  </Box>
);

export default Container;
