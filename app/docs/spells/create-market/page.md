---
title: create-market.yaml
nextjs:
  metadata:
    title: create-market.yaml
    description: Create a market.
---

---

```bash
# =============================================================================
# CREATE MARKET SPELL
# =============================================================================
# Creates a new prediction market with initial parameters
#
# Usage:
#   export in_utxo_0="txid:vout"
#   export market_id=$(echo -n "${in_utxo_0}" | sha256sum | cut -d' ' -f1)
#   export question_hash=$(echo -n "Will BTC reach 100k by Dec 2025?" | sha256sum | cut -d' ' -f1)
#   export trading_deadline=1735603200
#   export resolution_deadline=1735689600
#   export fee_bps=100
#   export min_bet=10000
#   export max_supply=1000000000000
#   export creator_pubkey="02..."  # 33-byte compressed pubkey hex
#   export addr_0="tb1q..."
#   cat create-market.yaml | envsubst | charms spell check --app-bins=${app_bin}
# =============================================================================

version: 8

apps:
  $00: n/${market_id}/${app_vk}

private_inputs:
  $00: "${in_utxo_0}"

public_inputs:
  $00:
    Create:
      question_hash: ${question_hash}
      params:
        trading_deadline: ${trading_deadline}
        resolution_deadline: ${resolution_deadline}
        fee_bps: ${fee_bps}
        min_bet: ${min_bet}

ins:
  - utxo_id: ${in_utxo_0}
    charms: {}

outs:
  - address: ${addr_0}
    charms:
      $00:
        market_id: ${market_id}
        question_hash: ${question_hash}
        params:
          trading_deadline: ${trading_deadline}
          resolution_deadline: ${resolution_deadline}
          fee_bps: ${fee_bps}
          min_bet: ${min_bet}
        status: Active
        resolution: null
        yes_supply: 0
        no_supply: 0
        max_supply: ${max_supply}
        fees: 0
        creator: ${creator_pubkey}
```
