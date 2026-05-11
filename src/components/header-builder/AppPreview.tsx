import { HeaderSegments } from './HeaderSegments';
import {
  emptyStateStyle,
  eyebrowStyle,
  fieldHintStyle,
  guidanceBannerStyle,
  inputStyle,
  labelStyle,
  mainStyle,
  previewHeadingStyle,
  previewPlaceholderStyle,
} from './styles';
import type { AppPreviewProps } from './types';

export default function AppPreview({
  name,
  age,
  onNameChange,
  onAgeChange,
  headerParts,
  nameUnusedInHeader,
  ageUnusedInHeader,
  shouldShowHeader,
  showWiringBanner,
  bannerText,
}: AppPreviewProps) {
  return (
    <main style={mainStyle}>
      <p style={eyebrowStyle}>App preview</p>

      {showWiringBanner ? (
        <div style={guidanceBannerStyle} role='status'>
          {bannerText}
        </div>
      ) : null}

      {shouldShowHeader ? (
        <h1 style={previewHeadingStyle}>
          {headerParts.length === 0 ? (
            <span style={previewPlaceholderStyle}>
              Your dynamic text will appear here
            </span>
          ) : (
            <HeaderSegments
              parts={headerParts}
              name={name}
              age={age}
              chipLabelsOnly={false}
            />
          )}
        </h1>
      ) : (
        <div style={emptyStateStyle}>
          Header is hidden because the name is empty.
        </div>
      )}

      <label style={labelStyle}>
        Name
        <input
          style={inputStyle}
          type='text'
          placeholder='Enter name'
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          aria-describedby={nameUnusedInHeader ? 'name-wiring-hint' : undefined}
        />
        {nameUnusedInHeader ? (
          <span id='name-wiring-hint' style={fieldHintStyle}>
            This value is not in your header yet. On the right, use Insert Name
            in the header builder.
          </span>
        ) : null}
      </label>

      <label style={labelStyle}>
        Age
        <input
          style={inputStyle}
          type='number'
          placeholder='Enter age'
          min={0}
          value={age}
          onChange={(e) => onAgeChange(e.target.value)}
          aria-describedby={ageUnusedInHeader ? 'age-wiring-hint' : undefined}
        />
        {ageUnusedInHeader ? (
          <span id='age-wiring-hint' style={fieldHintStyle}>
            This value is not in your header yet. On the right, use Insert Age or
            Insert Age Group.
          </span>
        ) : null}
      </label>
    </main>
  );
}
