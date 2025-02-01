function AgreementSigning() {
  return <div className="min-h-screen flex justify-center items-center text-white pt-20 md:pt-24">
  <div className=" p-8 border border-white rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold mb-6">Agreement Signing</h1>
    <p className="text-lg mb-6">
      Welcome to ScientistX Technology! By signing this agreement, you agree
      to abide by the terms and conditions outlined below-
    </p>
    <ul className="list-disc ml-8 mb-6">
      <li className="mb-2">You agree to use the services provided by Scientistx Technology solely for personal use and not for any commercial purposes.</li>
      <li className="mb-2">You understand that any misuse or unauthorized access to the services may result in termination of your account.</li>
      <li className="mb-2">You acknowledge that Scientistx Technology reserves the right to modify or terminate the services at any time without prior notice.</li>
      <li className="mb-2">You agree to comply with all applicable laws and regulations while using the services.</li>
      <li className="mb-2">You understand that Scientistx Technology may collect and process your personal information in accordance with its privacy policy.</li>
    </ul>
    <p className="text-lg">
      By signing below, you acknowledge that you have read, understood, and
      agree to the terms and conditions outlined in this agreement.
    </p>
    <div className="flex justify-end mt-8">
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 cursor-not-allowed">
        Sign Agreement
      </button>
    </div>
  </div>
</div>;
}

export default AgreementSigning;
