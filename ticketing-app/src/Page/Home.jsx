import React, { useState, useEffect } from "react";
import EventIntro from "../componets/EventIntro";
import RegistrationForm from "../componets/RegistrationForm";
import Loading from "../componets/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true); // State for loading page
  const [currentPage, setCurrentPage] = useState(1); // State for managing pages

  // Navigate to EventIntro after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const goToNext = () => {
    setCurrentPage(currentPage + 1);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <Loading/>
      </div>
    );
  }

  return (
    <div>
      {currentPage === 1 ? (
        <EventIntro OnNext={goToNext} />
      ) : (
        <RegistrationForm />
      )}
    </div>
  );
};

export default Home;
