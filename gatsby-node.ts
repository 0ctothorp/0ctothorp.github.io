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

  try {
    const g = await execPromisified(
      `git log --pretty=format:%as%n ${node.absolutePath}`
    );
    const splitted = g.stdout.split("\n");
    const creationDate = splitted[0].split("-").reverse().join(".");
    const lastEdit = splitted[splitted.length - 1]
      .split("-")
      .reverse()
      .join(".");

    createNodeField({ node, name: "postDate", value: creationDate });
    createNodeField({
      node,
      name: "lastEditDate",
      value: lastEdit === creationDate ? "" : lastEdit,
    });
  } catch (e) {
    console.error(e);

    createNodeField({ node, name: "postDate", value: "2021-01-01" });
    createNodeField({ node, name: "lastEditDate", value: "2021-01-01" });
  }
};
