---
title: Burning shares
nextjs:
  metadata:
    title: Burning shares
    description: Burning shares.
---

---

```bash
# Set market state variables
export market_utxo_id="<market-nft-utxo>"
export user_yes_utxo="<user-yes-tokens-utxo>"
export user_no_utxo="<user-no-tokens-utxo>"
export old_yes_supply=990000
export old_no_supply=990000
export burn_amount=100000  # Amount of sets to burn (must be equal YES + NO)
export new_yes_supply=$((old_yes_supply - burn_amount))
export new_no_supply=$((old_no_supply - burn_amount))
export current_timestamp=$(date +%s)
export addr_market="tb1p..."
export addr_user="tb1p..."

# Validate the spell
cat ./spells/burn-shares.yaml | envsubst | charms spell check --app-bins=${app_bin}
```
