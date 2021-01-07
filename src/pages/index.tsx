/** @jsx jsx */
import * as React from "react";
import { Box, jsx, useColorMode } from "theme-ui";
import { graphql, Link } from "gatsby";
import Switch from "react-switch";

// TODO: Disable this rule in eslint config
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const IndexPage = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Box>
      <header>
        <Link to="/">kamilkaminski.dev</Link>
        <Switch
          onChange={() =>
            setColorMode(colorMode === "default" ? "dark" : "default")
          }
          checked={colorMode === "dark"}
        />
      </header>
      <main>
        <div>
          <h1>Hey there 👋</h1>
          <p>
            Welcome to my piece of internet land. My name is Kamil Kamiński and
            I&apos;m a software engineer from Poland. Currently specializing in
            web applications.
          </p>
        </div>
        <div>
          <h2>Latest posts</h2>
          <ul></ul>
        </div>
      </main>
    </Box>
  );
};

export const query = graphql`
  query Posts {
    allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
      edges {
        node {
          id
          modifiedTime
          birthTime
        }
      }
    }
  }
`;

export default IndexPage;
