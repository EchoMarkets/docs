---
title: Resolving a market
nextjs:
  metadata:
    title: Resolving a market
    description: Resolving a market.
---

---

```bash
export market_utxo_id="<market-nft-utxo>"
export outcome="Yes"  # or "No" or "Invalid"
export resolver_pubkey="<resolver-public-key-hex>"
export resolution_signature="<signature-hex>"
export resolution_timestamp=$(date +%s)
export yes_supply=990000
export no_supply=990000
export accumulated_fees=10000
export addr_market="tb1p..."

cat ./spells/resolve-market.yaml | envsubst | charms spell check --app-bins=${app_bin}
```
