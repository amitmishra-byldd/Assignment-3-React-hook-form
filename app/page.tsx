"use client";

import { useForm } from "react-hook-form";
import InfoModal from "./components/InfoModal";
import { useState } from "react";

const inputStyle = "border border-neutral-500 px-3 py-2 mt-1 w-full rounded-sm";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [info, setInfo] = useState({});
  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setInfo(data);
    setOpen(true);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full mt-15">
      <h1 className="text-3xl font-semibold">React Hook Form</h1>
      <div className="border mt-8 w-3xl border-neutral-500 p-5 rounded-2xl shadow-2xl">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" id="fullName" className="block">
              Full Name: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("fullName", {
                required: "Please enter your name",
                minLength: {
                  value: 5,
                  message: "minimum 5 character required",
                },
                maxLength: {
                  value: 100,
                  message: "maximum 100 character allowed",
                },
              })}
              placeholder="Amit Mishra"
              className={inputStyle}
            />

            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="email" id="email" className="block">
              Email:<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "please enter valid email",
                },
              })}
              placeholder="example@gmail.com"
              className={inputStyle}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex w-full gap-4">
            <div className="w-full">
              <label htmlFor="password" id="password" className="block">
                Password:<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "true",
                  minLength: {
                    value: 8,
                    message: "password must be greater then 8 charcter",
                  },
                  maxLength: {
                    value: 16,
                    message: "password must be lower then 8 charcter",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
                  },
                })}
                placeholder="******"
                className={inputStyle}
              />
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <label
                htmlFor="confirmPassword"
                id="confirmPassword"
                className="block"
              >
                Confirm Password:<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                {...register("confirm-password", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                placeholder="******"
                className={inputStyle}
              />
              {errors.confirmPassword && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex w-full gap-4">
            <div className="w-full">
              <label htmlFor="phone" id="phone" className="block">
                Phone:<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                {...register("phone", {
                  required: "phone number is rquired",
                })}
                placeholder="+919999999"
                className={inputStyle}
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <label htmlFor="age" id="age" className="block">
                Age:<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                {...register("age", {
                  required: true,
                  min: {
                    value: 18,
                    message: "Age must be greater then 18",
                  },
                })}
                placeholder="23"
                className={inputStyle}
              />
              {errors.age && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.age.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex w-full gap-4">
            <div className="w-full">
              <label htmlFor="dob" id="dob" className="block">
                Date of Birth:<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                {...register("dob", { required: "Date of birth is required" })}
                placeholder="dd/mm/yy"
                className={inputStyle}
              />
              {errors.dob && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.dob.message}
                </p>
              )}
            </div>{" "}
            <div className="w-full">
              <label htmlFor="meetingTime" id="meetingTime" className="block">
                Meeting Time:
              </label>
              <input
                type="time"
                {...register("meetingTime")}
                placeholder="--:--:--"
                className={inputStyle}
              />
            </div>
          </div>

          <div className="flex w-full gap-4">
            <div className="w-full">
              <label htmlFor="country" id="country" className="block">
                Country<span className="text-red-500">*</span>
              </label>
              <select
                {...register("country")}
                id="country"
                className={inputStyle}
              >
                <option value="india">India</option>
                <option value="germany">Germany</option>
                <option value="uk">UK</option>
                <option value="usa">USA</option>
              </select>
            </div>{" "}
          </div>

          <div>
            <label htmlFor="level" id="level" className="block">
              Level<span className="text-red-500">*</span>
            </label>
            <div className="mt-3 flex items-center gap-10">
              <label>
                <input
                  type="radio"
                  value="begineer"
                  {...register("level", { required: "please choose level" })}
                />
                <span>begineer</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="intermediate"
                  {...register("level", { required: "please choose level" })}
                />
                <span>intermediate</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="pro"
                  {...register("level", { required: "please choose level" })}
                />
                <span>pro</span>
              </label>
            </div>
            {errors.level && (
              <p className="text-xs text-red-500 mt-1">
                {errors.level.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="level" id="level" className="block">
              Interest
            </label>
            <div className="mt-3 flex items-center gap-10">
              {["Frontend", "Backend", "Full-Stack"].map((data, index) => (
                <label htmlFor={`interest-${index}`} key={index}>
                  <input
                    type="checkbox"
                    id={`interest-${index}`}
                    value={data}
                    {...register("interests")}
                  />
                  {data}
                </label>
              ))}
            </div>
          </div>

          <div className="w-full border-t border-neutral-500  mt-10 mb-10"></div>
          <label htmlFor="level" id="level" className="block">
            Terms<span className="text-red-500">*</span>
          </label>
          <div>
            <input
              type="checkbox"
              id="terms"
              {...register("terms", { required: "You must accept the terms" })}
            />
            <label className="ml-2">I agree to the terms of service</label>
            {errors.terms && (
              <p className="text-xs text-red-500 mt-1">
                {errors.terms.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 bg-neutral-700 cursor-pointer text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>

      <InfoModal data={info} isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
