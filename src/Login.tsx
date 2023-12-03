import React, { useState } from 'react';

const Login = () => {
    // State to hold user credentials
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    // Handler for form input changes
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handler for form submission
    const handleSubmit = (e: any) => {
        e.preventDefault();
        // You can add your authentication logic here using the formData
        console.log('Submitting:', formData);
        // Reset the form after submission
        setFormData({ username: '', password: '' });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
