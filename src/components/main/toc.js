/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

const TocItems = ({ level, items }) => {
  return items.map((x) => (
    <li key={`toc${level}${x.url}`}>
      <Link as={GatsbyLink} to={x.url} variant="toc">
        {x.title.length > 20 ? `${x.title.substr(0, 20)}...` : x.title}
      </Link>
      {x.items && (
        <ul
          sx={{
            marginTop: 1,
            listStyle: "none",
            pl: 2,
          }}
        >
          <TocItems level={level + 1} items={x.items} />
        </ul>
      )}
    </li>
  ));
};

export default TocItems;
