import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>(localStorage.getItem('username') ?? '');

  useEffect(() => {
    if (!username) {
      navigate('/login');
    }
  }, []);
  
  return (
    <>
      <div>HOME: HELLO {username}!</div>
    </>
  )
  ;
};

export default Home;
