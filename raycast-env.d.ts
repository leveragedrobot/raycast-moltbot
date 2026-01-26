/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API Endpoint - Clawdbot gateway URL. Use http://127.0.0.1:18789 for local, or your Tailscale serve URL (e.g., https://machine-name.tailnet.ts.net) for remote access. */
  "endpoint": string,
  /** API Token - Find in ~/.clawdbot/clawdbot.json under gateway.auth.token */
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
  /** Preferences accessible in the `status` command */
  export type Status = ExtensionPreferences & {}
  /** Preferences accessible in the `open-webchat` command */
  export type OpenWebchat = ExtensionPreferences & {}
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
  /** Arguments passed to the `status` command */
  export type Status = {}
  /** Arguments passed to the `open-webchat` command */
  export type OpenWebchat = {}
}

