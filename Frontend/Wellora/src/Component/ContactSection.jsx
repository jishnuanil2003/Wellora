import React, { useState } from "react";
import doctorImg from "../asset/doctorimg2.png"; // replace with your image path
import axios from "axios";

const ContactSection = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({
        'name': '',
        'email': '',
        'phone': '',
        'message': ''
    })
    const handleMessage = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            console.log(form);
            const response = await axios.post('http://127.0.0.1:8000/message/', form)
            console.log(response.data)
            console.log("Form submited successfully");
            setForm({
                'name': "",
                'email': "",
                'phone': "",
                'message': "",
            });
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <section className="bg-white py-20 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Left: Form */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Start Your Wellness Journey Now
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Whether you need to schedule an appointment, ask a medical question,
                        or get immediate support — we’re always here to help.
                    </p>

                    <form className="bg-blue-50 rounded-2xl p-6 shadow-sm" onSubmit={handleMessage}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={form.name}
                                className="p-3 rounded-lg border text-gray-500 bg-white border-gray-200 outline-none focus:ring-2 focus:ring-blue-400"
                                onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                                className="p-3 rounded-lg border  text-gray-500 bg-white border-gray-200 outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <input
                            type="tel"
                            placeholder="Phone"
                            name="phone"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                            className="w-full p-3 mt-4 rounded-lg border  text-gray-500 bg-white border-gray-200 outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <textarea
                            placeholder="Message"
                            rows="4"
                            name="message"
                            value={form.message}
                            onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                            className="w-full p-3 mt-4 rounded-lg border  text-gray-500 bg-white border-gray-200 outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            className={`mt-5 bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all ${isLoading ?(`cursor-not-allowed`):(` hover:bg-blue-700`)}`}>
                            {isLoading ? ('Sending...') : ('Send Message')}
                        </button>
                    </form>
                </div>
                {/* Right: Doctor Image */}
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full border-2 border-blue-100 blur-2xl"></div>
                        <img
                            src={doctorImg}
                            alt="Doctor"
                            className="relative z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;