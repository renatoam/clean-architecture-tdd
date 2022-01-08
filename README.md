# NodeJs, Typescript, TDD, Clean Architecture e SOLID

Projeto baseado no curso do Rodrigo Manguinho sobre Node, usando Clean Architecture e TDD.

## Development Tools

### Linters

**Git Commit Msg Linter**: We've opted for `git-commit-msg-linter` over `commitlint` because it doesn't require a previous configuration. It is triggered by default on every commit.

**ES Lint**: such an annoying config! Personally, I hate configure `eslint` and/or `prettier`, but for this case we've opted to don't use `prettier`, only `eslint` for linting and formatting.

For ensure the possibly installed `prettier` on dev computer doesn't conflict with our config, we've disabled it for the current VS Code workspace.

We're using `eslint` with `typescript` and `standard-with-typescript` as our rules. We've also enabled `strictNullChecks` in order to ensure safety on `null` or `undefined` types check.

**Lint Staged**: We're using `lint-staged` to run `eslint` on staged files. That's because as the project grows it increase the files amount. So `lint-staged` can handle this for us.

We've also added tests to `lint-staged` so we can also run tests before commits.

**Husky**: That's not exactly a linter, but `husky` help us to run some commands between git actions. New `husky` versions have a different approach, so we have to run `yarn husky install` (after its installation) and run commands like `husky add .husky/pre-commit "npm test"` to add the hooks.

Note: I've used `yarn` in the examples, but it can be also `npx`. I've also used `pre-commit` and `npm test` as examples, but we can do that for other hook and value.

### Tests

**Jest**: We're using `jest` to run tests and we've added `ts-jest` in order to `jest` works with `typescript`.
