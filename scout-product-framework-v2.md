# Scout — Product Framework (v2: Validation)

*A workspace that de-risks ideas and features before you build them — through prescribed experiments, generated assets, and accumulated evidence.*

---

## 1. Product overview

**What it is.** Scout turns "I have an idea" (or "we want to build this feature") into a prioritized set of cheap experiments, generates the assets needed to run them, holds the user to success criteria committed *before* the test, and records the evidence so decisions are made on proof instead of optimism.

**The two phases.**
- **Phase 1 — Idea validation (pre-product):** validate that the problem and demand are real *before* allocating real resources to building.
- **Phase 2 — Feature validation (in-product, higher tier):** once building, validate each major feature the same way, continuously.

The through-line: **never spend money or write code on something you haven't de-risked.**

**The core principle.** Borrowed from Lean Startup, *The Mom Test*, *Testing Business Ideas* (Bland/Osterwalder), and *Continuous Discovery Habits* (Torres): don't validate the easy things. Find the single belief that would kill the idea if it's wrong — the **riskiest assumption** — and test it as cheaply as possible. Scout makes that loop turnkey.

**The wedge.** Validation advice today is either theory (read these books) or fragmented (a template here, a tool there). Scout operationalizes the *entire* riskiest-assumption loop end to end — and makes the evidence **cumulative**. It becomes the team's system of record for what they believe, why, and how confident they are.

**Why it's defensible.** Any single asset (an interview script, ad copy) is something a generic AI spits out in seconds — so a pure template generator is thin and copyable. The moat is the **loop plus the evidence history**: the judgment of which experiment to run first, the pre-committed pass/fail thresholds, and the accumulating decision log that competitors can't copy and users can't easily walk away from. Asset generation is the activation hook; the loop and the log are retention.

---

## 2. The validation loop (the product spine)

Everything in Scout is one node in this loop:

1. **Capture** the idea or feature.
2. **Decompose** it into assumptions — Problem/Desirability, Demand, Willingness-to-pay, Reachability, Feasibility.
3. **Rank** assumptions by risk × uncertainty → surface the **riskiest assumption**.
4. **Prescribe** the cheapest experiment that tests it.
5. **Generate** the assets needed to run it.
6. **Pre-commit** the success criteria *before* running ("validated if ≥3 of 5 mention this pain unprompted").
7. **Run & capture** the evidence.
8. **Decide** — persevere / pivot / kill — recorded in the decision log.
9. **Loop** — surface the next riskiest assumption.

Step 6 is the quiet hero: committing the bar in advance is what stops users from fooling themselves with results they like.

---

## 3. The two phases in detail (and why the tier is justified)

The loop is identical; the **audience** changes, so the **experiments and assets** change. That difference is what makes Phase 2 a distinct, higher-value product rather than a reskin.

| | **Phase 1 — Idea validation** | **Phase 2 — Feature validation** |
|---|---|---|
| Audience | Cold-start: no users yet | Warm: existing users |
| The hard part | *Finding* people to test with | *Choosing* which bet to test next |
| Typical experiments | Problem interviews, fake-door landing pages, smoke-test ads, pre-sales | Painted-door buttons in-app, feature-flag betas, smoke-test emails to your list, concierge tests, fake-feature CTAs |
| Typical assets | Outreach emails, "where to find these people" lists, Mom Test interview scripts, fake ad copy, landing-page copy | In-app test copy, beta-recruit emails, feature-survey scripts, A/B variants, fake-feature mock30s |
| Cost/speed of evidence | Slower, manual | Cheaper, faster (you already have an audience) |
| Methodology anchor | Lean Startup, The Mom Test, Testing Business Ideas | Continuous Discovery Habits (Torres) |
| Tier | Free / Pro | Team (higher tier) |

---

## 4. Retention: the decision log as the bridge

The failure mode of any idea-validation tool: success = the user leaves. Phase 2 fixes that structurally (a live product never runs out of features to validate). But the *gap between* phases is where churn hides — a user validates, then disappears for months to build.

The bridge is the **persistent decision log / evidence repository**: the living record of every assumption tested, every result, and every persevere/pivot/kill decision, with its evidence attached. It gives a reason to keep Scout open *during* the build (not just at validation moments), creates real switching cost (your whole evidence history lives here), and compounds in value over time. This is both the retention mechanism and the moat.

---

## 5. Core users

**Phase 1 (broad top-of-funnel):** aspiring founders, indie hackers, students, intrapreneurs — anyone with an idea and limited resources. This is the acquisition engine.

**Phase 2 (narrower, higher-value, retained):** early-stage startup teams, product managers practicing continuous discovery, founders who've validated and are now building. This is the expansion/retention base.

---

## 6. Core use cases (jobs to be done)

1. **Pressure-test an idea** — decompose it into assumptions and learn what to test first.
2. **Get a validation roadmap** — a prescribed sequence of experiments, riskiest first.
3. **Beat the blank page** — generate the actual assets (emails, lists, scripts, ad/LP copy) to run an experiment today.
4. **Run honest experiments** — commit success criteria up front and capture results against them.
5. **Decide with evidence** — persevere/pivot/kill, logged with the proof behind it.
6. **(Phase 2) Validate features continuously** — run the same loop on each product bet, using your existing audience.
7. **Maintain a source of truth** — a cumulative record of what the team knows and how confident it is.

---

## 7. Main pages / app structure

### Home / Validation overview
- **Purpose:** "what should I do next." Status of every idea/feature in flight.
- **Components:** active validations with status (assumptions tested, pending, validated/invalidated), a "next action" queue, recent evidence, a docked "Ask Scout" assistant.
- **Actions:** start a new validation, jump to the next prescribed experiment, open the decision log.

### Idea / Assumption canvas
- **Purpose:** decompose an idea or feature into testable assumptions and rank them.
- **Components:** the idea statement, an assumption map grouped by category (problem, demand, willingness-to-pay, reachability, feasibility), a risk × uncertainty grid, the highlighted riskiest assumption.
- **Actions:** add/edit assumptions, re-rank, select the assumption to test, send it to the roadmap.

### Validation roadmap
- **Purpose:** the prescribed sequence of experiments, riskiest first.
- **Components:** ordered experiment cards (what it tests, method, cost/effort, evidence strength), progress indicator.
- **Actions:** start an experiment, reorder, mark complete.

### Experiment detail (active experiment)
- **Purpose:** run and track one experiment.
- **Components:** hypothesis, the **pre-committed success criteria**, the method, linked assets, a status tracker, and a captured-evidence panel.
- **Actions:** generate/attach assets, log results, mark validated/invalidated, send the decision to the log.

### Asset studio
- **Purpose:** generate and store everything needed to run experiments. This is the activation hook.
- **Components:** asset generators — interview outreach emails, "where to find these people" lists, Mom Test-style interview scripts, fake ad copy + targeting suggestions, landing-page copy, (Phase 2) in-app test copy and beta-recruit emails. A library of generated/edited assets.
- **Actions:** generate, edit, save, export/copy, attach to an experiment.

### Interviews / Research repository + Transcript detail
- **Purpose:** capture evidence from problem/solution interviews. *(The full v1 interview pipeline lives here — now one node in the loop.)*
- **Components:** interview list, upload/import, transcript with timestamps, AI summary, extracted themes/quotes/tags (pain/objection/desire), each quote linked to its experiment.
- **Actions:** upload, transcribe, confirm tags, promote quotes to evidence against an assumption.

### Evidence / Decision log
- **Purpose:** the cumulative source of truth — the retention surface and the moat.
- **Components:** a chronological + filterable record of assumptions, the evidence for/against each, and every persevere/pivot/kill decision with its rationale and confidence.
- **Actions:** filter, export a validation report, reference past decisions, reopen an assumption.

### Integrations
- **Purpose:** connect sources that run experiments or capture signal (see §9).
- **Actions:** connect/disconnect, scope, set cadence.

### Settings / Team / Billing
- **Purpose:** admin + tiers.
- **Components:** members & roles (Phase 2), plan/tier management, data/privacy, export.

---

## 8. Feature set by area

- **Idea & assumption modeling** — decomposition, risk × uncertainty ranking, riskiest-assumption detection.
- **Experiment prescription engine** — recommends the cheapest valid experiment for the target assumption; the core intelligence.
- **Asset generation** — outreach emails, contact-source lists, interview scripts, fake ads, landing-page copy; (Phase 2) in-app test assets.
- **Experiment tracking + pre-committed criteria** — define the bar before running; track against it.
- **Evidence capture** — interview pipeline (transcription, theme/quote extraction, tagging), plus manual result logging and metric capture.
- **Decision logging** — persevere/pivot/kill with rationale, confidence, and linked evidence.
- **Continuous discovery (Phase 2)** — feature-level loop, warm-audience experiments, A/B and painted-door support.
- **Collaboration (Phase 2)** — shared validations, comments, roles, a team decision log.
- **Search & memory** — semantic search across all evidence and decisions.
- **Reporting / export** — validation reports, investor/team-ready evidence summaries.
- **Integrations** — see below.

---

## 9. Integrations

The integration set shifts away from being ad-centric toward *running experiments* and *capturing signal*.

| Service | Value |
|---|---|
| **Email / outreach (Gmail)** | Send interview requests and beta-recruit emails (with explicit per-send confirmation). |
| **Landing-page / fake-door hosting** | Stand up a smoke-test page to measure demand; capture sign-ups. |
| **Analytics (GA4 / Plausible)** | Measure landing-page and fake-door signal — visits, conversion, drop-off. |
| **Ad platforms (Google / Meta)** | Run smoke-test "fake" ads to measure demand for an idea (Phase 1). |
| **Calendar** | Schedule interviews booked from outreach. |
| **Product analytics / feature flags (Phase 2)** | Run painted-door and feature-flag experiments inside a live product. |
| **Drive** | Import existing notes, decks, and prior research. |

**Hackathon note:** generation + manual run is enough for the MVP — generate the assets and let the user run them by hand, logging results back in. Real OAuth integrations (and anything that *sends* on the user's behalf) are a fast-follow, and sending always needs explicit confirmation.

---

## 10. MVP vs. future roadmap

### MVP (hackathon / demo-able) — Phase 1, single golden path
- Enter an idea.
- Scout decomposes it into assumptions and names the **riskiest** one.
- Scout **prescribes the first experiment** (e.g., 5 problem interviews).
- Scout **generates the asset bundle**: outreach email + "where to find these people" list + a Mom Test-style interview script (and/or fake-door landing-page copy).
- Scout sets the **success criteria** before the user runs it.
- A place to **log results** and record the decision.

Ship only this path. Show Phase 2 as "coming" in the demo to communicate the retention story without building it.

### V2 / future
- Phase 2 feature validation: warm-audience experiments, A/B, painted-door, feature flags.
- Real integrations (email send, LP hosting, analytics, ad platforms, flags).
- Team collaboration, roles, shared decision log.
- Semantic search across all evidence; investor-ready validation reports.
- Experiment template library expansion (the full Testing Business Ideas catalog).
- Multi-idea portfolio view for accelerators / studios / VCs.

---

## 11. Demo narrative

1. **Founder types an idea:** "An app that helps dog owners find last-minute pet sitters."
2. **Scout decomposes it** and flags the riskiest assumption — not the solution, the *problem*: "Dog owners regularly face last-minute sitter gaps and lack a good current solution."
3. **Scout prescribes:** run 5 problem interviews before building anything.
4. **Scout generates the assets:** the outreach email, a list of where to find dog owners (specific subreddits, local FB groups, vet-office boards), and a Mom Test-style script engineered to avoid leading questions.
5. **Scout sets the bar:** "Validated if ≥3 of 5 describe this pain unprompted and have already tried to solve it."
6. **The retention beat (tease Phase 2):** "Once this is validated and you start building, Scout validates each feature the same way — using the users you now have." → the loop never ends, on screen.

The "riskiest assumption isn't the one you think" reveal in step 2, plus the instant asset bundle in step 4, are the moments that land.

---

## 12. UX direction

A calm, structured **validation workspace** — Linear / Notion / Dovetail territory, organized around the loop and around *status* (what's validated, what's pending, what's next).

- **Layout:** persistent left nav, status-forward dashboards, content in cards and clear states.
- **AI placement:** embedded layer — the prescription engine and asset generation are inline actions and a dockable panel, never the whole surface. The spine is the loop and the evidence, not a chat box.
- **Aesthetic:** restraint and clarity — generous whitespace, a disciplined type scale, one accent color, evidence and confidence shown plainly. Strip anything that isn't earning its place so the interface feels quiet and the evidence feels loud.
- **Trust cues:** pre-committed criteria and linked evidence are always visible next to any claim or decision.

---

## 13. Pricing / tiers (proposed — a starting hypothesis)

| Tier | Audience | Includes |
|---|---|---|
| **Free** | Idea-stage individuals | 1 active idea, the core loop, limited asset generations, basic logging. *The acquisition / PLG hook.* |
| **Pro** ($) | Solo founders / indie hackers | Unlimited ideas, full asset studio, interview pipeline, full decision log, export. |
| **Team** ($$, higher tier) | Teams building a live product | **Phase 2 feature validation**, collaboration & roles, integrations (analytics, flags, email), shared evidence repository. *The retention & expansion tier.* |

The exact prices are a guess; the **structure** is the point: free idea-validation as the funnel, paid feature-validation as retention and expansion — a clean land-and-expand ladder.

---

## 14. Final deliverables

**One-sentence pitch**
Scout tells you the cheapest experiment to run before you build — and hands you the assets to run it — so you validate your idea (and later, every feature) with evidence instead of optimism.

**Elevator pitch**
Most people pour months into ideas they never tested, because validation is either vague theory or a scatter of templates. Scout operationalizes the whole loop: it breaks your idea into assumptions, finds the riskiest one, prescribes the cheapest experiment to test it, and generates the assets — outreach emails, who-to-ask lists, interview scripts, fake ads, landing pages — to run it today. You commit your success criteria up front, capture the evidence, and decide. Once you've validated and start building, Scout runs the same loop on every feature using your real users — so it grows with you instead of being a tool you use once and abandon.

**Pages**
- Home / Validation overview
- Idea / Assumption canvas
- Validation roadmap
- Experiment detail (active experiment)
- Asset studio
- Interviews / Research repository + Transcript detail
- Evidence / Decision log
- Integrations
- Settings / Team / Billing

**Features**
- Idea & assumption modeling
- Experiment prescription engine
- Asset generation (emails, lists, interview scripts, fake ads, landing pages)
- Experiment tracking + pre-committed success criteria
- Evidence capture (interview pipeline + manual logging)
- Decision logging (persevere/pivot/kill)
- Continuous feature validation (Phase 2)
- Collaboration (Phase 2)
- Search & memory across evidence
- Reporting / export
- Integrations (email, LP hosting, analytics, ad platforms, flags, calendar, Drive)

**Suggested MVP scope**
Phase 1, single golden path: idea in → assumptions decomposed → riskiest named → first experiment prescribed → asset bundle generated → success criteria set → results logged. Phase 2 shown as "coming" to tell the retention story.

---

## Appendix A — Information architecture

```
Workspace
├── Validation overview (home)
├── Validations
│   └── Validation (an idea or feature)
│       ├── Assumption canvas
│       ├── Validation roadmap
│       ├── Experiments ──► Experiment detail ──► Assets / Interviews
│       └── Decision log (per validation)
├── Asset studio
├── Interviews ──► Transcript detail
├── Evidence / Decision log (workspace-wide)
├── Integrations
└── Settings / Team / Billing
```

## Appendix B — High-level data model

- **Workspace** — id, name, plan/tier, members
- **Validation** — id, workspace_id, type (idea | feature), statement, phase, status
- **Assumption** — id, validation_id, category (problem | demand | willingness_to_pay | reachability | feasibility), statement, risk_score, uncertainty_score, status (untested | validated | invalidated)
- **Experiment** — id, assumption_id, method, success_criteria, status, evidence_strength
- **Asset** — id, experiment_id, type (outreach_email | contact_list | interview_script | fake_ad | landing_page | in_app_test), content
- **Interview** — id, validation_id, transcript, summary, status
- **Quote** — id, interview_id, text, timestamp, tag (pain | objection | desire | opportunity)
- **Evidence** — id, assumption_id, source (interview_quote | metric | result), value; supports or refutes
- **Decision** — id, validation_id, type (persevere | pivot | kill), rationale, confidence, linked_evidence
- **User / Membership** — id, role (owner | editor | viewer)

## Appendix C — Example journey (idea → first validated assumption)

1. User enters the idea on the canvas; Scout decomposes it into assumptions and ranks the problem assumption as riskiest.
2. User accepts; Scout's prescription engine recommends 5 problem interviews and adds them to the roadmap.
3. In the asset studio, Scout generates the outreach email, a where-to-find list, and a Mom Test script; the user edits and saves them.
4. Scout sets the success criterion: ≥3 of 5 describe the pain unprompted.
5. User runs the interviews, uploads the recordings; the interview pipeline transcribes and extracts quotes, which the user promotes as evidence against the assumption.
6. 4 of 5 qualify → the assumption is marked validated; Scout logs a "persevere" decision with the supporting quotes and surfaces the next riskiest assumption (willingness-to-pay) to start the loop again.
