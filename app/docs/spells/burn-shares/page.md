---
title: burn-shares.yaml
nextjs:
  metadata:
    title: burn-shares.yaml
    description: Burn shares.
---

---

```bash
# =============================================================================
# BURN SHARES SPELL
# =============================================================================
# Burns equal amounts of YES and NO tokens to recover collateral
#
# This allows users to exit their position before market resolution
# by returning complete sets (1 YES + 1 NO) for collateral.
#
# Requirements:
# - Market must be Active
# - Current timestamp must be before trading_deadline
# - Must burn equal amounts of YES and NO tokens
#
# Usage:
#   export current_timestamp=$(date +%s)
#   export burn_amount=100000  # number of complete sets to burn
#   export new_yes_supply=$((old_yes_supply - burn_amount))
#   export new_no_supply=$((old_no_supply - burn_amount))
#   cat burn-shares.yaml | envsubst | charms spell check --app-bins=${app_bin}
# =============================================================================

version: 8

apps:
  $00: n/${market_id}/${app_vk}
  $01: t/${yes_token_id}/${app_vk}
  $02: t/${no_token_id}/${app_vk}

public_inputs:
  $00:
    Burn:
      set_count: ${burn_amount}
      current_timestamp: ${current_timestamp}

ins:
  # Market NFT
  - utxo_id: ${market_utxo_id}
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
        yes_supply: ${old_yes_supply}
        no_supply: ${old_no_supply}
        max_supply: ${max_supply}
        fees: ${accumulated_fees}
        creator: ${creator_pubkey}
  # User's YES tokens to burn
  - utxo_id: ${user_yes_utxo}
    charms:
      $01: ${burn_amount}
  # User's NO tokens to burn
  - utxo_id: ${user_no_utxo}
    charms:
      $02: ${burn_amount}

outs:
  # Updated market NFT with reduced supply
  - address: ${addr_market}
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
        yes_supply: ${new_yes_supply}
        no_supply: ${new_no_supply}
        max_supply: ${max_supply}
        fees: ${accumulated_fees}
        creator: ${creator_pubkey}
  # User receives BTC (collateral returned)
  # Tokens are NOT in outputs = burned
  - address: ${addr_user}
    charms: {}
```
