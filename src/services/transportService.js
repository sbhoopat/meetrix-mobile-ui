// Mock data service - Replace with your actual API calls
const mockTransportData = [
  {
    id: 1,
    name: 'Standard Sedan',
    type: 'Sedan',
    description: 'Comfortable 4-seater sedan perfect for city travel. Well-maintained vehicle with modern amenities.',
    capacity: 4,
    price: 25,
    priceUnit: 'hour',
    status: 'available',
    duration: '1-2 hours',
    features: ['Air Conditioning', 'WiFi', 'GPS Navigation'],
  },
  {
    id: 2,
    name: 'Premium SUV',
    type: 'SUV',
    description: 'Spacious SUV ideal for families and groups. Offers premium comfort and extra luggage space.',
    capacity: 6,
    price: 45,
    priceUnit: 'hour',
    status: 'available',
    duration: '2-4 hours',
    features: ['Air Conditioning', 'WiFi', 'GPS Navigation', 'Leather Seats'],
  },
  {
    id: 3,
    name: 'Luxury Van',
    type: 'Van',
    description: 'Luxury van for larger groups and special occasions. Perfect for corporate events and family trips.',
    capacity: 8,
    price: 65,
    priceUnit: 'hour',
    status: 'available',
    duration: '3-5 hours',
    features: ['Air Conditioning', 'WiFi', 'GPS Navigation', 'Premium Seating', 'Entertainment System'],
  },
  {
    id: 4,
    name: 'Economy Car',
    type: 'Compact',
    description: 'Affordable compact car for short trips. Fuel-efficient and perfect for budget-conscious travelers.',
    capacity: 4,
    price: 18,
    priceUnit: 'hour',
    status: 'available',
    duration: '1 hour',
    features: ['Air Conditioning', 'GPS Navigation'],
  },
  {
    id: 5,
    name: 'Executive Sedan',
    type: 'Luxury Sedan',
    description: 'High-end sedan for business professionals. Premium interior with all modern features.',
    capacity: 4,
    price: 55,
    priceUnit: 'hour',
    status: 'available',
    duration: '2-3 hours',
    features: ['Air Conditioning', 'WiFi', 'GPS Navigation', 'Premium Leather', 'Charging Ports'],
  },
];

export const getTransportList = async () => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTransportData);
    }, 1000);
  });
};

export const getTransportById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const transport = mockTransportData.find(item => item.id === id);
      if (transport) {
        resolve(transport);
      } else {
        reject(new Error('Transport not found'));
      }
    }, 500);
  });
};

export const bookTransport = async (bookingData) => {
  // Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        bookingId: Math.random().toString(36).substr(2, 9).toUpperCase(),
        ...bookingData,
        bookingDate: new Date().toISOString(),
      });
    }, 1500);
  });
};

