import React from "react";
import Review from "./Review";

function Home() {
  return (
    <>
      <main>
        <section className="container">
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
    </>
  );
}

export default Home;
