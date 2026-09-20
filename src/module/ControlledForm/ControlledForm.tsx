"use client";
import { useState } from "react";
import InfoModal from "@/components/InfoModal";
import { InfoModalData } from "@/types/DataType";
const inputStyle = "border border-neutral-500 px-3 py-2 mt-1 w-full rounded-sm";

type Validator = (
  value: InfoModalData[keyof InfoModalData],
  values: InfoModalData,
) => string;

const initialValues: InfoModalData = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  meetingTime: "",
  country: "india",
  level: "",
  interest: [],
  terms: false,
};

const ControlledForm = () => {
  const [data, setData] = useState<InfoModalData>(initialValues);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<
    Partial<Record<keyof InfoModalData, string>>
  >({});

  // handleChange Funtion
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    if (name === "interest") {
      setData((prev) => ({
        ...prev,
        interest: checked
          ? [...prev.interest, value]
          : prev.interest.filter((interest) => interest !== value),
      }));
      return;
    }

    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // error validation
  const validators: Record<string, Validator> = {
    fullName: (value) => {
      const v = value as string;
      if (!v) return "Please enter your full name";
      if (v.length < 5) return "minimum 5 character required";
      if (v.length > 50) return "maximum 50 character allowed";
      return "";
    },

    email: (value) => {
      const v = value as string;
      if (!v) return "Please enter email";
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v))
        return "please enter valid email";
      return "";
    },

    password: (value) => {
      const v = value as string;
      if (!v) return "please enter password";
      if (v.length < 8) return "password must be greater then 8 character";
      if (v.length > 16) return "password must be less then 16 character";
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(v))
        return "Password must contain at least one uppercase letter, one lowercase letter, and one number";
      return "";
    },

    confirmPassword: (value, values) => {
      if (!value) return "Please confirm your password";
      if (value !== values.password) return "Passwords do not match";
      return "";
    },

    phone: (value) => {
      const v = value as string;
      if (!v) return "phone number is required";
      if (!/^\d{10}$/.test(v)) return "please enter valid number";
      return "";
    },

    terms: (value) => (!value ? "please accepts the terms" : ""),
  };

  const validate = () => {
    const nextError: Partial<Record<keyof InfoModalData, string>> = {};
    Object.entries(validators).forEach(([field, validator]) => {
      const key = field as keyof InfoModalData;
      const message = validator(data[key], data);
      if (message) nextError[key] = message;
    });
    setError(nextError);
    return Object.keys(nextError).length === 0;
  };

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setOpen(true);
    console.log(data);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full mt-15">
        <h1 className="text-3xl font-semibold">Controlled Form</h1>
        <div className="border mt-8 w-3xl border-neutral-500 p-5 rounded-2xl shadow-2xl">
          <form action="" onSubmit={onSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor="fullName">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={data.fullName}
                onChange={handleChange}
                className={inputStyle}
              />
              {error.fullName && (
                <p className="text-red-600">{error.fullName}</p>
              )}
            </div>

            <div>
              <label htmlFor="email">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className={inputStyle}
              />
              {error.email && <p className="text-red-600">{error.email}</p>}
            </div>

            <div>
              <label htmlFor="password">
                Password:<span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                className={inputStyle}
              />
              {error.password && (
                <p className="text-red-600">{error.password}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword">
                Confirm Password:<span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                className={inputStyle}
              />
              {error.confirmPassword && (
                <p className="text-red-600">{error.confirmPassword}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone">
                Phone<span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                className={inputStyle}
              />
              {error.phone && <p className="text-red-600">{error.phone}</p>}
            </div>

            <div>
              <label htmlFor="country" className="block">
                Country
              </label>
              <select
                name="country"
                id="country"
                value={data.country}
                onChange={handleChange}
                className={inputStyle}
              >
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="germany">Germany</option>
                <option value="uk">Uk</option>
              </select>
            </div>

            <div>
              <label htmlFor="meetingTime" className="block">
                Meeting Time:
              </label>
              <input
                type="time"
                id="meetingTime"
                name="meetingTime"
                value={data.meetingTime}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

            <div>
              <label htmlFor="level" className="block">
                Level:
              </label>
              <select
                name="level"
                id="level"
                value={data.level}
                onChange={handleChange}
                className={inputStyle}
              >
                <option value="biggner">Biggner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label htmlFor="interest" className="block">
                Interest:
              </label>
              {["frontend", "backend", "fullstack"].map((interest, index) => (
                <label key={index} className="mr-10">
                  <input
                    name="interest"
                    id={`interest-${index}`}
                    type="checkbox"
                    value={interest}
                    onChange={handleChange}
                    className="mr-1"
                    checked={data.interest.includes(interest)}
                  />
                  {interest}
                </label>
              ))}
            </div>

            <div>
              <input
                type="checkbox"
                name="terms"
                id="terms"
                onChange={handleChange}
                checked={data.terms}
              />
              <label className="ml-2">
                I agree to the terms of service
                <span className="text-red-600">*</span>
              </label>
              {error.terms && <p className="text-red-600">{error.terms}</p>}
            </div>

            <button
              type="submit"
              className="mt-4 bg-neutral-700 cursor-pointer text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <InfoModal data={data} onClose={() => setOpen(false)} isOpen={open} />
    </>
  );
};

export default ControlledForm;
