import React, { useState } from "react";
import axios from "axios";

const CreatePlugin = () => {
  const [domain, setDomain] = useState("");
  const [domainName, setDomainName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setDomainName(value);
  };

  const handleClick = async () => {
    if (!domainName) {
      // If input field is empty, display an error message and return
      setErrorMessage("Please enter domain name to be added!");
      return;
    } else {
      // Clear the error message if the input is not empty
      setErrorMessage("");
    }
    try {
      console.log(domainName);
      const currentDomain = window.location.href;
      console.log(currentDomain);
      const response = await axios.post("/api/add-domain", {
        currentDomain: currentDomain,
        addDomain: domainName,
      });
      console.log("Data sent successfully");

      //success
      if (!response.data.success) {
        // setDomain(response.data.data);
        console.log(response.data.message);
        return;
      }
      //failure
      setDomain(response.data.data);
    } catch (err) {
      //handling error
      console.log("error while sending data: ", err);
    }
  };

  return (
    <div
      className="container w-50 mt-5"
      style={{ border: "1px solid grey", borderRadius: "7px" }}
    >
      <div className="text-center">
        <h4>Add Domain Name</h4>
      </div>
      <hr />
      <div>
        <label htmlFor="domainName" className="form-label">
          Domain name
        </label>
        <input
          type="text"
          name="domainName"
          className="form-control w-100 mb-1"
          value={domainName}
          onChange={handleChange}
          placeholder="Please enter domain name..."
        />
      </div>
      {errorMessage && <span className="text-danger">{errorMessage}</span>}
      <div>
        <button onClick={handleClick} className="btn btn-primary mt-2 mb-2">
          Add domain
        </button>
      </div>
      <div>
        {domain && <p>Actual domain : {window.location.href}</p>}
        <p>New Domain after adding domain name : {domain}</p>
      </div>
    </div>
  );
};

export default CreatePlugin;
