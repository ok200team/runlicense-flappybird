/* tslint:disable */
/* eslint-disable */

/**
 * Activate the WASM application inside the given container element.
 * Validates the license internally and kicks off an async self-integrity check.
 *   - Valid:   injects a "Get Started..." button. Clicking it opens a
 *              full-screen modal with the game — all created by WASM.
 *   - Invalid: injects an error message.
 * The host app only provides a `<div>` and a license string.
 */
export function activate(container_id: string, license_json: string): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly activate: (a: number, b: number, c: number, d: number) => void;
    readonly wasm_bindgen__closure__destroy__hc6677f7025d15c02: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h5b569a9b0c99a6ce: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h7d3fd2c6216096f2: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h26e23bd7929d5711: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h32bc68472c5263ce: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h32bc68472c5263ce_3: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h32bc68472c5263ce_4: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hb30abdf32e6b0890: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
