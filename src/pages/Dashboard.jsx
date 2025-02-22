import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/signin");
    return null;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-green-400">
        Welcome to Stay<span className="text-blue-400">Fit</span>
      </h1>
      <p className="text-lg mt-2">Logged in as {user.email}</p>
      <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-500 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
