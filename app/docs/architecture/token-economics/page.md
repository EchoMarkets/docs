---
title: Token economics
nextjs:
  metadata:
    title: Token economics
    description: Token economics.
---

---

- **Minting**: User deposits _collateral_, pays _fee = collateral \* fee_bps / 10000_, receives _shares = collateral - fee_ in YES + NO tokens
- **Burning**: User burns equal YES + NO tokens, receives collateral back (minus fees already paid)
- **Trading**: Users can transfer YES/NO tokens to each other (P2P trading). Migrating to Cast DEX soon
- **Redemption**: After resolution, winning token holders redeem 1:1 for collateral
