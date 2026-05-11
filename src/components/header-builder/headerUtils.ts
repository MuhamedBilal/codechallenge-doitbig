import type { HeaderPart } from './types';

export function getReferencedChipKeys(parts: HeaderPart[]): Set<string> {
  const keys = new Set<string>();
  for (const part of parts) {
    if (part?.type === 'chip' && typeof part.value === 'string') {
      keys.add(part.value);
    }
  }
  return keys;
}

export function getWiringBannerCopy(
  nameUnusedInHeader: boolean,
  ageUnusedInHeader: boolean,
): string {
  if (nameUnusedInHeader && ageUnusedInHeader) {
    return 'Your header does not use Name or Age in the sentence yet. On the right, use Insert Name and Insert Age so what you type shows up here.';
  }
  if (nameUnusedInHeader) {
    return 'Your header does not use Name yet. On the right, tap Insert Name so what you type shows up here.';
  }
  return 'Your header does not use Age yet. On the right, tap Insert Age or Insert Age Group so what you type shows up here.';
}
