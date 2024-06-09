import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ChallengeCreate from "./components/Challenge/CreateChallenge";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./components/Admin/AdminLogin";
import CreateChallenge from "./components/Admin/CreateChallenge";
import ChallengeDashboard from "./components/Admin/ChallengeDashboard";
import ChallengeDetails from "./components/Admin/ChallengeDetails";
import SubmissionList from "./components/Admin/SubmissionList";
import SubmissionDetails from "./components/Admin/SubmissionDetails";
import Profile from "./components/User/Profile";
import ProtectedRoute from "./components/Admin/ProtectedRoute";
import RegisterCompetition from "./components/Competition/RegisterCompetition";
import PaymentButton from "./components/Payment/PaymentButton";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-challenge" element={<ChallengeCreate />} />
          <Route path="/admin/AdminLogin" element={<AdminLogin />} />
          <Route
            path="/payment/PaymentButton"
            element={<PaymentButton amount={0} currency="INR" />}
          />
          <Route
            path="/admin/create-challenge"
            element={
              <ProtectedRoute>
                <CreateChallenge />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/challenge-dashboard"
            element={
              <ProtectedRoute>
                <ChallengeDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/challenges/:id"
            element={
              <ProtectedRoute>
                <ChallengeDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/challenges/:challengeId/submissions"
            element={
              <ProtectedRoute>
                <SubmissionList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/submissions/:id"
            element={
              <ProtectedRoute>
                <SubmissionDetails />
              </ProtectedRoute>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/register-competition"
            element={<RegisterCompetition userId={123} competitionId={1234} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
