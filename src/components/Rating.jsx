import React from 'react';

const Rating = ({ vote_average }) => {
  const filledStars = Math.round(vote_average);
  console.log(vote_average);

  const renderStar = (value) => {
    const starClass = value <= filledStars ? 'stars' : 'star'; // Use 'stars' class for filled stars, 'star' class for empty stars
    return (
      <span
        key={value}
        className={` ${starClass}`}
      />
    );
  };

  return (
    <div className="rating">
      {[...Array(10)].map((_, index) => {
        const value = index + 1;
        return renderStar(value);
      })}
    </div>
  );
};

export default Rating;
