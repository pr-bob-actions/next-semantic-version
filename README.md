# Next semantic version action for Github Action

This action use semantic-release for generate the next release version from commit messages.

> Semantic-release is run in dry-run mode with only the commit-analyzer plugin so:
>
> - No release
> - No tag
> - No publish

## Requirements

Semantic-release is a `node` package and it is run in a sandbox environment with `yarn dlx`

So, this action requires that `node` and `yarn 2` are configured upstream

> You can use [pr-bob-actions/setup-node](https://github.com/pr-bob-actions/setup-node) for that

## Output

- `next-release`: true / false, will the update generate a new release
- `next-release-version`: the next release version number

## How to use

```yaml
- uses: pr-bob-actions/next-semantic-version@v1
  id: next-version

- name: Debug step
  run: echo "{steps.next-version.outputs.next-release-version}"
```
