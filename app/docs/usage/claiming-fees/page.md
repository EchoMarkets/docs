---
title: Claiming fees
nextjs:
  metadata:
    title: Claiming fees
    description: Claiming fees.
---

---

```bash
export market_utxo_id="<market-nft-utxo>"
export accumulated_fees=10000
export yes_supply=990000
export no_supply=990000
export addr_market="tb1p..."
export addr_creator="tb1p..."

cat ./spells/claim-fees.yaml | envsubst | charms spell check --app-bins=${app_bin}
```
