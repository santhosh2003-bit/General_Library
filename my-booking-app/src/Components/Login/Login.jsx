import React, { useState } from "react";
import RegisterBackground from "../../assets/registerbg.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [option, setOption] = useState("");

  const handleSubmition = async (e) => {
    e.preventDefault();
    if (!option) {
      alert("Please select an option");
      return;
    }

    const url =
      option === "admin"
        ? "http://localhost:5000/api/admin/login"
        : "http://localhost:5000/api/user/login";

    if (email && password) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          if (data.message) {
            alert(data.message);
            localStorage.setItem("token", data.token);
            localStorage.setItem(
              "user",
              option === "admin"
                ? JSON.stringify(data.admin)
                : JSON.stringify(data.user)
            );
            setEmail("");
            setPassword("");
            window.location.href = "/";
          } else {
            alert(data.error);
          }
        } else {
          alert(data.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

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
      <h1 className="text-3xl font-bold mb-12 relative top-[-15%]">
        Login Form
      </h1>
      <div className="flex gap-5 justify-between relative top-[-15%]">
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
        action=""
        onSubmit={handleSubmition}
        className="flex flex-col border-2 border-blue-200 pt-4 pb-4 pl-7 pr-7 rounded-md shadow-2xl  bg-white/75"
      >
        <label htmlFor="email" className="text-gray-500 text-xl mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="e.g Sri@gmail.com"
          className="pt-1 pb-1 pl-2 pr-2 rounded-md text-xl mb-2 outline-none"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <button
          type="submit"
          className="bg-blue-700 text-white font-bold pt-1 pb-1 pl-2 pr-2 rounded-md mb-4"
        >
          Login
        </button>
        <p className="text-gray-500">
          if you don`t have an account?{" "}
          <a href="/register" className="text-blue-700">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
