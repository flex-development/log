# \:knot: log

[![github release](https://img.shields.io/github/v/release/flex-development/log.svg?include_prereleases\&sort=semver)](https://github.com/flex-development/log/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/log.svg)](https://npmjs.com/package/@flex-development/log)
[![codecov](https://codecov.io/gh/flex-development/log/graph/badge.svg?token=WUMNLAPIDX)](https://codecov.io/gh/flex-development/log)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/log.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat\&logo=vitest\&logoColor=ffffff)](https://vitest.dev)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

Log messages in the terminal and browser

## Contents

- [What is this?](#what-is-this)
- [Why this package?](#why-this-package)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`logger`](#logger)
  - [`createLogger`](#createloggeroptions)
  - [`logLevels`](#loglevels)
  - [`BaseReporter`](#basereporter)
  - [`FancyReporter`](#fancyreporter)
  - [`Reporter`](#reporter)
- [Types](#types)
  - [`Logger`](#logger-1)
  - [`Create`](#create)
  - [`InputLogObject`](#inputlogobject)
  - [`Inspect`](#inspect)
  - [`InspectOptions`](#inspectoptions)
  - [`LogFormatOptions`](#logformatoptions)
  - [`LogFunction`](#logfunction)
  - [`LogFunctions`](#logfunctions)
  - [`LogLevel`](#loglevel)
  - [`LogLevelMap`](#loglevelmap)
  - [`LogLevelOption`](#logleveloption)
  - [`LogLevelType`](#logleveltype)
  - [`LogObject`](#logobject)
  - [`LogType`](#logtype)
  - [`LogTypeFunctions`](#logtypefunctions)
  - [`LogTypeMap`](#logtypemap)
  - [`LoggerOptions`](#loggeroptions)
  - [`ReportersOption`](#reportersoption)
  - [`WithDefaults`](#withdefaults)
  - [`WithTag`](#withtag)
  - [`Write`](#write)
  - [`WriteStream`](#writestream)
- [Contribute](#contribute)

## What is this?

This is a small, but useful, library for logging messages in the terminal and browser consoles.

Colorful messages can be logged in the terminal and browser consoles that support ANSI colors.

## Why this package?

\:ok\_hand: Easy to use\
\:electric\_plug: Pluggable reporters\
\:computer: Consistent terminal experience\
\:bookmark: Tag support\
\:globe\_with\_meridians: Browser support

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/log
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { createLogger } from 'https://esm.sh/@flex-development/log'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { logger } from 'https://esm.sh/@flex-development/log'
</script>
```

With [bun][]:

```sh
bun add @flex-development/log
```

<blockquote>
  <small>
    See <a href='https://bun.com/docs/cli/add'><code>bun add</code></a>
    &nbsp;for more details.
  </small>
</blockquote>

## Use

**TODO**: use

## API

This package exports the following identifiers:

- [`logger`](#logger)
- [`createLogger`](#createloggeroptions)
- [`logLevels`](#loglevels)
- [`BaseReporter`](#basereporter)
- [`FancyReporter`](#fancyreporter)
- [`Reporter`](#reporter)

The default export is `logger`.

> 👉 **Note**: See the source code for the most up-to-date documentation.

### `logger`

([`Logger`](#logger-1)) The default, pre-configured logger.
Logs are written using the [`FancyReporter`](#fancyreporter).

### `createLogger([options])`

Create a new logger.

#### Parameters

- `options` ([`LogLevelOption`](#logleveloption) | [`LoggerOptions`](#loggeroptions), optional) —
  Log level or configuration options

#### Returns

([`Logger`](#logger-1)) Logger object

### `logLevels`

(`Readonly<Record<LogType, LogLevel>>`) Map where each key is a [log type](#logtype)
and each value is a [log level](#loglevel).

### `Reporter`

**TODO**: `Reporter`

### `BaseReporter`

**TODO**: `BaseReporter`

### `FancyReporter`

**TODO**: `FancyReporter`

## Types

This package is fully typed with [TypeScript][].

### `Logger`

**TODO**: `Logger`

### `Create`

Create a new logger, inheriting options from the current instance, with possible overrides (TypeScript interface).

Plain objects (i.e. `options.format`, `options.types`) are merged recursively.

#### Parameters

- `options` ([`LoggerOptions`](#loggeroptions), optional)
  — overrides for the new logger

#### Returns

([`Logger`](#logger-1)) The new logger.

### `InputLogObject`

**TODO**: `InputLogObject`

### `Inspect`

Use [`util.inspect`][util] on `value` and print its string representation (TypeScript type).

#### Parameters

- `value` (`unknown`)
  — the thing to inspect
- `options` ([`InspectOptions`](#inspectoptions), optional)
  — inspection options

#### Returns

(`undefined`) Nothing.

### `InspectOptions`

Options for inspecting a value (TypeScript interface).

#### Extends

- [`Omit<util.InspectOptions, 'colors'>`][util]

#### Properties

- `colors` (`boolean`, optional)
  — whether to use color

### `LogFormatOptions`

**TODO**: `LogFormatOptions`

### `LogFunction`

**TODO**: `LogFunction`

### `LogFunctions`

**TODO**: `LogFunctions`

### `LogLevel`

**TODO**: `LogLevel`

### `LogLevelMap`

**TODO**: `LogLevelMap`

### `LogLevelOption`

**TODO**: `LogLevelOption`

### `LogLevelType`

**TODO**: `LogLevelType`

### `LogObject`

**TODO**: `LogObject`

### `LogType`

**TODO**: `LogType`

### `LogTypeFunctions`

**TODO**: `LogTypeFunctions`

### `LogTypeMap`

**TODO**: `LogTypeMap`

### `LoggerOptions`

**TODO**: `LoggerOptions`

### `ReportersOption`

**TODO**: `ReportersOption`

### `Write`

Write data to the stream (TypeScript type).

#### Parameters

- `buffer` (`string`)
  — the data to write

#### Returns

(`boolean | undefined | void`) `true` if all data was flushed successfully, `false` if all or part of the data was
queued in user memory, or nothing.

### `WithDefaults`

Create a new logger with the specified default log object properties (TypeScript interface).

#### Parameters

- `defaults` ([`InputLogObject`](#inputlogobject), optional)
  — default properties to apply to any log reported from the new logger

#### Returns

([`Logger`](#logger-1)) The new logger.

### `WithTag`

Create a new logger with the specified `tag` (TypeScript interface).

#### Parameters

- `tag` (`string`)
  — the tag to include in each log reported from the new logger
- `separator` (`string`, optional)
  — the string to used separate tags
  - default: `':'`

#### Returns

([`Logger`](#logger-1)) The new logger.

### `WriteStream`

**TODO**: `WriteStream`

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](./CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[bun]: https://bun.sh

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[util]: https://github.com/hildjj/node-inspect-extracted

[yarn]: https://yarnpkg.com
