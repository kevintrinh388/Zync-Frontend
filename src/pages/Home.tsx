import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>(localStorage.getItem('username') ?? '');
  const [mails, setMails] = useState([])


  useEffect(() => {
    if (!username) {
      navigate('/login');
    }
    else{
      fetch(`${import.meta.env.VITE_SERVER_URL}/mail/${username}`)
      .then(response => response.json())
      .then(data => setMails(data))
      .catch(error => console.error("Error:", error));
    }

  }, []);

  return (
    <>
      <div>HOME: HELLO {username}!</div>
      {mails.map((mail)=>{
        return <div>{mail.body}</div>
      })}
    </>
  )
  ;
};

export default Home;
