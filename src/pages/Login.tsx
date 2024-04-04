import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');

  const usernameHandler = (e: React.SetStateAction<string>) => {
    setUsername(e);
  };
  const submitHandler = () => {
    localStorage.setItem('username', username);
    navigate('/');
  };

  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-6">
        <label>
          Enter username: <input  name="usernameInput" type="text" onChange={(e) => usernameHandler(e.target.value)} />
        </label>
      </div>
      
      <div className="col-span-6">
        <button className="btn btn-primary" onClick={submitHandler}>SUBMIT</button>
      </div>
      
    </div>
  );
};

export default Login;
