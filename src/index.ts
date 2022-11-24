import semantic from "semantic-release";
import {} from "@actions/core";

const plugins = ["@semantic-release/commit-analyzer"];
const branchName = process.env.GITHUB_REF_NAME;

async function main() {
  const result = await semantic({
    dryRun: true,
    branches: [branchName ?? "main"],
    plugins: plugins,
  });

  if (result == false) {
    return;
  }
  console.log(result.nextRelease);
}

main();
