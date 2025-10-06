export function normalizeSearchParams<T extends Record<string, any>>(
  params: T
) {
  return Object.fromEntries(
    Object.entries(params).map(([k, v]) => [k, v ? String(v) : undefined])
  ) as Record<string, string | undefined>;
}
