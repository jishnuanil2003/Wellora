import React, { useState } from "react";
import { FaInbox } from "react-icons/fa";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    age: "",
    gender: "",
    address: "",
    appointmentDate: "",
    appointmentTime: "",
    department: "",
    doctor: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isEmpty = Object.values(formData).every((val) => val === "");

  return (
    <>
      {/* <Navbar/> */}
      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row justify-center items-start p-6 md:p-12 gap-10 text-black">
        {/* Left Side - Form */}
        <div className="w-full md:w-2/3 bg-white shadow-md rounded-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Appointment Information
          </h2>

          {/* Top Section */}
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                type="number"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Gender */}
              <div className="flex items-center gap-4 border border-gray-300 rounded-lg px-4 py-3">
                <label className="text-gray-700">Gender:</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">

                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            {/* Bottom Section */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Appointment Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Appointment Date"
                  value={formData.appointmentDate ? dayjs(formData.appointmentDate) : null}
                  minDate={dayjs()}
                  onChange={(newValue) => {
                    setFormData({ ...formData, appointmentDate: newValue ? newValue.format("YYYY-MM-DD") : "" });
                  }}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: "outlined",
                      sx: {
                        "& .MuiInputBase-root": {
                          borderRadius: "8px",
                          fontSize: "1rem",
                        },
                      },
                    },
                  }}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="Appointment Time"
                  value={formData.appointmentTime ? dayjs(formData.appointmentTime, "HH:mm") : null}
                  minTime={dayjs()}
                  onChange={(newValue) => {
                    setFormData({ ...formData, appointmentTime: newValue ? newValue.format("HH:mm") : "" });
                  }}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: "outlined",
                      sx: { "& .MuiInputBase-root": { borderRadius: "8px" } },
                    },
                  }}
                />
              </LocalizationProvider>
              <input
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Department"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                placeholder="Doctor Name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all">
              Confirm Appointment
            </button>
          </form>
        </div>

        {/* Right Side - Summary */}
        <div className="w-full md:w-1/3 bg-white shadow-md rounded-xl p-6 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Appointment Summary
          </h2>

          {isEmpty ? (
            <div className="flex flex-col items-center justify-center text-gray-400 py-20">
              <FaInbox className="text-6xl mb-4" />
              <p className="text-lg">No details entered yet</p>
            </div>
          ) : (
            <div className="space-y-3 text-gray-700">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Mobile:</strong> {formData.mobile}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>City:</strong> {formData.city}</p>
              <p><strong>Age:</strong> {formData.age}</p>
              <p><strong>Gender:</strong> {formData.gender}</p>
              <p><strong>Address:</strong> {formData.address}</p>
              <hr className="my-4" />
              <p><strong>Appointment Date:</strong> {formData.appointmentDate}</p>
              <p><strong>Time:</strong> {formData.appointmentTime}</p>
              <p><strong>Department:</strong> {formData.department}</p>
              <p><strong>Doctor:</strong> {formData.doctor}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;