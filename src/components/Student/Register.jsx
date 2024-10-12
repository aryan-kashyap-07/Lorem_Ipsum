import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [step, setStep] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [basicDetails, setBasicDetails] = useState({
        name: '',
        email: '',
        password: '',
    });
    const navigate=useNavigate();

    const requestOtp = (e) => {
        e.preventDefault();
        //  OTP request karna h yaha
        console.log('OTP requested for phone number:', phoneNumber);
        setOtpSent(true);
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        //  OTP submission wala 
        console.log('OTP submitted:', otp);
        if (otp === '123456') {
            console.log('OTP Verified');
            setStep(2);
        } else {
            console.log('Invalid OTP');
        }
    };

    const handleBasicDetailsSubmit = (e) => {
        e.preventDefault();
        console.log('Basic details submitted:', basicDetails);
        setStep(3);
    };

    const handleFinalSubmit = () => {
        // data to backend
        console.log('Registration Successful');
        // redirect to "/student/form"
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-blue3 font-rubik">
            <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
                {step === 1 && (
                    <>
                    <p className=' text-[14.5px] font-normal'>Welome to <span className=' font-semibold text-hblue2'>PMSSS PORTAL</span></p>
                    <h2 className="text-[37.8px] mb-6 text-left font-medium text-[#424B5A]">Register</h2>

                        {!otpSent ? (
                            <form onSubmit={requestOtp}>
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-gray-700 text-xs">Enter your Mobile Number</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-hblue1"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-hblue2 text-white px-4 py-2 rounded-md hover:bg-hblue1 transition-colors"
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
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-hblue1"
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
                    </>
                )}

                {step === 2 && (
                    <>
                        <h2 className="text-2xl font-bold mb-6 text-center">Register - Step 2</h2>
                        <form onSubmit={handleBasicDetailsSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={basicDetails.name}
                                    onChange={(e) => setBasicDetails({ ...basicDetails, name: e.target.value })}
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-hblue1"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={basicDetails.email}
                                    onChange={(e) => setBasicDetails({ ...basicDetails, email: e.target.value })}
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-hblue1"
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="aadhar" className="block text-gray-700">Aadhar Number</label>
                                <input
                                    type="aadhar"
                                    id="aadhar"
                                    value={basicDetails.aadhar}
                                    onChange={(e) => setBasicDetails({ ...basicDetails, aadhar: e.target.value })}
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-hblue1"
                                    placeholder="Enter your Aadhar Number"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-hblue2 text-white px-4 py-2 rounded-md hover:bg-hblue1 transition-colors"
                            >
                                Submit Details
                            </button>
                        </form>
                    </>
                )}

                {step === 3 && (
                    <>
                        <h2 className="text-2xl font-bold mb-6 text-center">Register - Step 3</h2>
                        <div className="text-center mb-6">
                            <p className="text-lg text-gray-600">Confirm the following details:</p>
                            <ul className="list-disc text-left ml-6 mt-4">
                                <li><strong>Name:</strong> {basicDetails.name}</li>
                                <li><strong>Email:</strong> {basicDetails.email}</li>
                                <li><strong>Phone:</strong> {phoneNumber}</li>
                            </ul>
                        </div>
                        <button
                            onClick={handleFinalSubmit}
                            className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                        >
                            Confirm & Register
                        </button>
                    </>
                )}
                <div className=' text-center pt-3 text-[12px] text-[#8d8d8d] font-normal'>
                    <p>Already Registered? <span onClick={()=>{navigate('/student/login')}} className=' text-hblue2 font-medium cursor-pointer'>Login</span></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
