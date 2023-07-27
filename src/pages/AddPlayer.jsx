import React, { useState } from "react";

export default function AddPlayer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [usta, setUsta] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const player = { firstName, lastName, email, phoneNumber, usta };
    console.log(player);
    setIsPending(true);

    fetch("http://192.168.56.1:8000/players", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(player),
    })
      .then((res) => {
        console.log("New player added");
        console.log(res);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("post aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
    setIsPending(false);
  };

  return (
    <div className="mainModule">
      <div className="moduleHdr">Add Player</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="usta">USTA NTRP Rating:</label>
          <select
            name="usta"
            value={usta}
            onChange={(e) => setUsta(e.target.value)}
            required
          >
            <option value="">-- Select --</option>
            <option>2.5</option>
            <option>3.0</option>
            <option>3.5</option>
            <option>4.0</option>
            <option>4.5</option>
            <option>5.0</option>
          </select>
        </div>
        <div className="buttonBox">
          {!isPending && (
            <button className="mainButton" type="submit">
              Submit
            </button>
          )}
          {isPending && (
            <button className="mainButton" disabled>
              Adding Player
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
