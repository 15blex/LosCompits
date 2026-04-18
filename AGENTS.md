---
applyTo: **/*
description: Operating instructions for AI agents working on the Los Compits website codebase.
name: Los Compits Instructions
---

# Los Compits Instructions

This file defines how AI agents must work in this repository. These instructions are operational, not advisory. Agents must follow them strictly and must not substitute their own preferences when the user has given explicit requirements.

## Project Context

- This repository contains a static website.
- There is no backend scope in this project.
- The main focus is frontend quality, maintainability, and consistency with the existing project.
- The stack is SvelteKit, Svelte 5 with runes, TypeScript, and vanilla CSS.

## Core Operating Rules

- Always follow the user's explicit requirements first.
- Do not make assumptions or silent substitutions when the user has named a specific technique, pattern, selector, property, or constraint.
- If a requirement is unclear, ask for clarification before changing direction.
- If a requested technique is not appropriate for the task, say so explicitly and explain why before proposing an alternative.
- Do not invent features, behaviors, design directions, layout structures, tokens, or architectural changes that were not requested.
- Keep changes focused on the task. Do not fix unrelated issues unless the user explicitly asks for that work.
- Understand the purpose and context of the code before making changes or recommendations.
- Keep solutions clean, minimal, maintainable, and consistent with the existing codebase.

## Instruction Priority

Use this priority order when there is any tension between instructions:

1. Direct user request
2. This AGENTS.md file
3. Existing project patterns
4. General best practices

Additional rules:

- If the user explicitly names a technology, selector, property, pattern, or API, the solution must include it when appropriate.
- If the user explicitly asks for a modern CSS or Svelte feature, do not replace it with a more generic solution just because the generic solution also works.
- If you omit a requested technique, explain the omission clearly before finalizing the answer.
- If a requirement appears optional but is user-specified, do not treat it as optional.

## Scope Boundaries

- Focus on frontend code only.
- Do not introduce backend logic, APIs, services, or server-side systems unless the user explicitly asks for them.
- Do not add new scripts, commands, tools, or dependencies unless the user explicitly asks for them.
- Always use commands that already exist in [package.json](package.json) when command execution is required.

## CSS Rules

These rules are strict.

### General CSS Expectations

- Prefer the most recent stable CSS features supported by current evergreen browsers.
- Treat modern CSS as the default approach, not as an optional enhancement.
- Prefer native CSS solutions over JavaScript for layout, spacing, responsiveness, interaction states, and visual behavior whenever possible.
- Keep CSS readable, intentional, and easy to override.
- Avoid `!important`. Solve cascade problems with structure, scope, cascade layers, selector strategy, or stylesheet organization.

### Modern CSS Requirements

- Prefer and actively use modern CSS selectors such as `:where()`, `:is()`, and `:has()` when they improve clarity, reduce specificity, or better express relationships.
- Use logical properties such as `margin-block`, `padding-inline`, `inline-size`, `block-size`, `min-block-size`, and similar logical equivalents whenever possible.
- Use `@supports` for progressive enhancement and fallbacks when a newer feature may need guarded behavior.
- Use CSS variables for colors, spacing, radii, typography values, sizing tokens, and timing values whenever those values are part of repeated design logic.
- Use container queries and media queries with a mobile-first approach when responsive behavior depends on viewport size or container size.
- Use modern CSS functions and capabilities where appropriate, such as `clamp()`, `min()`, `max()`, `color-mix()`, `text-wrap`, `accent-color`, `field-sizing`, `:focus-visible`, and similar stable features.

### Specificity and Selector Strategy

- For reset files, base styles, and global stylesheets, prefer `:where()` for broad targeting so specificity remains minimal.
- Use `:is()` to group repeated element categories when it improves readability and reduces duplication.
- Use `:has()` only when it expresses a meaningful structural or state relationship and is justified by the stylesheet purpose.
- Do not increase specificity unnecessarily.
- When a lower-specificity solution exists and is suitable, prefer it.

### Global vs Scoped CSS

- In Svelte components, prefer scoped styles by default.
- Use global CSS only for reset styles, design tokens, typography base, utility layers explicitly requested by the user, or other truly application-wide behavior.
- Do not move component-local concerns into global CSS without a clear reason.

### CSS Resets and Base Styles

- A reset stylesheet must stay behaviorally and visually neutral.
- A reset stylesheet should normalize layout, inheritance, media behavior, form controls, and accessibility-related defaults without introducing project branding or design decisions.
- If the user asks for a modern reset, the result must actually contain modern selector strategy and modern CSS primitives, not just contemporary property choices.
- If the task is a reset or base stylesheet, verify selector strategy, specificity control, accessibility defaults, media defaults, form inheritance, and progressive enhancement before finalizing.

### CSS Output Verification

Before finalizing any CSS work, verify the following:

- The output includes the specific modern CSS features explicitly requested by the user.
- The stylesheet uses modern selectors when appropriate, instead of older equivalent patterns by default.
- The cascade remains easy to override.
- Responsive behavior is mobile-first where responsiveness is relevant.
- Accessibility-sensitive defaults such as focus handling, form inheritance, and reduced motion are considered where relevant.

## TypeScript Rules

- Use strict typing.
- Avoid `any` unless absolutely necessary and justified.
- Prefer precise interfaces and types over vague shapes.
- Use modern TypeScript features and current best practices.
- Handle asynchronous flows with `async` and `await` and explicit error handling when relevant.
- Do not weaken types just to make code pass quickly.

## Svelte Rules

- Follow current SvelteKit and Svelte 5 practices with runes.
- Prefer idiomatic Svelte solutions over framework-agnostic workarounds.
- Keep components aligned with the structure and conventions already used in the project.
- Use scoped component styles unless the rule belongs globally.
- Do not introduce unnecessary abstractions or patterns that the codebase is not using.

## Design and UX Constraints

- Keep the design aligned with the existing product direction.
- Do not invent a new visual language unless the user explicitly asks for a redesign.
- If design intent is missing, keep the result neutral, structured, and minimal rather than decorative.
- Avoid generic AI-looking UI patterns, stock layouts, gratuitous gradients, arbitrary spacing, or unrequested visual flair.
- Prioritize accessibility, readability, and responsive behavior.

## Commands and Tooling

- Use only commands defined in [package.json](package.json) when project commands are needed.
- Use Vite Plus to launch project commands. Do not use `npm`, `pnpm`, `yarn`, `bun`, or equivalent package-manager runners to execute scripts.
- Prefer native `vp` commands when available, such as `vp dev`, `vp build`, and `vp preview`.
- When a command exists in [package.json](package.json) but does not have a dedicated `vp` subcommand, run it with `vp run <script>`, for example `vp run check` or `vp run check:watch`.
- Do not invent commands that are not already defined in the repository.
- Do not use system commands such as `sed`, `grep`, or `awk` unless explicitly instructed to do so.
- Ensure that any command used is safe and does not cause unintended consequences.

## Agent Behavior

- Do not improvise beyond the request.
- Do not silently “improve” the task by changing its scope.
- If you think a different approach is better, explain it, but do not replace the requested approach without approval.
- When the user gives a concrete stylistic or technical directive, treat it as binding.
- If there is uncertainty, ask instead of guessing.

## Definition of Success

A correct agent response in this repository must satisfy all of the following:

- It follows the user's explicit request.
- It respects this instruction file.
- It stays within project scope.
- It uses modern, maintainable, project-appropriate code.
- It avoids unrequested invention.
- It is easy for the user to verify against the original request.

## AI Agent Skills

- Use the necessary available agent skills when they improve analysis quality or implementation quality.
- Do not let a skill override the user's explicit request or the constraints in this file.
- If a skill's output conflicts with the user's request or the instructions in this file, prioritize the user's request and the instructions, and explain any necessary deviations from the skill's output.
- Use skills to enhance code quality, maintainability, and alignment with project patterns, but not to change the fundamental approach requested by the user.
