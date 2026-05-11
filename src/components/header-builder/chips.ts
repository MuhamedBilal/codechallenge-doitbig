import { createChipPart, createTextPart } from './parts';
import type { ChipKey } from './types';

type ChipValueGetter = (values: { name: string; age: string }) => string;

interface DataChip {
  label: string;
  getValue: ChipValueGetter;
}

export const DATA_CHIPS: Record<ChipKey, DataChip> = {
  name: {
    label: 'Name',
    getValue: ({ name }) => name || 'Name',
  },
  age: {
    label: 'Age',
    getValue: ({ age }) => age || 'Age',
  },
  ageGroup: {
    label: 'Age Group',
    getValue: ({ age }) => {
      if (!age) return 'Age Group';
      return Number(age) >= 18 ? 'adult' : 'minor';
    },
  },
};

export const INITIAL_HEADER_PARTS = [
  createTextPart('Hello '),
  createChipPart('name'),
  createTextPart(', you are '),
  createChipPart('age'),
  createTextPart(' years old.'),
];
