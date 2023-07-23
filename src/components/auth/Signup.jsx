"use client";

import React, { useState } from "react";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSignup = () => {
    console.log(signupData);
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[320px] space-y-2">
        <h3>Signup</h3>
        <input
          name="fullName"
          placeholder="Fullname"
          onChange={handleEventChange}
        />
        <input
          name="email"
          type="email"
          placeholder="email@gmail.com"
          onChange={handleEventChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleEventChange}
        />
        <button onClick={handleSignup}>Signup</button>
      </div>
    </main>
  );
};

export default Signup;
