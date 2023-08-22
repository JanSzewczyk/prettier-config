# @szum-tech/prettier-config

![GitHub release (latest by date)](https://img.shields.io/github/v/release/JanSzewczyk/prettier-config)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/JanSzewczyk/prettier-config)](https://github.com/JanSzewczyk/prettier-config/pulls)
[![GitHub issues](https://img.shields.io/github/issues/JanSzewczyk/prettier-config)](https://github.com/JanSzewczyk/prettier-config/issues)
![GitHub Repo stars](https://img.shields.io/github/stars/JanSzewczyk/prettier-config?style=social)

[![released](https://github.com/JanSzewczyk/prettier-config/actions/workflows/publish.yml/badge.svg?branch=main)](https://github.com/JanSzewczyk/prettier-config/actions/workflows/publish.yml)

[![npm](https://img.shields.io/npm/v/@szum-tech/prettier-config)](https://www.npmjs.com/package/@szum-tech/prettier-config)
![npm](https://img.shields.io/npm/dm/@szum-tech/prettier-config)

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/JanSzewczyk/prettier-config/blob/main/LICENSE)

---

[Prettier](https://prettier.io/) shareable configuration.

# Table of contents

- [Features](#features)
- [Technologies](#technologies)
- [Usage](#usage)
  - [Installation](#installation)
  - [Set configuration](#set-configuration)
  - [Add scripts](#add-scripts)
- [Changelog](#changelog)
- [License](#license)

# Features

- [Opinionated code formatter with support for: JavaScript, Typescript, JSX, ...](https://prettier.io/)
- [Sort the keys of a `package.json` file](https://github.com/matzkoh/prettier-plugin-packagejson#readme)

# Technologies

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/prettier-config/prettier-plugin-packagejson)

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/prettier-config/dev/prettier)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/prettier-config/dev/semantic-release)

I also used my packages:

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/prettier-config/dev/@szum-tech/semantic-release-preset)

# Usage

## Installation

[@szum-tech/prettier-config](https://www.npmjs.com/package/@szum-tech/prettier-config) is available as an [npm package](https://www.npmjs.com/package/@szum-tech/prettier-config).

**npm:**

```shell
npm install -D prettier @szum-tech/prettier-config
```

**yarn:**

```shell
yarn add -D prettier @szum-tech/prettier-config
```

## Set configuration

Full documentation on how to create a Prettier configuration can be found [here](https://prettier.io/docs/en/configuration.html).

Below are the recommended ways to add it:

### 1. Create config file

First create `prettier.config.js` file in root project directory. Then:

```js
module.exports = require("@szum-tech/prettier-config");
```

### 2. Add to `package.json` file

```json
{
  "prettier": "@szum-tech/prettier-config"
}
```

> **Note** You can ignore files by adding it to `.prettierignore`.

## Add scripts

Optional, can add scripts to `package.json` file :

```json
{
  "scripts": {
    "prettier:check": "prettier --check .",
    "prettier:write": "prettier --write ."
  }
}
```

# Changelog

The [changelog](https://github.com/JanSzewczyk/prettier-config/blob/main/CHANGELOG.md) is regularly updated to reflect what's changed in each new release.

# License

This project is licensed under the terms of the [MIT license](https://github.com/JanSzewczyk/prettier-config/blob/main/LICENCE).
