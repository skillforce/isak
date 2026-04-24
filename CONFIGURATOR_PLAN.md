# Tool Configurator — Implementation Plan

## App Colors

| Token | Value | Used in |
|---|---|---|
| Accent purple | `#b05aae` | Tool names, prices |
| Button gradient | `#18181e` → `#1c8fe1` | Primary button |
| Box shadow blue | `rgba(10, 10, 207, 0.3)` | Options panel shadow |
| Glass white | `rgba(255, 255, 255, 0.4)` | Options panel background |
| Dark text | `#080808` / `#000` | Body text |

---

## New Configurator — 3-Step Wizard

Replace `src/components/ToolConfigurator.astro` with an interactive step-by-step configurator. No external framework — pure Astro + vanilla JS + scoped CSS.

---

### Step 1 — Choose Mode

Three clickable cards (Эко / Классик / Титан).

- Card content: tool image (eco.avif / tool.avif / titan.avif) + name in accent purple + short description
- Selected card: blue glow border (`rgba(28,143,225,0.85)`) + purple underline on name
- "Далее" button (reuse `Button.astro`) appears after selection

---

### Step 2 — Choose Complectation

Three clickable cards using `src/assets/tool/options/var_1.avif`, `var_2.avif`, `var_3.avif`.

- Card content: complectation image + numbered label + option text + price (geo-aware via existing `data-only` pattern)
- Same selection highlight as Step 1
- "Назад" text link + "Далее" button

---

### Step 3 — Result

- Left: selected tool image; Right: selected complectation image
- Tool name (purple) + complectation description + price (large, purple)
- Reuse `Button.astro` → opens `CONTACT_MODAL_ID`, passes tool name via `data-modal-name`
- "Изменить" link resets to Step 1

---

## Files to Change

| File | Action |
|---|---|
| `src/components/ToolConfigurator.astro` | Full rewrite — the wizard |
| `src/shared/data/mediaSectionData.ts` | Add `var_1/2/3` image imports, attach to each option entry |
| `src/components/ToolOptionCard.astro` | Delete — replaced by wizard |