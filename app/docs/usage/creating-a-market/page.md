---
title: Creating a Market
nextjs:
  metadata:
    title: Creating a Market
    description: Creating a Market.
---

---

```bash
# Set environment variables
export in_utxo_0="<your-funding-utxo>"
export market_id=$(echo -n "${in_utxo_0}" | sha256sum | cut -d' ' -f1)
export question_hash=$(echo -n "Will BTC reach 100k by Dec 2025?" | sha256sum | cut -d' ' -f1)
export trading_deadline=1735603200
export resolution_deadline=1735689600
export fee_bps=100
export min_bet=10000
export max_supply=1000000000000
export creator_pubkey="02..."  # 33-byte compressed pubkey hex
export addr_0="tb1p..."  # Taproot address

# Validate the spell
cat ./spells/create-market.yaml | envsubst | charms spell check --app-bins=${app_bin}
```
