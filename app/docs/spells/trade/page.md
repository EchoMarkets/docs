---
title: trade.yaml
nextjs:
  metadata:
    title: trade.yaml
    description: Trade.
---

---

```bash
# =============================================================================
# TRADE SPELL (P2P Swap)
# =============================================================================
# Direct peer-to-peer swap of YES for NO tokens (or vice versa)
#
# This is a SIMPLE TRANSFER - no app contract proof required!
# Charms automatically validates fungible token conservation.
#
# The market NFT is NOT needed for trades - this is just a token swap
# that relies on Charms' built-in conservation validation.
#
# Example: Alice has YES, Bob has NO, they want to swap
# - Alice inputs YES tokens, receives NO tokens
# - Bob inputs NO tokens, receives YES tokens
#
# Usage:
#   export yes_token_id=$(echo -n "${market_id}YES" | sha256sum | cut -d' ' -f1)
#   export no_token_id=$(echo -n "${market_id}NO" | sha256sum | cut -d' ' -f1)
#   cat trade.yaml | envsubst | charms spell check --app-bins=${app_bin}
# =============================================================================

version: 8

apps:
  $01: t/${yes_token_id}/${app_vk}
  $02: t/${no_token_id}/${app_vk}

ins:
  # Alice's YES tokens
  - utxo_id: ${alice_yes_utxo}
    charms:
      $01: ${trade_amount}
  # Bob's NO tokens
  - utxo_id: ${bob_no_utxo}
    charms:
      $02: ${trade_amount}

outs:
  # Alice receives NO tokens
  - address: ${addr_alice}
    charms:
      $02: ${trade_amount}
  # Bob receives YES tokens
  - address: ${addr_bob}
    charms:
      $01: ${trade_amount}
```
