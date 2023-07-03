import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/reviews');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  return (
    <div>
      <h2>What FlyGo users are saying about the services:</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.name}</h3>
            <p>{review.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;

