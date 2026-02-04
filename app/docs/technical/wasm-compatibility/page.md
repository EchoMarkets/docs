---
title: WASM Compatibility
nextjs:
  metadata:
    title: WASM Compatibility
    description: WASM Compatibility.
---

---

All dependencies are pure Rust implementations compatible with wasm32-wasip1 target. The k256 crate is used instead of secp256k1 to avoid C dependencies that don't compile for WASM.
