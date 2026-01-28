import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ImageGallery } from './ImageGallery';

describe('ImageGallery', () => {
  it('renders correctly', () => {
    const { container } = render(
      <ImageGallery
        images={['https://example.com/1.jpg', 'https://example.com/2.jpg']}
        titles={['Image One', 'Image Two']}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
