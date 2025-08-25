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

Logger API (TypeScript interface).

#### Extends

- [`LogFunctions`](#logfunctions)

#### Properties

- `browser` (`boolean`, `readonly`)
  — whether the logger is operating in a browser environment
- `get color(): boolean`
  — whether color logs are enabled
- `set color(color: boolean | null | undefined)`
  — enable or disable color log. color will be disabled if not supported
  - `color` (`boolean | null | undefined`)
    — color logs enabled?
- `get colors():` [`Colors`][colors-color]
  — get a colorizer based on the current `color` configuration
- `create` ([`Create`](#create))
  — create a new logger, inheriting options from the current instance, with possible overrides
- `defaults` ([`InputLogObject`](#inputlogobject))
  — properties to apply to all logs, regardless of log type or level
- `eol` (`string`)
  — the character, or characters, used to signify the end of a line
- `format` ([`LogFormatOptions`](#logformatoptions))
  — formatting options
- `get level():` [`LogLevel`](#loglevel)
  — get the current log level
- `set level(level: LogLevelOption | null | undefined)`
  — set the maximum log level to output
  - `level` ([`LogLevelOption`](#logleveloption) | `null` | `undefined`)
    — maximum log level (inclusive)
- `levels` ([`Readonly<LogLevelMap>`](#loglevelmap), `readonly`)
  — log level map
- `reporters` ([`Set<Reporter>`](#reporter), `readonly`)
  — list of reporter instances used to handle and output log messages
- `stderr` ([`WriteStream`](#writestream))
  — the writeable stream for standard error output
- `stdout` ([`WriteStream`](#writestream))
  — the writeable stream for standard output
- `types` (`Record<LogType, InputLogObject>`)
  — record, where each key is a [`LogType`](#logtype) and each value is an [`InputLogObject`](#inputlogobject) defining
  the configuration for the log type
- `unicode` (`boolean`)
  — whether unicode is supported
- `withDefaults` ([`WithDefaults`](#withdefaults))
  — create a new logger with the specified default log object properties
- `withTag` ([`WithTag`](#withtag))
  — create a new logger with the specified tag. the tag will be included in any logs sent from the new logger

### `Create`

Create a new logger, inheriting options from the current instance, with possible overrides (TypeScript interface).

Plain objects (i.e. `options.format`, `options.types`) are merged recursively.

#### Parameters

- `options` ([`LoggerOptions`](#loggeroptions), optional)
  — overrides for the new logger

#### Returns

([`Logger`](#logger-1)) The new logger.

### `InputLogObject`

Input log data object (TypeScript interface).

#### Properties

- `additional?` (`string | string[]`, optional)
  — an additional line, or list of lines, to be logged with the message
- `args?` (`unknown[]`, optional)
  — format arguments
- `color?` ([`Color`][colors-color], optional)
  — color associated with the log
- `date?` (`Date`, optional)
  — timestamp
- `format?` ([`LogFormatOptions`](#logformatoptions), optional)
  — format options
- `icon?` (`string`, optional)
  — icon to display
- `level?` ([`LogLevelOption`](#logleveloption), optional)
  — log level
- `message?` (`unknown`, optional)
  — log message; inserted into `args` as the first format argument if defined
- `stack?` (`string`, optional)
  — stack trace
- `tag?` (`string`, optional)
  — a string to categorize or identify the log
- `type?` ([`LogType`](#logtype), optional)
  — log type

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

Log formatting options (TypeScript interface).

#### Extends

- [`InspectOptions`](#inspectoptions)

#### Properties

- `badge` (`boolean`, optional)
  — whether to display the log type as a badge
- `columns` (`number`, optional)
  — the maximum number of columns to output
- `date` (`boolean`, optional)
  — whether to include timestamp information in log messages
- `icon` (`boolean`, optional)
  — whether to display the icon associated with the log

### `LogFunction`

Send a message to all reporter instances (TypeScript interface).

#### Overloads

- `(message: InputLogObject | string, ...args: unknown[]) => undefined | void`
- `(message: unknown, ...args: unknown[]) => undefined | void`

#### Parameters

- `message` ([`InputLogObject`](#inputlogobject) | `unknown`)
  — the message to write
- `...args` (`unknown[]`, optional)
  — message arguments

#### Returns

(`undefined | void`) Nothing.

### `LogFunctions`

Log formatting options (TypeScript interface).

#### Extends

- [`LogTypeFunctions`](#logtypefunctions)

#### Properties

- `inspect` ([`Inspect`](#inspect))
  — use [`util.inspect`][util] on a value and print its string representation

### `LogLevel`

Union of log levels (TypeScript type).

To register custom log levels, augment [`LogLevelMap`](#loglevelmap).
They will be added to the union automatically.

```ts
type LogLevel = LogLevelMap[keyof LogLevelMap]
```

### `LogLevelMap`

Registry of log levels (TypeScript interface).

```ts
interface LogLevelMap {/* see code */}
```

When developing extensions that use additional levels, augment `LogLevelMap` to register custom log levels:

```ts
declare module '@flex-development/log' {
  interface LogLevelMap {
    box: 3
  }
}
```

### `LogLevelOption`

Union of log level options (TypeScript type).

```ts
type LogLevelOption = LogLevel | LogLevelType
```

### `LogLevelType`

Union of log level types (TypeScript type).

To register custom log level types, augment [`LogLevelMap`](#loglevelmap).
They will be added to the union automatically.

```ts
type LogLevelType = Extract<keyof LogLevelMap, string>
```

### `LogObject`

Log data object (TypeScript interface).

#### Extends

- [`InputLogObject`](#inputlogobject)

#### Properties

- `additional?` (`string[]`, optional)
  — additional lines to be logged with the message
- `args` (`unknown[]`)
  — format arguments
- `date` (`Date`)
  — timestamp
- `level` ([`LogLevel`](#loglevel))
  — log level
- `message` (`null | undefined`, optional)
  — log message
- `type` ([`LogType`](#logtype))
  — log type

### `LogType`

Union of log types (TypeScript type).

To register custom log types, augment [`LogTypeMap`](#logtypemap).
They will be added to the union automatically.

```ts
type LogType = LogTypeMap[keyof LogTypeMap]
```

### `LogTypeFunctions`

Dictionary of log type functions (TypeScript type).

To register custom log type functions, augment [`LogTypeMap`](#logtypemap).
They will be added to the union automatically.

```ts
type LogTypeFunctions = { [T in LogType]: LogFunction }
```

### `LogTypeMap`

Registry of log types (TypeScript interface).

```ts
interface LogTypeMap {/* see code */}
```

When developing extensions that use additional types, augment `LogTypeMap` to register custom log types:

```ts
declare module '@flex-development/log' {
  interface LogTypeMap {
    box: 'box'
  }
}
```

### `LoggerOptions`

Logger configuration options (TypeScript interface).

#### Properties

- `defaults?` ([`InputLogObject`](#inputlogobject), optional)
  — properties to apply to all logs, regardless of log type or level.
  defaults can be overridden per log type using `types`
- `eol?` (`string`, optional)
  — the character, or characters, used to signify the end of a line
- `color?` ([`Color`][colors-color])
  — color associated with the log
- `format?` ([`LogFormatOptions`](#logformatoptions), optional)
  — formatting options
- `level?` ([`LogLevelOption`](#logleveloption), optional)
  — the maximum log level to output
- `reporters?` ([`ReportersOption`](#reportersoption), optional)
  — reporter instances used to handle and output log messages
- `stderr?` ([`WriteStream`](#writestream), optional)
  — the writeable stream for standard error output
- `stdout?` ([`WriteStream`](#writestream), optional)
  — the writeable stream for standard output
- `types?` (`Partial<Record<LogType, InputLogObject>>`, optional)
  — record, where each key is a [`LogType`](#logtype) and each value is an [`InputLogObject`](#inputlogobject) defining
  the configuration for the log type

### `ReportersOption`

Union of values used to configure reporters (TypeScript type).

```ts
type ReportersOption =
  | Reporter
  | Set<Reporter | false | null | undefined>
  | readonly (Reporter | false | null | undefined)[]
```

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

Write stream API (TypeScript interface).

#### Properties

- `columns` (`number`, optional)
  — number of columns the tty currently has
- `write` ([`Write`](#write))
  — write data to the stream

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](./CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[bun]: https://bun.sh

[colors-color]: https://github.com/flex-development/colors#color

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[util]: https://github.com/hildjj/node-inspect-extracted

[yarn]: https://yarnpkg.com
