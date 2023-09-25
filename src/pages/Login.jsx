import React, { useRef, useEffect } from "react";

function Login({ onIdSubmit }) {
    const idRef = useRef();

    useEffect(() => {
        const savedUsername = localStorage.getItem("username");
        if (savedUsername) {
            idRef.current.value = savedUsername;
        }
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const enteredUsername = idRef.current.value;

        localStorage.setItem("username", enteredUsername);
        onIdSubmit(enteredUsername);
    };

    return (
        <div className="align-items-center d-flex">
            <h2>Enter Your Username</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    ref={idRef}
                    required
                />
                <button type="submit" className="mr-2">Login</button>
            </form>
        </div>
    )
}

export default Login;