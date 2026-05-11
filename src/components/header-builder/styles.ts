import type { CSSProperties } from 'react';

export const segmentFlexBase: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'baseline',
  gap: 4,
};

export const segmentRowStyle = segmentFlexBase;

export const rootStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  fontFamily: 'sans-serif',
};

export const bodyRowStyle: CSSProperties = {
  display: 'flex',
  flex: 1,
  overflow: 'hidden',
};

export const mainStyle: CSSProperties = {
  flex: 1,
  padding: 32,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
};

export const asideStyle: CSSProperties = {
  width: 430,
  borderLeft: '1px solid #e0e0e0',
  background: '#f9f9f9',
  padding: 24,
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  overflow: 'auto',
};

export const draftRowStyle: CSSProperties = {
  display: 'flex',
  gap: 8,
};

export const segmentTextStyle: CSSProperties = {
  whiteSpace: 'pre-wrap',
};

export const segmentEmptyPlaceholderStyle: CSSProperties = {
  color: '#999',
};

export const previewHeadingStyle: CSSProperties = {
  ...segmentFlexBase,
  margin: 0,
  fontSize: 'clamp(1.25rem, 4vw, 2rem)',
  fontWeight: 700,
  lineHeight: 1.25,
};

export const previewPlaceholderStyle: CSSProperties = {
  color: '#777',
  fontWeight: 400,
};

export const guidanceBannerStyle: CSSProperties = {
  padding: '12px 14px',
  borderRadius: 8,
  border: '1px solid #bfd2ff',
  background: '#eef4ff',
  color: '#1a3d99',
  fontSize: '0.95rem',
  lineHeight: 1.45,
  maxWidth: 560,
};

export const fieldHintStyle: CSSProperties = {
  fontSize: '0.8rem',
  color: '#8a5a00',
  lineHeight: 1.35,
};

export const labelStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  fontSize: '0.9rem',
  color: '#444',
  maxWidth: 360,
};

export const inputStyle: CSSProperties = {
  padding: '8px 12px',
  border: '1px solid #ccc',
  borderRadius: 6,
  fontSize: '1rem',
  width: '100%',
  boxSizing: 'border-box',
};

export const eyebrowStyle: CSSProperties = {
  margin: 0,
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: '#888',
  fontWeight: 700,
};

export const panelTitleStyle: CSSProperties = {
  fontSize: '0.8rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: '#888',
  margin: 0,
};

export const helperTextStyle: CSSProperties = {
  margin: '6px 0 0',
  fontSize: '0.9rem',
  color: '#666',
  lineHeight: 1.4,
};

export const cardStyle: CSSProperties = {
  background: 'white',
  border: '1px solid #e5e5e5',
  borderRadius: 12,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
};

export const sectionTitleStyle: CSSProperties = {
  margin: 0,
  fontSize: '1rem',
  color: '#222',
};

export const builderPreviewStyle: CSSProperties = {
  minHeight: 72,
  padding: 12,
  border: '1px dashed #ccc',
  borderRadius: 8,
  background: '#fafafa',
  lineHeight: 1.6,
};

export const chipStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '3px 8px',
  borderRadius: 999,
  background: '#e8f0ff',
  color: '#1f4fd8',
  fontWeight: 700,
  fontSize: '0.85rem',
};

export const buttonGroupStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
};

export const buttonStyle: CSSProperties = {
  border: '1px solid #ccc',
  background: '#fff',
  padding: '8px 12px',
  borderRadius: 6,
  cursor: 'pointer',
  fontSize: '0.9rem',
};

export const secondaryButtonStyle: CSSProperties = {
  ...buttonStyle,
  color: '#555',
};

export const dangerButtonStyle: CSSProperties = {
  ...buttonStyle,
  color: '#b00020',
};

export const chipButtonStyle: CSSProperties = {
  ...buttonStyle,
  background: '#eef4ff',
  border: '1px solid #bfd2ff',
  color: '#1f4fd8',
  fontWeight: 700,
};

export const checkboxRowStyle: CSSProperties = {
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  fontSize: '0.95rem',
  color: '#333',
};

export const emptyStateStyle: CSSProperties = {
  padding: 16,
  border: '1px dashed #ccc',
  borderRadius: 8,
  color: '#777',
  maxWidth: 480,
};
