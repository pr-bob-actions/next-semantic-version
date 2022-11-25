# Next semantic version action for Github Action

This action use semantic-release for generate the next release version from commits message.

> Semantic-release is run in dry-run mode with only the commit-analyzer plugin so:
>
> - No release
> - No tag
> - No publish

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
