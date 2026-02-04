---
title: Project structure
nextjs:
  metadata:
    title: Project structure
    description: Project structure.
---

---

```bash
echo-markets/
├── src/
│   ├── lib.rs              # Core contract implementation
│   ├── tests.rs            # Unit tests
│   ├── integration_tests.rs # Integration tests
│   └── main.rs             # Entry point (for local testing)
├── spells/                 # Charms spell definitions
│   ├── create-market.yaml
│   ├── mint-shares.yaml
│   ├── burn-shares.yaml
│   ├── trade.yaml
│   ├── resolve-market.yaml
│   ├── redeem.yaml
│   ├── cancel-market.yaml
│   └── claim-fees.yaml
├── test-spells.sh          # Spell testing script
├── validate-spells.sh      # Simple spell validation
├── Cargo.toml              # Rust dependencies
└── README.md               # README file
```
