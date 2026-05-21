import { useState, useEffect } from "react";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submittedData, setSubmittedData] = useState([]);

  // Fetch existing data
  useEffect(() => {
    fetch("http://localhost:5000/get")
      .then((res) => res.json())
      .then((data) => setSubmittedData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  // Handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Data saved!");
      setSubmittedData([...submittedData, formData]);
      setFormData({ name: "", email: "" });
    } else {
      alert("Error saving data");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Data:</h2>
      {submittedData.length > 0 ? (
        submittedData.map((item, index) => (
          <div key={index}>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No data yet</p>
      )}
    </div>
  );
}

export default App;