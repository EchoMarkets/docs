---
title: redeem.yaml
nextjs:
  metadata:
    title: redeem.yaml
    description: Redeem.
---

---

```bash
# =============================================================================
# REDEEM SPELL
# =============================================================================
# Burns winning tokens and receives collateral payout
#
# After resolution:
# - If YES won: burn YES tokens only, receive 1 sat per token
# - If NO won: burn NO tokens only, receive 1 sat per token
# - If Invalid: burn equal YES and NO, receive 1 sat per pair
#
# The market NFT remains in outputs (unchanged) to allow other users to redeem.
# Tokens are burned (appear in inputs but not in outputs).
#
# Usage:
#   # For YES outcome:
#   export yes_tokens_burned=1000000
#   export no_tokens_burned=0
#   # For NO outcome:
#   export yes_tokens_burned=0
#   export no_tokens_burned=1000000
#   # For Invalid outcome (refund):
#   export yes_tokens_burned=500000
#   export no_tokens_burned=500000
#   cat redeem.yaml | envsubst | charms spell check --app-bins=${app_bin}
# =============================================================================

version: 8

apps:
  $00: n/${market_id}/${app_vk}
  $01: t/${yes_token_id}/${app_vk}
  $02: t/${no_token_id}/${app_vk}

public_inputs:
  $00:
    Redeem:
      yes_amount: ${yes_tokens_burned}
      no_amount: ${no_tokens_burned}

ins:
  # Market NFT (read state, passed through unchanged)
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
        status: Resolved
        resolution:
          outcome: ${outcome}
          proof:
            SignedAttestation:
              resolver_pubkey: ${resolver_pubkey}
              signature: ${resolution_signature}
          timestamp: ${resolution_timestamp}
        yes_supply: ${yes_supply}
        no_supply: ${no_supply}
        max_supply: ${max_supply}
        fees: ${accumulated_fees}
        creator: ${creator_pubkey}
  # User's tokens to be burned
  - utxo_id: ${user_tokens_utxo}
    charms:
      $01: ${yes_tokens_burned}
      $02: ${no_tokens_burned}

outs:
  # Market NFT passed through (unchanged)
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
        status: Resolved
        resolution:
          outcome: ${outcome}
          proof:
            SignedAttestation:
              resolver_pubkey: ${resolver_pubkey}
              signature: ${resolution_signature}
          timestamp: ${resolution_timestamp}
        yes_supply: ${yes_supply}
        no_supply: ${no_supply}
        max_supply: ${max_supply}
        fees: ${accumulated_fees}
        creator: ${creator_pubkey}
  # User receives BTC (collateral payout)
  # Tokens are NOT in outputs = burned
  - address: ${addr_user}
    charms: {}
```
