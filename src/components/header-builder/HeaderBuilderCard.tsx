import { HeaderSegments } from './HeaderSegments';
import {
  builderPreviewStyle,
  buttonGroupStyle,
  buttonStyle,
  cardStyle,
  chipButtonStyle,
  dangerButtonStyle,
  draftRowStyle,
  inputStyle,
  secondaryButtonStyle,
  sectionTitleStyle,
  segmentRowStyle,
} from './styles';
import type { HeaderBuilderCardProps } from './types';

export default function HeaderBuilderCard({
  headerParts,
  name,
  age,
  draftText,
  onDraftChange,
  onAddText,
  onAddChip,
  onAddNameAndAge,
  onUndoLast,
  onClear,
}: HeaderBuilderCardProps) {
  return (
    <section style={cardStyle}>
      <h3 style={sectionTitleStyle}>Header builder</h3>

      <div style={builderPreviewStyle}>
        <div style={segmentRowStyle}>
          <HeaderSegments
            parts={headerParts}
            name={name}
            age={age}
            chipLabelsOnly
            emptyPlaceholder='Nothing added yet'
          />
        </div>
      </div>

      <div style={draftRowStyle}>
        <input
          style={inputStyle}
          type='text'
          placeholder='Type regular text'
          value={draftText}
          onChange={(e) => onDraftChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onAddText();
          }}
        />
        <button type='button' style={buttonStyle} onClick={onAddText}>
          Add
        </button>
      </div>

      <div style={buttonGroupStyle}>
        <button
          type='button'
          style={chipButtonStyle}
          onClick={() => onAddChip('name')}
        >
          Insert Name
        </button>

        <button
          type='button'
          style={chipButtonStyle}
          onClick={() => onAddChip('age')}
        >
          Insert Age
        </button>

        <button
          type='button'
          style={chipButtonStyle}
          onClick={() => onAddChip('ageGroup')}
        >
          Insert Age Group
        </button>
      </div>

      <div style={buttonGroupStyle}>
        <button type='button' style={buttonStyle} onClick={onAddNameAndAge}>
          Add Name + Age
        </button>

        <button type='button' style={secondaryButtonStyle} onClick={onUndoLast}>
          Undo last
        </button>

        <button type='button' style={dangerButtonStyle} onClick={onClear}>
          Clear
        </button>
      </div>
    </section>
  );
}
