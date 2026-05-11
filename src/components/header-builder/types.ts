export type ChipKey = 'name' | 'age' | 'ageGroup';

export type HeaderPart =
  | { id: string; type: 'text'; value: string }
  | { id: string; type: 'chip'; value: ChipKey };

export interface HeaderGuidance {
  nameUnusedInHeader: boolean;
  ageUnusedInHeader: boolean;
  shouldShowHeader: boolean;
  showWiringBanner: boolean;
  bannerText: string;
}

export interface HeaderSegmentsProps {
  parts: HeaderPart[];
  name: string;
  age: string;
  chipLabelsOnly?: boolean;
  emptyPlaceholder?: string;
}

export interface AppPreviewProps {
  name: string;
  age: string;
  onNameChange: (value: string) => void;
  onAgeChange: (value: string) => void;
  headerParts: HeaderPart[];
  nameUnusedInHeader: boolean;
  ageUnusedInHeader: boolean;
  shouldShowHeader: boolean;
  showWiringBanner: boolean;
  bannerText: string;
}

export interface HeaderBuilderCardProps {
  headerParts: HeaderPart[];
  name: string;
  age: string;
  draftText: string;
  onDraftChange: (value: string) => void;
  onAddText: () => void;
  onAddChip: (chipKey: ChipKey) => void;
  onAddNameAndAge: () => void;
  onUndoLast: () => void;
  onClear: () => void;
}

export interface BuilderSidebarProps extends HeaderBuilderCardProps {
  showOnlyWhenNameExists: boolean;
  onShowOnlyWhenNameChange: (value: boolean) => void;
}
