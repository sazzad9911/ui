"use client";
import React from "react";

import Image from "next/image";

import Img from "../../components/asset/Svg7.svg";
import Link from "next/link";
import Viewer from "../../components/Animation";

const Register = () => {
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row  items-center h-screen
       text-white pt-[100px] w-full container mx-auto px-2`}
    >
      <div className="lg:w-1/2  h-full items-center justify-center flex ">
        <Form />
      </div>

      <div className={"h-full lg:w-1/2 w-screen "}>
        <Viewer />
      </div>
    </div>
  );
};

export default Register;
const Form = () => {
  return (
    <div className="flex   min-h-auto flex-col justify-center px-6 py-12 lg:px-8 bg-white rounded-sm">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
        <div className="h-32 w-32 flex justify-center items-center border-2 border-[#1B75BC] rounded-full">
          <Image
            className="mx-auto h-20 w-auto "
            src={Img}
            alt="Your Company"
          />
        </div>
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#1B75BC]">
          LogIn
        </h2>
        <p className="text-[#1B75BC] text-center">
          ScientistX account is for salary, revenue and <br /> share market of
          ScientistX Group{" "}
        </p>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={(e)=>{
        e.preventDefault()
        alert("Invalid Employee ID")
      }} className="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-[#1B75BC]"
            >
              Employee Id
            </label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-[#1B75BC]"
              >
                Password
              </label>
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <Link
                href="/"
                class="font-semibold text-[#1B75BC] hover:text-red-500"
              >
                Go back
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
