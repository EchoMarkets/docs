---
title: cancel-market.yaml
nextjs:
  metadata:
    title: cancel-market.yaml
    description: Cancel a market.
---

---

```bash
# =============================================================================
# CANCEL MARKET SPELL
# =============================================================================
# Creator cancels the market before resolution
# All tokens become redeemable 1:1 for collateral (Invalid outcome)
#
# Requirements:
# - Only creator can cancel (signature required in witness)
# - Market must NOT be already resolved
# - Creator signs: SHA256("CANCEL" || market_id)
#
# After cancellation:
# - Market status becomes Cancelled
# - Resolution outcome is set to Invalid
# - Users can redeem equal YES + NO tokens for refund
#
# Usage:
#   # Generate creator signature over SHA256("CANCEL" || market_id)
#   export cancel_timestamp=$(date +%s)
#   cat cancel-market.yaml | envsubst | charms spell check --app-bins=${app_bin}
# =============================================================================

version: 8

apps:
  $00: n/${market_id}/${app_vk}

public_inputs:
  $00:
    Cancel: {}

# Witness contains creator's signature (64 bytes)
# Signature over: SHA256("CANCEL" || market_id)
private_inputs:
  $00: "${creator_cancel_signature}"

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
        status: ${current_status}
        resolution: null
        yes_supply: ${yes_supply}
        no_supply: ${no_supply}
        max_supply: ${max_supply}
        fees: ${accumulated_fees}
        creator: ${creator_pubkey}

outs:
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
        status: Cancelled
        resolution:
          outcome: Invalid
          proof:
            SignedAttestation:
              resolver_pubkey: ${creator_pubkey}
              signature: ${cancel_signature}
          timestamp: ${cancel_timestamp}
        yes_supply: ${yes_supply}
        no_supply: ${no_supply}
        max_supply: ${max_supply}
        fees: ${accumulated_fees}
        creator: ${creator_pubkey}
```
