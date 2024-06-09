// src/components/User/Profile.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user, token } = useAuth();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");
  const [trips, setTrips] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [coins, setCoins] = useState(0);
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { name, profile, submissions } = response.data;
        setName(name);
        setBio(profile.bio || "");
        setAvatar(profile.avatar || "");
        setTrips(profile.trips || []);
        setCompetitions(profile.competitions || []);
        setCoins(profile.coins || 0);
        setSubmissions(submissions || []);
      } catch (error) {
        setError("Failed to fetch profile information");
      }
    };
    fetchProfile();
  }, [token]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        "http://localhost:5000/api/profile",
        { name, profile: { bio, avatar, trips, competitions, coins } },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setError("");
      // You might want to display a success message here
    } catch (error) {
      setError("Failed to update profile information");
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleUpdateProfile}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Bio</label>
          <input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div>
          <label>Avatar</label>
          <input
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
      <h2>Submissions</h2>
      <ul>
        {submissions.map((submission) => (
          <li key={submission._id}>{submission.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
