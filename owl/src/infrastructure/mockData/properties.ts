import { Property } from '../../domain/models/Property';

export const mockProperties: Property[] = [
  {
    id: 'prop-1',
    name: 'Sunshine Boarding House',
    location: 'Cebu City, Cebu',
    priceRange: '₱3,000 - ₱5,000',
    images: [
      'https://picsum.photos/id/1015/400/300',
      'https://picsum.photos/id/1016/400/300',
      'https://picsum.photos/id/1018/400/300'
    ],
    description: 'A bright and airy boarding house perfect for students and young professionals. Features easy access to public transportation and a quiet study atmosphere.',
    inclusions: ['Free High-Speed WiFi', 'Water Bill Included', 'Shared Kitchen', 'Study Lounge']
  },
  {
    id: 'prop-2',
    name: 'Makati Executive Dorm',
    location: 'Makati City, Metro Manila',
    priceRange: '₱4,500 - ₱8,000',
    images: [
      'https://picsum.photos/id/1040/400/300',
      'https://picsum.photos/id/1043/400/300',
      'https://picsum.photos/id/1044/400/300'
    ],
    description: 'Premium dormitory located right in the heart of the central business district. Fully airconditioned with top-notch security, ideal for corporate employees.',
    inclusions: ['Air Conditioning', '24/7 Security', 'GYM Access', 'Cleaning Service']
  },
  {
    id: 'prop-3',
    name: 'Cozy Student Pad',
    location: 'Quezon City, Metro Manila',
    priceRange: '₱2,500 - ₱4,000',
    images: [
      'https://picsum.photos/id/1031/400/300',
      'https://picsum.photos/id/1032/400/300',
      'https://picsum.photos/id/1033/400/300'
    ],
    description: 'Affordable, clean, and extremely close to major universities. Features an expansive communal area and weekly deep cleaning for common spaces.',
    inclusions: ['Electricity Included', 'Bunk Beds provided', 'Locker Space', 'Weekly Cleaning']
  }
];
