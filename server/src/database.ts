import { MongoClient } from "mongodb";

// Mock data for testing React hooks
const mockListings = [
  {
    _id: "5d4507a9cf295034813b35c2",
    id: "5d4507a9cf295034813b35c2",
    title: "Clean and fully furnished apartment. 5 min away from CN Tower",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7567d34655c9c423c5e654c9e8e6fca&auto=format&fit=crop&w=1950&q=80",
    address: "3210 Scotchmere Dr W, Toronto, ON, Canada",
    price: 10000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 5
  },
  {
    _id: "5d4507a9cf295034813b35c3",
    id: "5d4507a9cf295034813b35c3", 
    title: "Cozy, clean, and affordable studio",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c296d70548ea8e6db2180b60d2724208&auto=format&fit=crop&w=1950&q=80",
    address: "7009 Strawberry Street, Toronto, ON, Canada",
    price: 15000,
    numOfGuests: 3,
    numOfBeds: 2,
    numOfBaths: 1,
    rating: 4
  },
  {
    _id: "5d4507a9cf295034813b35c4",
    id: "5d4507a9cf295034813b35c4",
    title: "Bright 1-bedroom apartment with amazing view",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7e64e3a1868aeaff1e4124cc5a6e84da&auto=format&fit=crop&w=800&q=80",
    address: "200 Queens Quay W, Toronto, ON, Canada", 
    price: 20000,
    numOfGuests: 4,
    numOfBeds: 3,
    numOfBaths: 2,
    rating: 5
  }
];

// Mock database collection
const mockCollection = {
  find: () => ({
    toArray: async () => mockListings
  }),
  findOneAndDelete: async (filter: any) => {
    const index = mockListings.findIndex(listing => listing.id === filter.id);
    if (index !== -1) {
      const deleted = mockListings.splice(index, 1)[0];
      return { value: deleted };
    }
    return null;
  }
};

export const connectDatabase = async () => {
  console.log('Using mock database for testing React hooks');
  
  return {
    listings: mockCollection
  };
};
