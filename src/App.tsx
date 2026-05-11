import { useState } from 'react';
import AppPreview from './components/header-builder/AppPreview';
import BuilderSidebar from './components/header-builder/BuilderSidebar';
import { INITIAL_HEADER_PARTS } from './components/header-builder/chips';
import { createChipPart, createTextPart } from './components/header-builder/parts';
import { useHeaderGuidance } from './components/header-builder/useHeaderGuidance';
import { bodyRowStyle, rootStyle } from './components/header-builder/styles';
import type { ChipKey, HeaderPart } from './components/header-builder/types';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [headerParts, setHeaderParts] = useState<HeaderPart[]>(INITIAL_HEADER_PARTS);
  const [draftText, setDraftText] = useState('');
  const [showOnlyWhenNameExists, setShowOnlyWhenNameExists] = useState(false);

  const guidance = useHeaderGuidance(
    headerParts,
    name,
    age,
    showOnlyWhenNameExists,
  );

  const {
    nameUnusedInHeader,
    ageUnusedInHeader,
    shouldShowHeader,
    showWiringBanner,
    bannerText,
  } = guidance;

  function addText() {
    if (!draftText.trim()) return;

    setHeaderParts((currentParts) => [
      ...currentParts,
      createTextPart(draftText),
    ]);

    setDraftText('');
  }

  function addChip(chipKey: ChipKey) {
    setHeaderParts((currentParts) => [...currentParts, createChipPart(chipKey)]);
  }

  function addNameAndAge() {
    setHeaderParts((currentParts) => [
      ...currentParts,
      createChipPart('name'),
      createTextPart(', '),
      createChipPart('age'),
    ]);
  }

  function clearHeader() {
    setHeaderParts([]);
    setDraftText('');
  }

  function removeLastPart() {
    setHeaderParts((currentParts) => currentParts.slice(0, -1));
  }

  return (
    <div style={rootStyle}>
      <div style={bodyRowStyle}>
        <AppPreview
          name={name}
          age={age}
          onNameChange={setName}
          onAgeChange={setAge}
          headerParts={headerParts}
          nameUnusedInHeader={nameUnusedInHeader}
          ageUnusedInHeader={ageUnusedInHeader}
          shouldShowHeader={shouldShowHeader}
          showWiringBanner={showWiringBanner}
          bannerText={bannerText}
        />

        <BuilderSidebar
          headerParts={headerParts}
          name={name}
          age={age}
          draftText={draftText}
          onDraftChange={setDraftText}
          showOnlyWhenNameExists={showOnlyWhenNameExists}
          onShowOnlyWhenNameChange={setShowOnlyWhenNameExists}
          onAddText={addText}
          onAddChip={addChip}
          onAddNameAndAge={addNameAndAge}
          onUndoLast={removeLastPart}
          onClear={clearHeader}
        />
      </div>
    </div>
  );
}
