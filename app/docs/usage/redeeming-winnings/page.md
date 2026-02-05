---
title: Redeeming winnings
nextjs:
  metadata:
    title: Redeeming winnings
    description: Redeeming winnings.
---

---

```bash
export market_utxo_id="<market-nft-utxo>"
export user_tokens_utxo="<user-tokens-utxo>"
export yes_tokens_burned=990000
export no_tokens_burned=0  # or equal amount if Invalid
export outcome="Yes"  # must match market resolution
export addr_market="tb1p..."
export addr_user="tb1p..."

cat ./spells/redeem.yaml | envsubst | charms spell check --app-bins=${app_bin}
```
