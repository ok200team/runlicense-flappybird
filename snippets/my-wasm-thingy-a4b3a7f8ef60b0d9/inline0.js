
export function find_wasm_base_url() {
    const entries = performance.getEntriesByType('resource');
    const wasmEntry = entries.find(e => e.name.endsWith('my_wasm_thingy_bg.wasm'));
    if (!wasmEntry) return '';
    return wasmEntry.name.replace('my_wasm_thingy_bg.wasm', '');
}
