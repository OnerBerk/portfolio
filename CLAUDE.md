# Project Rules

## Coding Style

- Keep code simple and readable (KISS).
- Avoid unnecessary abstraction and indirection.
- Prefer straightforward React patterns over complex orchestration.
- If there is a simple solution and a complex solution, choose the simple one.
- When a list is processed multiple times (e.g. `filter` + `map`), prefer a single `reduce` pass.

## React Hooks

- Use `useEffect` only when strictly necessary.
- Do not add manual DOM event listeners unless there is no clean React alternative.
- Prefer React handlers (`onClick`, `onFocus`, `onBlur`, `onMouseEnter`, etc.) and state.

## Complexity Guardrails

- No unnecessary complexity for visual effects.
- Keep components small and understandable.
- Avoid overengineering for features that can be handled with CSS or basic state.

## UX/Animation

- Favor clear, understandable interactions over technical tricks.
- Accessibility first (`focus-visible`, reduced motion support).
- Keep animation implementations maintainable.

## Accessibility & SEO

- Always add meaningful `alt` text on images when it is straightforward.
- If the right `alt` is unclear (decorative vs informative, duplicate layers, brand wording), ask before shipping.
- Decorative parallax may stay in an `aria-hidden` container so screen readers are not flooded; still use descriptive `alt` for SEO and fallback context.
