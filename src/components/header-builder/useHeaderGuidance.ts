import { useMemo } from 'react';
import { getReferencedChipKeys, getWiringBannerCopy } from './headerUtils';
import type { HeaderGuidance, HeaderPart } from './types';

export function useHeaderGuidance(
  headerParts: HeaderPart[],
  name: string,
  age: string,
  showOnlyWhenNameExists: boolean,
): HeaderGuidance {
  return useMemo(() => {
    const referencedChipKeys = getReferencedChipKeys(headerParts);
    const nameTrimmed = name.trim();
    const ageTrimmed = age.trim();
    const nameTyped = nameTrimmed.length > 0;
    const ageTyped = ageTrimmed.length > 0;
    const ageConsumed =
      referencedChipKeys.has('age') || referencedChipKeys.has('ageGroup');
    const nameUnusedInHeader = nameTyped && !referencedChipKeys.has('name');
    const ageUnusedInHeader = ageTyped && !ageConsumed;
    const shouldShowHeader = !showOnlyWhenNameExists || nameTrimmed.length > 0;
    const showWiringBanner =
      (nameUnusedInHeader || ageUnusedInHeader) &&
      shouldShowHeader &&
      headerParts.length > 0;

    return {
      nameUnusedInHeader,
      ageUnusedInHeader,
      shouldShowHeader,
      showWiringBanner,
      bannerText: showWiringBanner
        ? getWiringBannerCopy(nameUnusedInHeader, ageUnusedInHeader)
        : '',
    };
  }, [headerParts, name, age, showOnlyWhenNameExists]);
}
