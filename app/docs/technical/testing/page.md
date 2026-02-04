---
title: Testing
nextjs:
  metadata:
    title: Testing
    description: Testing
---

---

## Running Unit Tests

```bash
cargo test
```

## Running Integration Tests

```bash
cargo test --test integration_tests
```

## Testing Spells

The project includes comprehensive spell testing scripts.

```bash
# Dry run (validates YAML structure)
./test-spells.sh

# Real test (requires testnet UTXOs)
./test-spells.sh --real

# Simple validation (no CLI required)
./validate-spells.sh
```
