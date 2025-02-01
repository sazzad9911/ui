"use client";

import Link from "next/link";
import { useState } from "react";

function FAQ() {
  const [faqVisibility, setFaqVisibility] = useState(Array(10).fill(false));

  const toggleVisibility = (index) => {
    const newFaqVisibility = [...faqVisibility];
    newFaqVisibility[index] = !newFaqVisibility[index];
    setFaqVisibility(newFaqVisibility);
  };
  return (
    <div className=" flex items-center text-white container mx-auto  pt-20 md:pt-24 px-2">
      <div className="w-full border border-white rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h1>

        {/* FAQ 1 */}
        <div className="mb-6">
          <button
            className="w-full bg-transparent text-left text-lg font-semibold mb-2"
            onClick={() => toggleVisibility(0)}
          >
            What services does your IT Farm provide?
          </button>
          {!faqVisibility[0] && (
            <p className="text-lg border border-white rounded p-2 ml-3 text-center">
              We offer a range of IT services including software development,
              web development, mobile app development, IT consulting, cloud
              computing, and <Link href='/pages/Service' className="underline text-green-500">more</Link>...
            </p>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="mb-6">
          <button
            className="w-full bg-transparent text-left text-lg font-semibold mb-2"
            onClick={() => toggleVisibility(1)}
          >
            How can I request a quote for your services?
          </button>
          {faqVisibility[1] && (
            <p className="text-lg border border-white rounded p-2 ml-3 text-center">
              You can request a quote by filling out the contact form on our
              website or by contacting our sales team directly via email or
              phone.
            </p>
          )}
        </div>

        {/* FAQ 3 */}
        <div className="mb-6">
          <button
            className="w-full bg-transparent text-left text-lg font-semibold mb-2"
            onClick={() => toggleVisibility(2)}
          >
            What industries do you serve?
          </button>
          {faqVisibility[2] && (
            <p className="text-lg border border-white rounded p-2 ml-3 text-center">
              We cater to various industries including healthcare, finance,
              e-commerce, education, manufacturing, and <Link href='/pages/Service' className="underline text-green-500">more</Link>...
            </p>
          )}
        </div>

        {/* FAQ 4 */}
        <div className="mb-6">
          <button
            className="w-full bg-transparent text-left text-lg font-semibold mb-2"
            onClick={() => toggleVisibility(3)}
          >
            Are your services customizable?
          </button>
          {faqVisibility[3] && (
            <p className="text-lg border border-white rounded p-2 ml-3 text-center">
              Yes, we tailor our services to meet the unique needs and
              requirements of each client. Our team works closely with you to
              understand your goals and deliver personalized solutions.
            </p>
          )}
        </div>

        {/* FAQ 5 */}
        <div className="mb-6">
          <button
            className="w-full bg-transparent text-left text-lg font-semibold mb-2"
            onClick={() => toggleVisibility(4)}
          >
            What technologies do you specialize in?
          </button>
          {faqVisibility[4] && (
            <p className="text-lg border border-white rounded p-2 ml-3 text-center">
              We specialize in a wide range of technologies including but not
              limited to JavaScript, TypeScript, React, Next.js, Node.js, MongoDB, MySQL, AWS
              and <Link href='/' className="underline text-green-500">more</Link>....
            </p>
          )}
        </div>

        {/* FAQ 6 */}
        <div className="mb-6">
          <button
            className="w-full bg-transparent text-left text-lg font-semibold mb-2"
            onClick={() => toggleVisibility(5)}
          >
            How do you ensure data security and privacy?
          </button>
          {faqVisibility[5] && (
            <p className="text-lg border border-white rounded p-2 ml-3 text-center">
              We adhere to industry best practices and implement robust security
              measures to protect your data. Our team follows strict security
              protocols and regularly updates our systems to safeguard against
              potential threats.
            </p>
          )}
        </div>

        {/* FAQ 7 */}
        <div className="mb-6">
          <button
            className="w-full bg-transparent text-left text-lg font-semibold mb-2"
            onClick={() => toggleVisibility(6)}
          >
            Can you provide ongoing support and maintenance?
          </button>
          {faqVisibility[6] && (
            <p className="text-lg border border-white rounded p-2 ml-3 text-center">
              Yes, we offer ongoing support and maintenance services to ensure
              the smooth operation of your systems. Our dedicated support team
              is available to assist you with any issues or updates you may
              need.
            </p>
          )}
        </div>

        {/* FAQ 8 */}
        <div className="mb-6">
          <button
            className="w-full bg-transparent text-left text-lg font-semibold mb-2"
            onClick={() => toggleVisibility(7)}
          >
            How long does it take to complete a project?
          </button>
          {faqVisibility[7] && (
            <p className="text-lg border border-white rounded p-2 ml-3 text-center">
              The timeline for completing a project depends on various factors
              including its scope, complexity, and requirements. We work closely
              with you to establish realistic timelines and milestones to ensure
              timely delivery.
            </p>
          )}
        </div>

        {/* FAQ 9 */}
        <div className="mb-6">
          <button
            className="w-full bg-transparent text-left text-lg font-semibold mb-2"
            onClick={() => toggleVisibility(8)}
          >
            Do you provide training for your solutions?
          </button>
          {faqVisibility[8] && (
            <p className="text-lg border border-white rounded p-2 ml-3 text-center">
              Yes, we offer training sessions and workshops to help you and your
              team get acquainted with our solutions and technologies. We
              provide comprehensive training materials and hands-on exercises to
              ensure a smooth transition.
            </p>
          )}
        </div>

        {/* FAQ 10 */}
        <div>
          <button
            className="w-full bg-transparent text-left text-lg font-semibold mb-2"
            onClick={() => toggleVisibility(9)}
          >
            How can I get in touch with your support team?
          </button>
          {faqVisibility[9] && (
            <p className="text-lg border border-white rounded p-2 ml-3 text-center">
              You can reach our support team by submitting a support ticket
              through our website, sending us an email at info@scientistx.tech,
              or calling our dedicated support hotline at +1646-704-8275.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
