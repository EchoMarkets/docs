---
title: resolve-market.yaml
nextjs:
  metadata:
    title: resolve-market.yaml
    description: Resolve a market.
---

---

```bash
# =============================================================================
# RESOLVE MARKET SPELL
# =============================================================================
# Resolves the market with a specific outcome
# Requires a valid resolution proof (signature or cross-chain)
#
# Resolution can only occur after resolution_deadline has passed.
# The resolver signs: SHA256(market_id || outcome_serialized)
#
# Usage:
#   export outcome=Yes  # or "No" or "Invalid"
#   export current_timestamp=$(date +%s)
#   export resolution_timestamp=${current_timestamp}
#   # Generate signature over SHA256(market_id || outcome)
#   cat resolve-market.yaml | envsubst | charms spell check --app-bins=${app_bin}
# =============================================================================

version: 8

apps:
  $00: n/${market_id}/${app_vk}

public_inputs:
  $00:
    Resolve:
      outcome: ${outcome}
      proof:
        SignedAttestation:
          resolver_pubkey: ${resolver_pubkey}
          signature: ${resolution_signature}
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
```
