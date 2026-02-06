---
title: Installation
nextjs:
  metadata:
    title: Installation
    description: Installation.
---

---

## Prerequisites

- Rust (latest stable version)
- [Charms CLI](https://docs.charms.dev/guides/charms-apps/get-started/)
- WASM target for Rust

## Setup

1. **Install Rust and WASM target:**

```bash
rustup target add wasm32-wasip1
```

2. **Clone the repository:**

```bash
git clone https://github.com/EchoMarkets/echo-markets.git
cd echo-markets
```

3. **Build the project:**

```bash
cargo build --release --target wasm32-wasip1
```

The resulting WASM binary will be at `./target/wasm32-wasip1/release/echo-markets.wasm`.

Alternatively, use the Charms CLI:

```bash
app_bin=$(charms app build)
```

4. **Get the verification key:**

```bash
export app_vk=$(charms app vk)
```
