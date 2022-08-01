import React, { useState } from "react";
import people from "./MOCK_DATA";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(1);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <>
      <div>
        <article className="review">
          <div className="img-container">
            <img src={image} alt={name} className="person-img"></img>
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="button-container">
            <button className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button className="random-btn">surprise me</button>
        </article>
      </div>
    </>
  );
}

export default Review;