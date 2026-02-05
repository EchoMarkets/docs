---
title: Cancelling a market
nextjs:
  metadata:
    title: Cancelling a market
    description: Cancelling a market.
---

```bash
export market_utxo_id="<market-nft-utxo>"
export creator_signature="<creator-signature-hex>"
export cancel_timestamp=$(date +%s)
export yes_supply=990000
export no_supply=990000
export addr_market="tb1p..."

cat ./spells/cancel-market.yaml | envsubst | charms spell check --app-bins=${app_bin}
```
