"use client";

import { modalContext } from "@/app/page";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";

interface userDetailsType {
  userName: string;
  password: string;
}

export const Login = () => {
  const modalContent = useContext(modalContext);
  const router = useRouter();

  const [userDetails, setUserDetails] = useState<userDetailsType>({
    userName: "",
    password: "",
  });

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { userName, password } = userDetails;
    const res = await fetch("/api/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserDetails({ ...userDetails, [e.target.name]: value });
  };

  return (
    <form
      onSubmit={submitForm}
      className="flex flex-col  p-16 rounded-lg w-[100%] gap-8 bg-white "
    >
      <input
        type="text"
        placeholder="username .."
        className=" text-brand-bg bg-white border border-brand-bg border-opacity-[.1] rounded-lg outline-none p-2 w-[80%]"
        name="userName"
        value={userDetails.userName}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password .."
        name="password"
        value={userDetails.password}
        onChange={handleChange}
        className=" text-brand-bg border border-brand-bg border-opacity-[.1] rounded-lg bg-white outline-none p-2 w-[80%]"
      />
      <div className="flex gap-4">
        <button className="text-white p-2 w-[20%] bg-brand-bg" type="submit">
          Log In
        </button>
        <button
          className="text-white p-2 w-[20%] bg-brand-bg"
          onClick={() => modalContent?.setModalStatus(false)}
          type="button"
        >
          cancel
        </button>
      </div>
    </form>
  );
};
