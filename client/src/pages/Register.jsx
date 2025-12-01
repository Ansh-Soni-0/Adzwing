import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Building2,
  MapPin,
  ArrowLeftFromLine,
} from "lucide-react";
import CountrySuggestionInput from "../components/CountrySuggestionInput";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d3bc632f-9447-4e2e-8b75-389dd0f8fb56");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      // Reset React state
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        company: "",
        state: "",
        role: "",
      });

      // event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    company: "",
    state: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-pink-100 flex items-center justify-center p-4">

      {/* back to home */}
      <p className="text-black absolute p-4 rounded font-semibold top-10 left-30 ">
        <Link to={"/"} className="flex items-center group overflow-hidden">
          <ArrowLeftFromLine className="shrink-0" />
          <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-600 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2">
            Back to home page
          </span>
        </Link>
      </p>

      <form
        onSubmit={onSubmit}
        className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md mt-4"
      >
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          Register
        </h2>

        <div className="space-y-4">
          {/* full name  */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 w-5 h-5" />
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition placeholder:text-gray-400 text-gray-800"
                placeholder="John Doe"
                required
              />
            </div>
          </div>

          {/* email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition placeholder:text-gray-400 text-gray-800"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          {/* phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 w-5 h-5" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition placeholder:text-gray-400 text-gray-800"
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>
          </div>

          {/* company */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 w-5 h-5" />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition placeholder:text-gray-400 text-gray-800"
                placeholder="Company Name"
                required
              />
            </div>
          </div>

          {/* country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              country <span className="text-red-500">*</span>
            </label>
            <div className="relative">

              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 w-5 h-5" />

              <CountrySuggestionInput />
              
            </div>
          </div>

          {/* role  */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 w-5 h-5" />
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition placeholder:text-gray-400 text-gray-800"
                placeholder="Advertiser / Publisher"
                required
              />
            </div>
          </div>

          <button className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-200 shadow-md hover:shadow-lg mt-6">
            Register
          </button>

          <p className="text-black">{result}</p>
        </div>
      </form>
    </div>
  );
}
