import semantic from "semantic-release";
import { setOutput } from "@actions/core";

const branchName = process.env.GITHUB_REF_NAME;

async function main() {
  const result = await semantic({
    dryRun: true,
    branches: [branchName ?? "main"],
    plugins: [require("@semantic-release/commit-analyzer")],
  });

  let nextRelease;
  let version;

  if (result == false) {
    nextRelease = false;
    version = "";
  } else {
    nextRelease = result.nextRelease.version != "";
    version = result.nextRelease.version;
  }

  setOutput("next-release", nextRelease);
  setOutput("next-release-version", version);
}

main();
