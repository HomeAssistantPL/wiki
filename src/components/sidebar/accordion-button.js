/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button } from "theme-ui";

const AccordionButton = ({ mainUri, open, pathname, children, ...props }) => {
  const transform =
    open || pathname.includes(mainUri) ? "rotate(0 8 8)" : "rotate(-90 8 8)";
  const disabled = pathname ? pathname.includes(props.href) : false;

  return (
    <Button
      disabled={disabled}
      {...props}
      onMouseDown={(e) => e.preventDefault()}
    >
      <svg viewBox="0 0 16 16" width="12" height="12">
        <g
          style={{
            transformOrigin: "8 8",
            transition: "transform .1s ease-out",
          }}
          transform={transform}
        >
          <path
            stroke="currentcolor"
            strokeWidth="2"
            fill="none"
            d="M14 6 L8 12 L2 6"
          />
        </g>
      </svg>
      {children}
    </Button>
  );
};

export default AccordionButton;
