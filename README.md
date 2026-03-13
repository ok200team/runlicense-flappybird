# Flappy Bird

A self-contained WebAssembly module that runs a Flappy Bird-style game entirely inside the browser. The module renders to a `<canvas>`, handles all input (keyboard, mouse, touch), and manages its own UI - the host page only provides a container `<div>` and a license key.

The package is licensed and integrity-verified at runtime using [RunLicense.com](https://runlicense.com).

## How it works

1. The host page loads the WASM module and calls `activate()` with a container element ID and a license JSON string.
2. The module validates the license via the RunLicense SDK.
3. **Valid license** - a "Get Started" button is injected into the container. Clicking it opens a full-screen modal with the game canvas.
4. **Invalid license** - an error message is displayed instead.
5. A self-integrity check runs in the background, verifying the `.wasm` binary against a signed manifest (`wasm_manifest.json`).

## Installation

Install directly from the GitHub package repo:

```bash
# Latest
npm install github:ok200team/runlicense-flappybird

# Pinned version
npm install github:ok200team/runlicense-flappybird#0.1.21
```

## Usage

```html
<div id="wasm-app"></div>

<script type="module">
  import init, { activate } from 'my-wasm-thingy';

  await init();
    
  const licenseString = 'YOUR_LICENSE_JSON_STRING';
  activate('wasm-app', licenseString);
</script>
```

That's it. The module takes over from here - rendering, input, and UI are all handled internally.
