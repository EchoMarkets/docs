---
title: claim-fees.yaml
nextjs:
  metadata:
    title: claim-fees.yaml
    description: Claim fees.
---

---

```bash
# =============================================================================
# CLAIM FEES SPELL
# =============================================================================
# Creator claims accumulated trading fees after market resolution
#
# Requirements:
# - Market must be Resolved
# - Only creator can claim (signature required in witness)
# - Fees must be > 0
# - Creator signs: SHA256("CANCEL" || market_id) - same as cancel signature
#
# After claiming:
# - fees field is reset to 0
# - Creator receives BTC output with the fee amount
#
# Usage:
#   # Generate creator signature (same format as cancel)
#   cat claim-fees.yaml | envsubst | charms spell check --app-bins=${app_bin}
# =============================================================================

version: 8

apps:
  $00: n/${market_id}/${app_vk}

public_inputs:
  $00:
    ClaimFees: {}

# Witness contains creator's signature (64 bytes)
# Note: Uses same message format as cancel: SHA256("CANCEL" || market_id)
private_inputs:
  $00: "${creator_signature}"

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

outs:
  # Updated market NFT with fees reset to 0
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
        fees: 0
        creator: ${creator_pubkey}
  # Creator receives accumulated fees as BTC
  - address: ${addr_creator}
    charms: {}
```
