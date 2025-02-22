import { useState } from "react";
import { supabase } from "../supabaseClient";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert("Check your email for a confirmation link!");
      navigate("/signin");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white px-4">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-green-400 mb-4">
          Stay<span className="text-blue-400">Fit</span>
        </h1>
        <h2 className="text-2xl font-bold text-center">Create Account</h2>
        <form className="mt-4" onSubmit={handleSignup}>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded"
              required
            />
          </div>
          <div className="mt-3">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 p-2 bg-green-600 rounded hover:bg-green-500"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-400">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
