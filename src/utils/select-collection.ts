export function compareLabels(s1: { label: string }, s2: { label: string }) {
  if (s1.label < s2.label) return -1;
  if (s1.label > s2.label) return 1;
  return 0;
}
