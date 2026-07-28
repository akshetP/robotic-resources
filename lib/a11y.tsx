/** Visually hidden hint for links that open in a new tab. */
export function NewTabHint() {
  return <span className="sr-only"> (opens in a new tab)</span>;
}

/** Append a new-tab notice to an existing accessible name. */
export function withNewTabLabel(label: string) {
  return `${label} (opens in a new tab)`;
}
