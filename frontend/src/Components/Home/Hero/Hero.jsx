import React from "react";
import { Link } from "react-router-dom";
import "./NewsLetter/Hero.css";
import drillImage from '../../Assets/drill.png'
import NewsLetter from "./NewsLetter/NewsLetter";

const Hero = () => {
  return (
    <>
      <div className="hero-banner ">
        <div className="banner-content">
          <h5>Best Deal</h5>
          <h1>Power Drill</h1>
          <h1 className="large-heading">Promotion</h1>
          <Link to='/product/1'><button className="banner-button">Shop Power Drill</button></Link>
        </div>
        <div className="banner-image">
          <img src={drillImage} alt="Power Drill" />
        </div>
        <div className="banner-description sm:w">
          <h4>Description</h4>
          <p>
            Enhance your toolkit with our high-performance power drill, designed
            for precision and power. Perfect for all your DIY projects and
            professional tasks. Don't miss out on this limited-time offer!
          </p>
        </div>
      </div>
      <ClientReviews />
      <div>
        <NewsLetter />
      </div>

      <Link to="/about">
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 max-w-sm text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition transform duration-300 ease-in-out hover:scale-110">
            Read what our Clients had to say
          </button>
        </div>
      </Link>
    </>
  );
};
const ClientReviews = () => {
  const reviews = [
    {
      name: "Haris Zaheer",
      review:
        "Great power drill! It has been very helpful for my DIY projects.",
      rating: 5,
    },
    {
      name: "Daniyal Omer",
      review: "High quality and easy to use. Highly recommend!",
      rating: 4,
    },
    {
      name: "Abdullah Chaudhary",
      review: "Good value for money. Performs well on various tasks.",
      rating: 4,
    },
  ];

  return (
    <div className="reviews-section hover:shadow-xl hover:shadow-blue-600/30 shadow-2xl shadow-blue-500/20">
      <h2>Client Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h4>{review.name}</h4>
            <p>{review.review}</p>
            <div className="review-rating">{renderStars(review.rating)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderStars = (rating) => {
  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += "⭐";
  }
  return <span>{stars}</span>;
};

export default Hero;

