<h1 align="center">@szum-tech/prettier-config</h1>
<p align="center"><a href="https://prettier.io">Prettier</a> shareable configuration. </p>
<br>
<div align="center" style="display: flex; flex-direction: column; gap: 1em;">
    <div style="display: flex; gap: .5em; justify-content: center">
        <a href="https://github.com/JanSzewczyk/prettier-config"><img alt="GitHub Release" src="https://img.shields.io/github/v/release/JanSzewczyk/prettier-config"></a>
        <a href="https://github.com/JanSzewczyk/prettier-config/pulls"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/JanSzewczyk/prettier-config"></a>
        <a href="https://github.com/JanSzewczyk/prettier-config/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/JanSzewczyk/prettier-config"></a>
        <a href="https://github.com/JanSzewczyk/prettier-config"><img alt="Github stars" src="https://img.shields.io/github/stars/JanSzewczyk/prettier-config?style=social"></a>
    </div>
    <div style="display: flex; gap: .5em; justify-content: center">
        <a href="https://github.com/JanSzewczyk/prettier-config/actions/workflows/publish.yml"><img alt="Publish action" src="https://github.com/JanSzewczyk/prettier-config/actions/workflows/publish.yml/badge.svg?branch=main"></a>
        <a href="https://github.com/JanSzewczyk/prettier-config/actions/workflows/codeql.yml"><img alt="CodeQL action" src="https://github.com/JanSzewczyk/prettier-config/actions/workflows/codeql.yml/badge.svg"></a>
    </div>
    <div style="display: flex; gap: .5em; justify-content: center">
        <a href="https://www.npmjs.com/package/@szum-tech/prettier-config"><img alt="NPM version" src="https://img.shields.io/npm/v/@szum-tech/prettier-config"></a>
        <a href="https://www.npmjs.com/package/@szum-tech/prettier-config"><img alt="Downloads" src="https://img.shields.io/npm/dm/@szum-tech/prettier-config"></a>
    </div>
</div>
<br>
<p align="center">
Creating a Prettier configuration should be easier.<br>
<a href="https://github.com/JanSzewczyk/prettier-config">@szum-tech/prettier-config</a> provides a ready-to-use <a href="https://prettier.io">Prettier</a> configuration that will fit your project.
</p>

---

## 📚 Features

- [Opinionated code formatter with support for: JavaScript, Typescript, JSX, ...](https://prettier.io/)
- [Sort the keys of a `package.json` file](https://github.com/matzkoh/prettier-plugin-packagejson#readme)
- [Automatically sorts classes for Tailwind CSS v3.0+](https://github.com/tailwindlabs/prettier-plugin-tailwindcss#readme)
  based
  [on recommended class order](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted).
  This feature is **OPTIONAL** - is automatically enabled if [tailwindcss](https://github.com/tailwindlabs/tailwindcss)
  package is used in project

## 📖 Table of Contents

<!-- TOC -->
  * [📚 Features](#-features)
  * [📖 Table of Contents](#-table-of-contents)
  * [🎯 Getting Started](#-getting-started)
    * [⚙️ Installation](#-installation)
    * [Configuration](#configuration)
  * [💻 Scripts](#-scripts)
  * [🚀 Minimal GitHub Prettier check workflow](#-minimal-github-prettier-check-workflow)
  * [🛠️ Developer Info](#-developer-info)
    * [Dependencies](#dependencies)
  * [📓 Changelog](#-changelog)
  * [📜 License](#-license)
<!-- TOC -->

## 🎯 Getting Started

### ⚙️ Installation

[@szum-tech/prettier-config](https://www.npmjs.com/package/@szum-tech/prettier-config) is available as
[npm package](https://www.npmjs.com/package/@szum-tech/prettier-config).

```shell
# NPM
npm install --save-dev prettier @szum-tech/prettier-config

# YARN
yarn add -D prettier @szum-tech/prettier-config

# PNPM
pnpm add --save-dev prettier @szum-tech/prettier-config

# BUN
bun add --dev prettier @szum-tech/prettier-config
```

### Configuration

Full documentation on how to create a Prettier configuration can be found in
[Prettier docs](https://prettier.io/docs/en/configuration).

**Configuration could be set via either:**

- A `.prettierrc` file, written in YAML or JSON, with optional extensions:
  `.yaml`/`.yml`/`.json`/`.json5`/`.js`/`.cjs`/`.mjs`
- A `prettier.config.(js|cjs|.mjs)` file that exports an object
- A `prettier` key in the project's `package.json` file

**The following examples show how to integrate predefined configuration in project:**

- Via `prettier.config.mjs` file:

```js
export { default } from "@szum-tech/prettier-config";
```

Configurations also could be used to extends:

```js
export szumTechPrettierConfig from "@szum-tech/prettier-config";

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...szumTechPrettierConfig,
  semi: false
};

export default config;
```

- Via `prettier.config.cjs` file:

```js
module.exports = require("@szum-tech/prettier-config");
```

OR extend configuration:

```js
const szumTechPrettierConfig = require("@szum-tech/prettier-config");

/**
 * @type {import("prettier").Config}
 */
module.exports = {
  ...szumTechPrettierConfig,
  semi: false
};
```

- Via `prettier` key in the project's `package.json` file:

```json
{
  "prettier": "@szum-tech/prettier-config"
}
```

- Via `.prettierrc` file:

```json
"@szum-tech/prettier-config"
```

> [!TIP] 
> You can ignore files by adding it to `.prettierignore`.

## 💻 Scripts

Suggested scripts you can add to `package.json` file:

```json
{
  "scripts": {
    "prettier:check": "prettier --check .",
    "prettier:write": "prettier --write ."
  }
}
```

## 🚀 Minimal GitHub Prettier check workflow

Here are the minimal steps required to run an Prettier check. Creating or adding any content to a PR will trigger this
event. This action validate the code and return its results.

```yaml
name: PR Checks ✅

on:
  pull_request:

env:
  NODE_VERSION: 22.x
  
jobs:
  prettier:
    name: Prettier 🧹
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code 📚
        uses: actions/checkout@v4
      - name: Set up Node 🟢
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: "npm"
      - name: Install packages ⚙️
        run: npm ci
      - name: Prettier Check 🧹
        run: npm run prettier:check
```

## 🛠️ Developer Info

### Dependencies

![NPM (prod) Dependency Version](https://img.shields.io/npm/dependency-version/%40szum-tech%2Fprettier-config/prettier-plugin-packagejson)
![NPM (prod) Dependency Version](https://img.shields.io/npm/dependency-version/%40szum-tech%2Fprettier-config/prettier-plugin-tailwindcss)

## 📓 Changelog

The [changelog](https://github.com/JanSzewczyk/prettier-config/blob/main/CHANGELOG.md) is regularly updated to reflect
what's changed in each new release.

## 📜 License

This project is licensed under the terms of the
[MIT license](https://github.com/JanSzewczyk/prettier-config/blob/main/LICENCE).
