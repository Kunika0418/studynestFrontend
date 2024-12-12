import React, { useState } from 'react';

const BuyForm = ({ apartment }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
    });

    const [errors, setErrors] = useState({
        email: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email) {
            setErrors({ email: true });
            return;
        }
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className={`max-w-sm mx-auto border-2 border-green-500 rounded-xl`}>
            <div className='border-b border-bg-300 bg-gradient-to-b from-green-300 to-bg-green-200 p-4 rounded-t-xl'>
                <h2 className="text-2xl text-accent-100 font-semibold text-center">${apartment.price}/month</h2>

                <button className="bg-pink-100 text-primary-100 px-4 py-2 rounded mt-4 w-full text-left">
                    <span className="font-semibold">Advance rent</span> 2 months' Rent
                    <span className="float-right">→</span>
                </button>
            </div>
            <div className="form px-4 mb-4 h-80">
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder='Full Name'
                            className="w-full border border-accent-200 px-4 py-2 rounded-lg mt-1 outline-none"
                            required
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder='Phone Number'
                            className="w-full border border-accent-200 px-4 py-2 rounded-lg mt-1 outline-none"
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-accent-200 px-4 py-2 rounded-lg mt-1 outline-none"
                            placeholder='Email'
                            required
                        />
                        {formData.email.length === 0 && (
                            <p className={`text-red-500 text-sm mt-1`}>Email address is required</p>
                        )}
                    </div>

                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            name="terms"
                            id="terms"
                            className="h-4 w-4 text-primary-100 mt-[0.15rem]"
                        />
                        <label htmlFor="terms" className="ml-2 text-gray-600 text-sm">
                            By continuing, you agree to our{' '}
                            <a href="#" className="text-darkpink">
                                Privacy Policy
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-darkpink">
                                Terms of Service
                            </a>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-blue hover:bg-blue/90 hover:scale-95 text-lightpink font-semibold rounded-lg transition duration-500 ease-in-out"
                    >
                        Find My Home
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BuyForm;
