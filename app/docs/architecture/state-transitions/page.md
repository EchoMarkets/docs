---
title: State transitions
nextjs:
  metadata:
    title: State transitions
    description: State transitions.
---

---

## Active

Market is open for trading:

- Users can mint/burn tokens
- Users can transfer tokens
- Market cannot be resolved yet

## TradingClosed

Trading deadline has passed:

- No new minting/burning allowed
- Token transfers still allowed
- Market can be resolved

## Resolved

Market outcome has been determined:

- No trading or transfers allowed
- Only redemption of winning tokens
- Fees can be claimed by creator

## Cancelled

Market was cancelled by creator:

- Only possible before resolution
- All tokens can be redeemed for refund
