---
title: Market lifecycle
nextjs:
  metadata:
    title: Market lifecycle
    description: Market lifecycle.
---

---

```bash
State Machine:

    [Create]
       |
       v
   [Active] <---> [TradingClosed] (after trading_deadline)
       |                |
       |                |
       +---> [Resolved] <--+
       |                   |
       |                   |
       v                   v
   [Cancelled]        [Redeem]
```
