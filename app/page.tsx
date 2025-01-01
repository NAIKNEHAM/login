"use client";


import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (username.trim()  && password.trim() ) {
            router.push("/welcome"); // Redirect to the welcome page
        } else {
            alert("Invalid username or password!");
        }
    };

    const handleRegisterRedirect = () => {
      router.push("/register"); // Redirect to the register page
  };

    return (
        <div className="container">
            <div className="login-card">
          <div style={{textAlign:"center",marginTop:"20px",}}>
          
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
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
                <div className="button-container">
                    {/* Login Button */}
                    <button type="submit">Login</button>
                    {/* Register Button */}
                    <button type="button" onClick={handleRegisterRedirect}>Register</button>
                </div>
            </form>
            </div>
            </div>
            </div>
            
        
        
    );
}
