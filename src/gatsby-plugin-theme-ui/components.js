/** @jsx jsx */
import { jsx } from "theme-ui";
import Prism from "../components/codeblock";

// const Pre = props => (
//   <div
//     sx={{
//       my: "2em",
//       borderRadius: "sm",
//     }}
//     {...props}
//   />
// )

const heading = (Tag) => (props) =>
  !!props.id ? (
    <Tag {...props}>
      <a
        href={`#${props.id}`}
        sx={{
          color: "inherit",
          textDecoration: "none",
          ":hover": {
            textDecoration: "underline",
          },
        }}
      >
        {" "}
        {props.children}
      </a>
    </Tag>
  ) : (
    <Tag {...props} />
  );

const MDXComponents = {
  h1: heading("h1"),
  h2: heading("h2"),
  h3: heading("h3"),
  h4: heading("h4"),
  h5: heading("h5"),
  h6: heading("h6"),
  pre: (props) => props.children,
  code: Prism,
};

export default MDXComponents;
