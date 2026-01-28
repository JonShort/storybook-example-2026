import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImageGallery } from './ImageGallery';

const meta = {
  title: 'Example/ImageGallery',
  component: ImageGallery,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImageGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample placeholder images
const sampleImages = [
  'https://picsum.photos/seed/img1/400/300',
  'https://picsum.photos/seed/img2/400/300',
  'https://picsum.photos/seed/img3/400/300',
  'https://picsum.photos/seed/img4/400/300',
  'https://picsum.photos/seed/img5/400/300',
  'https://picsum.photos/seed/img6/400/300',
  'https://picsum.photos/seed/img7/400/300',
  'https://picsum.photos/seed/img8/400/300',
];

const sampleTitles = [
  'Mountain Landscape',
  'Ocean Sunset',
  'City Skyline',
  'Forest Path',
  'Desert Dunes',
  'Snowy Peaks',
  'Tropical Beach',
  'Aurora Borealis',
];

export const Default: Story = {
  args: {
    images: sampleImages,
    titles: sampleTitles,
  },
};

export const WithCustomBorder: Story = {
  args: {
    images: sampleImages,
    titles: sampleTitles,
    borderColor: 'blue',
  },
};

export const FewImages: Story = {
  args: {
    images: sampleImages.slice(0, 3),
    titles: sampleTitles.slice(0, 3),
    borderColor: 'purple',
  },
};
