import React, { useState } from "react";
import axios from "axios";
import bottomDesign from "../assets/design1.png";
import topDesign from "../assets/design3.png";
import { useNavigate } from "react-router-dom";


const Contact = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccessMsg("");
  };

  // simple email regex check
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Empty field check
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);
      const response = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        console.log("✅ API Success:", response.data);
        setSuccessMsg("Form Submitted");
        setFormData({ name: "", email: "", phone: "", message: "" });
        navigate("/")
        
      } else {
        console.error("❌ API Error:", response.status);
        setSuccessMsg("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("🚨 Axios Error:", error);
      setSuccessMsg("Network or server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative  pt-[70px] min-h-screen text-[#1f1f1f] font-serif overflow-hidden flex flex-col justify-center items-center gap-10 px-6 md:px-16 py-10">
      {/* Top Decorative Image */}
      <img
        src={topDesign}
        alt="top design"
        className="absolute top-0 right-0 w-[280px] md:w-[350px] opacity-90 pointer-events-none"
      />

      {/* Bottom Decorative Image */}
      <img
        src={bottomDesign}
        alt="bottom design"
        className="absolute bottom-0 left-0 w-[280px] md:w-[350px] opacity-90 pointer-events-none"
      />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 z-10">
        {/* Left Text Section */}
        <div className="max-w-md mt-12 md:mt-0">
          <p className="leading-relaxed font-instrument text-[17px] md:text-[17px]">
            Whether you have an idea, a question, or simply want to explore how
            V can work together, V’re just a message away.
            <br />
            Let’s catch up over coffee. <br />
            Great stories always begin with a good conversation.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-[450px] bg-transparent">
          <h2 className="text-2xl md:text-[26px] text-center md:text-left font-halant">
            Join the Story
          </h2>
          <p className="text-[16px] font-instrument text-gray-700 mb-6 text-center md:text-left">
            Ready to bring your vision to life? Let’s talk.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name*"
              className={`w-full border bg-[#FFFFFF] border-[#EAEAEA] p-2 rounded-sm focus:outline-none ${
                errors.name ? "border-red-500" : "focus:border-[#e25b37]"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email*"
              className={`w-full border bg-[#FFFFFF] border-[#EAEAEA] p-2 rounded-sm focus:outline-none ${
                errors.email ? "border-red-500" : "focus:border-[#e25b37]"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            {/* Phone */}
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className={`w-full border bg-[#FFFFFF] border-[#EAEAEA] p-2 rounded-sm focus:outline-none ${
                errors.phone ? "border-red-500" : "focus:border-[#e25b37]"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message*"
              rows="4"
              className={`w-full border bg-[#FFFFFF] border-[#EAEAEA] p-2 rounded-sm resize-none focus:outline-none ${
                errors.message ? "border-red-500" : "focus:border-[#e25b37]"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#e25b37] hover:bg-[#c94c2f]"
              } text-white px-6 py-2 rounded-full transition-all duration-300`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            {successMsg && (
              <p
                className={`${
                  successMsg === "Form Submitted"
                    ? "text-green-600"
                    : "text-red-500"
                } text-sm mt-2`}
              >
                {successMsg}
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-baseline gap-2 text-[#e25b37] text-[15px] font-medium">
            <a
              href="mailto:venita@varmanfilms.co.in"
              className="hover:underline"
            >
              venita@varmanfilms.co.in
            </a>
            <span className="hidden md:block">|</span>
            <span>+91 98736 84567</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
