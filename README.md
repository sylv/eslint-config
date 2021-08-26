# eslint-config

> A [shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for [ESLint](https://eslint.org/). 

I never liked existing configs, they always have rules that I find unnecessary causing each project to end up with a dozen rules being disabled because they end up getting in the way. This config aims to fix that, for me anyway. I'm sure other people will find issues with what I've chosen, but eventually this config will be the default for all my projects without each project having a a separate config with a dozen plugins and a dozen more rules disabled.

TypeScript and React support is included. React-specific rules are only enabled for files ending with `jsx` or `tsx` because I'm concerned about performance and realistically the only thing without those extensions *might* be hooks.

# usage

- `pnpm add --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn @typescript-eslint/eslint-plugin`
- Create a `.eslintrc` file with the content below

```jsonc
{
    "extends": "@ryanke",
    "parserOptions": {
        "project": "./tsconfig.json"
    }
}
```

I intend on some rules being disabled depending on the project. In particular, `@typescript-eslint/explicit-function-return-type` will cause issues for some projects. For libraries I'd keep this on, but otherwise you will probably want to turn it off once it gets annoying.

# assumptions

- React projects will always be TypeScript.

# todo

- [ ] Benchmark linter performance and remove unnecessary or expensive rules
- [ ] `NextJS` preset that disables some more annoying rules. `sylv/micro` is a good example of rules that are annoying with NextJS.