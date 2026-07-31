export interface GalleryImageMeta {
  date?: string;
  credit?: string;
  description?: string;
}

/**
 * Gallery image metadata registry keyed by filename (e.g. 'NSE_2026_03.png', 'NSE_2024_01.jpg').
 * Any fields omitted will fall back to default logic:
 * - date: Extracted year from filename pattern `NSE_YYYY_NN`
 * - credit: Default to "Jeremy Saffer"
 */
export const galleryMetadata: Record<string, GalleryImageMeta> = {
  // Custom overrides can be added here, e.g.:
  // 'NSE_2024_01.jpg': { credit: 'Jeremy Saffer', description: 'Promotional photo for Really Good Terrible Things' }
  'NSE_2024_05.jpg': { credit: 'Laurie Matheos', description: '' },
  'NSE_2024_11.jpg': { credit: 'Laurie Matheos', description: '' },
  'NSE_2024_12.jpg': { credit: 'Laurie Matheos', description: '' },
  'NSE_2024_16.jpg': { credit: 'Laurie Matheos', description: '' },
  'NSE_2024_17.jpg': { credit: 'Laurie Matheos', description: '' },
  'NSE_2024_19.jpg': { credit: 'Laurie Matheos', description: '' },
};

export function getGalleryImageMeta(filename: string): {
  date: string;
  credit: string;
  description?: string;
} {
  const custom = galleryMetadata[filename] || {};

  // Parse YYYY from filename pattern like NSE_2024_01.jpg
  const match = filename.match(/NSE_(\d{4})_\d+/i);
  const fallbackYear = match ? match[1] : '';

  return {
    date: custom.date || fallbackYear,
    credit: custom.credit || 'Jeremy Saffer',
    description: custom.description,
  };
}
