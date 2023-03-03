import React from "react";
import Header from "../Header/Header";
import Reviews from "../Reviews/Reviews";
import CourseSection from "./CourseSection/CourseSection";

const Home = () => {
  return (
    <>
      <Header></Header>
      <CourseSection></CourseSection>
      <Reviews></Reviews>
    </>
  );
};

export default Home;
