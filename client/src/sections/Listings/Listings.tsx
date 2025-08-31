import React from "react";
import { server } from "../../lib/api";
import { ListingsData } from "./types";

const LISTINGS = `
  query Listings {
    listings {
      id
      title
      image
      address
      price
      numOfGuests
      numOfBeds
      numOfBaths
      rating
    }
  }
`;

interface Props {
  title: string;
}

export const Listings = ({ title }: Props) => {
  const fetchListings = async () => {
    const { data } = await server.fetch<ListingsData>({ query: LISTINGS });
    console.log(data); // check the console to see the listings data from our GraphQL Request!
    
    // TypeScript now knows the shape of data
    console.log(data.listings); // ✅ This works - listings exists in data
    // console.log(data.bookings); // ❌ This would cause a TypeScript error - bookings does not exist
    
    // TypeScript also provides autocomplete and type checking for listing properties
    if (data.listings.length > 0) {
      const firstListing = data.listings[0];
      console.log(firstListing.title); // ✅ TypeScript knows this is a string
      console.log(firstListing.price); // ✅ TypeScript knows this is a number
      // console.log(firstListing.invalidField); // ❌ TypeScript error - field doesn't exist
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={fetchListings}>Query Listings!</button>
    </div>
  );
};
