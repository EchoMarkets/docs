---
title: mint-shares.yaml
nextjs:
  metadata:
    title: mint-shares.yaml
    description: Mint shares.
---

---

```bash
# =============================================================================
# MINT SHARES SPELL
# =============================================================================
# Deposits collateral and mints equal amounts of YES and NO tokens
#
# The user receives a "complete set" - 1 YES + 1 NO for each unit of collateral
# This is the primary way liquidity enters the market
#
# Fee Calculation:
#   fee = collateral_amount * fee_bps / 10000
#   shares = collateral_amount - fee
#   new_yes_supply = old_yes_supply + shares
#   new_no_supply = old_no_supply + shares
#   new_fees = old_fees + fee
#
# Usage:
#   export yes_token_id=$(echo -n "${market_id}YES" | sha256sum | cut -d' ' -f1)
#   export no_token_id=$(echo -n "${market_id}NO" | sha256sum | cut -d' ' -f1)
#   export current_timestamp=$(date +%s)
#   export mint_amount=1000000  # collateral in sats
#   # Calculate fee and shares:
#   export fee=$((mint_amount * fee_bps / 10000))
#   export shares=$((mint_amount - fee))
#   export new_yes_supply=$((old_yes_supply + shares))
#   export new_no_supply=$((old_no_supply + shares))
#   export new_fees=$((old_fees + fee))
#   cat mint-shares.yaml | envsubst | charms spell check --app-bins=${app_bin}
# =============================================================================

version: 8

apps:
  $00: n/${market_id}/${app_vk}
  $01: t/${yes_token_id}/${app_vk}
  $02: t/${no_token_id}/${app_vk}

public_inputs:
  $00:
    Mint:
      collateral_amount: ${mint_amount}
      current_timestamp: ${current_timestamp}

ins:
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
        fees: ${old_fees}
        creator: ${creator_pubkey}
  - utxo_id: ${user_btc_utxo}
    charms: {}

outs:
  # Updated market NFT with new supply and fees
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
        fees: ${new_fees}
        creator: ${creator_pubkey}
  # YES tokens to user (shares, not full collateral)
  - address: ${addr_user}
    charms:
      $01: ${shares}
  # NO tokens to user (shares, not full collateral)
  - address: ${addr_user}
    charms:
      $02: ${shares}
```
