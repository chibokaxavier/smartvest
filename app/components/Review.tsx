import React from "react";
import ReviewGrid from "./ReviewGrid";

const Reviews = () => {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <p
        id="reviews-title"
        className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
      >
        {" "}
        Everyone is changing their life with Investa.{" "}
      </p>
      <p className="mt-2 text-lg text-gray-600 sm:text-center">
        Thousands of people have doubled their net-worth in the last 30 days.
      </p>
      <ReviewGrid />
    </section>
  );
};

export default Reviews;
