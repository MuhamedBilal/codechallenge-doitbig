import HeaderBuilderCard from './HeaderBuilderCard';
import {
  asideStyle,
  cardStyle,
  checkboxRowStyle,
  helperTextStyle,
  panelTitleStyle,
  sectionTitleStyle,
} from './styles';
import type { BuilderSidebarProps } from './types';

export default function BuilderSidebar({
  headerParts,
  name,
  age,
  draftText,
  onDraftChange,
  showOnlyWhenNameExists,
  onShowOnlyWhenNameChange,
  onAddText,
  onAddChip,
  onAddNameAndAge,
  onUndoLast,
  onClear,
}: BuilderSidebarProps) {
  return (
    <aside style={asideStyle}>
      <div>
        <h2 style={panelTitleStyle}>Text</h2>
        <p style={helperTextStyle}>
          Build the header by typing normal words and inserting smart values.
        </p>
      </div>

      <HeaderBuilderCard
        headerParts={headerParts}
        name={name}
        age={age}
        draftText={draftText}
        onDraftChange={onDraftChange}
        onAddText={onAddText}
        onAddChip={onAddChip}
        onAddNameAndAge={onAddNameAndAge}
        onUndoLast={onUndoLast}
        onClear={onClear}
      />

      <section style={cardStyle}>
        <h3 style={sectionTitleStyle}>Simple rule</h3>

        <label style={checkboxRowStyle}>
          <input
            type='checkbox'
            checked={showOnlyWhenNameExists}
            onChange={(e) => onShowOnlyWhenNameChange(e.target.checked)}
          />
          Show header only when Name is filled
        </label>
      </section>

      <section style={cardStyle}>
        <h3 style={sectionTitleStyle}>Why this is simpler</h3>

        <p style={helperTextStyle}>
          Instead of writing technical expressions, users build sentences with
          plain text, buttons, and visual chips.
        </p>
      </section>
    </aside>
  );
}
