import "./FormStyles.css";

import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    fname: "",
    email: "",
    subject: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    console.log(value);
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async(event) => {
    event.preventDefault();
    const {fname,email,subject,message} = userData;

    if(fname && email && subject && message){
    const res = fetch("https://contact-1bb1e-default-rtdb.firebaseio.com/userDataRecords.json",{
       method: "POST",
       headers: {
        "Content-Type": "application/json",
       },
       body: JSON.stringify({
        fname,
        email,
        subject,
        message,
       }),
    });

    if(res) {
      setUserData({
        fname: "",
        email: "",
        subject: "",
        message: "",
      });
      alert("Data Stored");
    }else{
      alert("Plz fill the data.");
    }
  }else{
    alert("Plz fill the data.");
  }
  };

  return (
    <div className="form">
      <form method="post">
        <label>Your Name</label>
        <input
          type="text"
          name="fname"
          value={userData.fname}
          onChange={postUserData}
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={postUserData}
        ></input>
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={userData.subject}
          onChange={postUserData}
        ></input>
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          name="message"
          value={userData.message}
          onChange={postUserData}
        />
        <button className="btn" type="submit" onClick={submitData}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
