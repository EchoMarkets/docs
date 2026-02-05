---
title: Trading tokens
nextjs:
  metadata:
    title: Trading tokens
    description: Trading tokens.
---

---

```bash
export alice_yes_utxo="<alice-yes-tokens-utxo>"
export bob_no_utxo="<bob-no-tokens-utxo>"
export trade_amount=50000
export addr_alice="tb1p..."
export addr_bob="tb1p..."

cat ./spells/trade.yaml | envsubst | charms spell check --app-bins=${app_bin}
```
