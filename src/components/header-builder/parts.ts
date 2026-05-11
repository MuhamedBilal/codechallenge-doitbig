import type { ChipKey, HeaderPart } from './types';

let headerPartCounter = 0;

function nextHeaderPartId(): string {
  headerPartCounter += 1;
  return `part_${headerPartCounter}`;
}

export function createTextPart(value: string): HeaderPart {
  return { id: nextHeaderPartId(), type: 'text', value };
}

export function createChipPart(chipKey: ChipKey): HeaderPart {
  return { id: nextHeaderPartId(), type: 'chip', value: chipKey };
}
