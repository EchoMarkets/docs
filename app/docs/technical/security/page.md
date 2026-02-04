---

title: Security considerations
nextjs:
  metadata:
    title: Security considerations
description: Security considerations.

---

---

## Time Validation

1. **Primary Enforcement**: Scrolls enforces trading deadlines at the transaction layer
2. **Contract Validation**: Timestamp passed in operation data is validated by the contract
3. **Defense-in-Depth**: Both layers provide security

## Signature Verification

- **Resolution Signatures**: Uses Schnorr signatures (k256) for WASM compatibility
- **Creator Signatures**: Market creator can cancel markets with valid signature
- **Oracle Proofs**: Cross-chain oracle verification (simplified trusted oracle for Hackathon MVP). Migrating to verification via Reclaim Protocol.

## Supply Limits

- **Min Bet**: Prevents dust attacks and ensures meaningful trades
- **Max Supply**: Bounds market size and prevents overflow
- **Checked Arithmetic**: All supply operations use checked arithmetic to prevent overflow

