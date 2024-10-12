import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const navigate=useNavigate();

    const requestOtp = (e) => {
        e.preventDefault();
        console.log('OTP requested for phone number:', phoneNumber);
        setOtpSent(true);
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        console.log('OTP submitted:', otp);
        // otp validate
        if (otp === '123456') {
            //redirect karne ka logic likh dena tere acc to "/student/dashboard" sample otp dala h
            
            console.log('Login successful!');
        } else {
            console.log('Invalid OTP');
        }
    };

    return (
        <div className="h-screen overflow-hidden flex justify-center items-center bg-blue3 font-rubik">
            <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
                <p className=' text-[14.5px] font-normal'>Welome to <span className=' font-semibold text-hblue2'>PMSSS PORTAL</span></p>
                <h2 className="text-[37.8px] mb-6 text-left font-medium text-[#424B5A]">Student Login</h2>

                {!otpSent ? (
                    <form onSubmit={requestOtp}>
                        <div className="mb-4">
                            <label htmlFor="phone" className=" text-[11px] font-normal">Enter your Phone Number</label>
                            <input
                                type="text"
                                id="phone"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full px-4 py-2 mt-2 border border-hblue2 rounded-md focus:outline-none focus:ring focus:ring-hblue1 text-[14px] font-medium"
                                placeholder="Enter your Phone Number"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-1/3 bg-hblue2 text-white text-sm px-4 py-2 rounded-md hover:bg-hblue1 transition-colors"
                        >
                            Generate OTP
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleOtpSubmit}>
                        <div className="mb-4">
                            <label htmlFor="otp" className="block text-gray-700">OTP</label>
                            <input
                                type="text"
                                id="otp"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full px-4 py-2 mt-2 border border-hblue2 rounded-md focus:outline-none focus:ring focus:ring-hblue1 font-rubik text-[14px] font-medium"
                                placeholder="Enter OTP"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-hblue2 text-white px-4 py-2 rounded-md hover:bg-hblue1 transition-colors"
                        >
                            Submit OTP
                        </button>
                    </form>
                )}
                <div className=' text-center pt-3 text-[12px] text-[#8d8d8d] font-normal'>
                    <p>New user? <span onClick={()=>{navigate('/student/register')}} className=' text-hblue2 font-medium cursor-pointer'>Register</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
