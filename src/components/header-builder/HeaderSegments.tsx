import { memo } from 'react';
import { DATA_CHIPS } from './chips';
import {
  chipStyle,
  segmentEmptyPlaceholderStyle,
  segmentTextStyle,
} from './styles';
import type { HeaderSegmentsProps } from './types';

export const HeaderSegments = memo(function HeaderSegments({
  parts,
  name,
  age,
  chipLabelsOnly = false,
  emptyPlaceholder,
}: HeaderSegmentsProps) {
  if (parts.length === 0) {
    return emptyPlaceholder ? (
      <span style={segmentEmptyPlaceholderStyle}>{emptyPlaceholder}</span>
    ) : null;
  }

  const values = { name, age };

  return parts.map((part) => {
    const partKey = part.id ?? `${part.type}-${part.value}`;

    if (part.type === 'text') {
      return (
        <span key={partKey} style={segmentTextStyle}>
          {part.value}
        </span>
      );
    }

    const chip = DATA_CHIPS[part.value];
    if (!chip) {
      return (
        <span key={partKey} style={segmentTextStyle}>
          [Unknown field]
        </span>
      );
    }

    const content = chipLabelsOnly ? chip.label : chip.getValue(values);

    return (
      <span key={partKey} style={chipStyle}>
        {content}
      </span>
    );
  });
});
