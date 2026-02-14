# Specification

## Summary
**Goal:** Remove the Memories photo montage and ensure no user photos are shown anywhere in the Valentine experience while keeping the rest of the flow intact.

**Planned changes:**
- Remove the “Memories” montage scene from the Valentine site and eliminate any navigation/links to it.
- Update the “Yes” outcome flow so “Continue” transitions directly to the proposal scene (no memories/montage step).
- Delete montage-specific component code, imports, and unused montage-related CSS/selectors so the project builds cleanly without references to the removed feature.

**User-visible outcome:** The Valentine experience proceeds from the letter to the Yes/No outcomes and then to the proposal, with no photo montage and no user photos displayed anywhere.
