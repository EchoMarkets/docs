---
title: Minting tokens
nextjs:
  metadata:
    title: Minting tokens
    description: Minting tokens.
---

---

```bash
# Set up token IDs
export yes_token_id=$(echo -n "${market_id}YES" | sha256sum | cut -d' ' -f1)
export no_token_id=$(echo -n "${market_id}NO" | sha256sum | cut -d' ' -f1)

# Set market state variables
export market_utxo_id="<market-nft-utxo>"
export user_btc_utxo="<user-collateral-utxo>"
export old_yes_supply=0
export old_no_supply=0
export new_yes_supply=990000
export new_no_supply=990000
export mint_amount=1000000
export current_timestamp=$(date +%s)
export addr_market="tb1p..."
export addr_user="tb1p..."

# Validate the spell
cat ./spells/mint-shares.yaml | envsubst | charms spell check --app-bins=${app_bin}
```
