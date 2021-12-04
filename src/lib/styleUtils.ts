export const buttonLook = "px-2 py-1 border rounded border-purple-600 dark:border-white";

export const textColor = "text-purple-600 dark:text-purple-100";

/**
 * Helper fn to clean up spacing in tailwind styles
 * written in multi-line strings.
 */
export function formatStyles(str: string) {
  return str.replace(/\s\s+/g, ' ');
}