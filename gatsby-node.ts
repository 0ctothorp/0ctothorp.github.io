import { exec } from "child_process";
import { GatsbyNode } from "gatsby";

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type !== "File") return;
  if (node.sourceInstanceName !== "posts") return;
};
