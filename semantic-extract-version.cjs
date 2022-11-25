const fs = require("fs");

const OUTPUT = process.env.GITHUB_OUTPUT ?? "output";

module.exports = {
  async verifyRelease(_, context) {
    fs.appendFileSync(
      OUTPUT,
      `next-release=${!!context?.nextRelease?.version}
next-release-version=${context?.nextRelease?.version ?? ""}`
    );
  },
};
