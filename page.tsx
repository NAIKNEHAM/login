"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();

    const handleRegister = (e) => {
        e.preventDefault();

        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // If registration successful, redirect to login page
        alert("Registration successful!");
        router.push("/login"); // Redirect to login page after registration
    };

    return (
        <div className="login-container">
            <div className="login"></div>
            <h1>Register Page</h1>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label>Confirm Password: </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
