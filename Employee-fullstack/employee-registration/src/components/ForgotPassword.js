import React, { useState } from 'react';
import Css from "../styles/forgot.css"
import axios from 'axios';



const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const Submit = async () =>{
        try {
            const response = await axios.post('http://localhost:5000/api/resetPassword', {
                email: email
            });
            setLoading(false);
            setMessage(response.data.message);
            console.log(response.data.message);
            alert("Password reset email sent")

            } catch (error) {
                setLoading(false);
                setMessage(error.message);
                alert(error.response ? error.response.data.message: 'Something went wrong , please try again ')
            
        }
    }

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            <form onSubmit={Submit}>
                <div>
                    
                    <input
                        type="email"
                        className='form'
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading} className="btn"> 
                    {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ForgotPassword;
