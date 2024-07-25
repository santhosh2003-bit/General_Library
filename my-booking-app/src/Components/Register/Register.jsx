import React, { useState } from "react";
import RegisterBackground from "../../assets/registerbg.png";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [option, setOption] = useState("");

  const handleSubmition = async (e) => {
    e.preventDefault();
    if (!option) {
      alert("Please select an option");
      return;
    }
    if (email && password) {
      try {
        const response = await fetch(
          "http://localhost:5000/api/admin/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userName: userName,
              name: name,
              email: email,
              password: password,
              contactNumber: contact,
            }),
          }
        );

        const data = await response.json();
        if (response.ok) {
          alert(data.message);
          setUserName("");
          setName("");
          setEmail("");
          setPassword("");
          setContact("");
          window.location.href = "/login";
        } else {
          alert(data.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleUserSubmition = async (e) => {
    e.preventDefault();
    if (!option) {
      alert("Please select an option");
      return;
    }
    if (email && password) {
      try {
        const response = await fetch(
          "http://localhost:5000/api/user/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userName,
              name,
              email,
              password,
              contact,
            }),
          }
        );

        const data = await response.json();
        if (response.ok) {
          alert(data.message);
          setUserName("");
          setName("");
          setEmail("");
          setPassword("");
          setContact("");
          window.location.href = "/login";
        } else {
          alert(data.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  console.log(option);
  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-slate-100"
      style={{
        backgroundImage: `url(${RegisterBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl font-bold mb-12">Register Form</h1>
      <div className="flex gap-5 justify-between">
        <div>
          <input
            type="radio"
            name="role"
            id="admin"
            value="admin"
            onChange={(e) => setOption(e.target.value)}
          />
          <label htmlFor="admin" className="text-gray-500 text-xl mb-2">
            Admin
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="role"
            id="user"
            value="user"
            onChange={(e) => setOption(e.target.value)}
          />
          <label htmlFor="user" className="text-gray-500 text-xl mb-2">
            User
          </label>
        </div>
      </div>
      <form
        onSubmit={option === "admin" ? handleSubmition : handleUserSubmition}
        className="flex flex-col border-2 border-blue-200 pt-4 pb-4 pl-7 pr-7 rounded-md shadow-2xl bg-white/75"
      >
        <label htmlFor="username" className="text-gray-500 text-xl mb-2">
          UserName:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="e.g Sri"
          required
          className="pt-1 pb-1 pl-2 pr-2 rounded-md text-xl mb-2 outline-none"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="name" className="text-gray-500 text-xl mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g Sri"
          required
          className="pt-1 pb-1 pl-2 pr-2 rounded-md text-xl mb-2 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" className="text-gray-500 text-xl mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="e.g Sri@gmail.com"
          className="pt-1 pb-1 pl-2 pr-2 rounded-md text-xl mb-2 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password" className="text-gray-500 text-xl mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="123456789"
          className="pt-1 pb-1 pl-2 pr-2 rounded-md text-xl mb-2 outline-none"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="contactNumber" className="text-gray-500 text-xl mb-2">
          Contact Number:
        </label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          placeholder="9999999999"
          className="pt-1 pb-1 pl-2 pr-2 rounded-md text-xl mb-2 outline-none"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-700 text-white font-bold pt-1 pb-1 pl-2 pr-2 rounded-md mb-4"
        >
          Register
        </button>
        <p className="text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-700">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
