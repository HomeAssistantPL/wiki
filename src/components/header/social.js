/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link, Flex } from "theme-ui";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord, FaFacebook } from "react-icons/fa";

const SocialLink = ({ href, Icon, ...props }) => (
  <Link href={href} target="_blank" variant="social" {...props}>
    <Icon
      sx={{
        width: 6,
        height: 6,
      }}
    />
  </Link>
);

const Social = ({ facebook, discord, github, sxx }) => (
  <Flex
    sx={{
      spacing: 5,
      ...sxx,
    }}
  >
    <SocialLink
      href={discord}
      Icon={FaDiscord}
      sx={{
        mr: 3,
        flex: "1 1 0%",
      }}
    />
    <SocialLink
      href={github}
      Icon={AiFillGithub}
      sx={{
        mr: 3,
        flex: "1 1 0%",
      }}
    />
    <SocialLink href={facebook} Icon={FaFacebook} sx={{ flex: "1 1 0%" }} />
  </Flex>
);

export default Social;
