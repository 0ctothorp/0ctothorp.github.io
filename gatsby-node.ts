import { exec } from "child_process";
import { GatsbyNode } from "gatsby";
import { promisify } from "util";

const execPromisified = promisify(exec);

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  node,
  actions,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type !== "File") return;
  if (node.sourceInstanceName !== "posts") return;

  const g = await execPromisified(`git log ${node.absolutePath}`);
  console.log("g", g);
};
