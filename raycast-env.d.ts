/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API Endpoint - Clawdbot gateway URL */
  "endpoint": string,
  /** API Token - Gateway authentication token */
  "token": string,
  /** Agent ID - Which Clawdbot agent to use */
  "agentId": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `ask` command */
  export type Ask = ExtensionPreferences & {}
  /** Preferences accessible in the `chat` command */
  export type Chat = ExtensionPreferences & {}
  /** Preferences accessible in the `clipboard` command */
  export type Clipboard = ExtensionPreferences & {}
  /** Preferences accessible in the `selected-text` command */
  export type SelectedText = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `ask` command */
  export type Ask = {
  /** Ask anything... */
  "question": string
}
  /** Arguments passed to the `chat` command */
  export type Chat = {}
  /** Arguments passed to the `clipboard` command */
  export type Clipboard = {}
  /** Arguments passed to the `selected-text` command */
  export type SelectedText = {}
}

