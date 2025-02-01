"use client";
import { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import sendMail from "../functions/sendMail";

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    number: "",
    name: "",
    message: "",
  });
  const [loader, setLoader] = useState(false);
  const [send,setSend]=useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSend(false)
    // Reset form fields
    try {
      setLoader(true);
      await sendMail(
        formData.name,
        "Customer Response",
        `${formData.message} by the number ${formData.number}`
      );
      setLoader(false);
      setSend(true)
      onSubmit && onSubmit();
      setFormData({ number: "", contact: "", message: "" });
    } catch (error) {
      setLoader(false);
      console.error(error);
    }
  };
  useEffect(() => {
    //setSend(true);
    const timer = setTimeout(() => {
      setSend(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [send]); 
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full border-b lg:border-b-2 border-b-[#1B75BC] lg:py-4 py-2 text-white"
    >
      <p className="text-[#ffffff] text-[16px] font-normal text-center lg:py-4 py-2">
        Contact Us
      </p>
      <div className="flex md:flex-row flex-col justify-between md:gap-4">
        <div className="mb-2 w-full">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border bg-transparent border-white rounded-md py-2 px-4 focus:border-[#1B75BC] focus:outline-none"
            placeholder="Contact Name"
            required
          />
        </div>
        <div className="mb-0 md:mb-2 w-full">
          <input
            type="text"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="w-full border bg-transparent border-white rounded-md py-2 px-4 focus:border-[#1B75BC] focus:outline-none"
            placeholder="Contact Number with country code"
            required
          />
        </div>
      </div>

      <div className="my-2">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-white bg-transparent rounded-md py-2 px-4 focus:outline-none focus:border-[#1B75BC]"
          placeholder="Enter your message"
          rows={4}
          required
        />
      </div>
      <button disabled={loader}
        type="submit"
        className="border border-white text-white py-2 px-4 rounded-md hover:bg-[#1B75BC] transition duration-300"
      >
        <div className=" flex items-center gap-2">
          {loader?(<p> Sending...</p>):(<p> Sent</p>)}
          <AiOutlineSend />
        </div>
      </button>
      {send && (
        <div className="flex justify-center text-white items-center h-[100vh] w-[100vw] top-0 left-0 fixed bg-[#000000ab]">
          <div className="text-lg">Message Has Send</div>
        </div>
      )}
    </form>
  );
}

export default Form;
