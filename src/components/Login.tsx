import { useState } from "react";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="bg-[url('src/assets/loginBgImg1.svg')] bg-cover bg-centre bg-no-repeat min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-black/70 shadow-xl rounded-xl p-8 w-96">
        <h2 className="text-2xl text-white font-semibold mb-6 text-center">
          {isLoggedIn ? "Sign Up Your Account" : "Login to Your Account"}
        </h2>
        {isLoggedIn && (
          <input
            type="text"
            className="w-full text-white border p-3 rounded-lg mb-4"
            placeholder="Full Name"
            // onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full text-white border p-3 rounded-lg mb-4"
          // onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full text-white border p-3 rounded-lg mb-6"
          // onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-sm text-white mb-6 text-left">
          {isLoggedIn ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={handleLogin}
            className="text-blue-400 hover:underline cursor-pointer"
          >
            {isLoggedIn ? "Login" : "Sign Up"}
          </button>
        </p>
        <button
          // onClick={handleLogin}
          className="font-semibold w-full bg-amber-500 text-white py-3 rounded-lg hover:opacity-80 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-200  cursor-pointer"
        >
          {isLoggedIn ? "Sign Up" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
