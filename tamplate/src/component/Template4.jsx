import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import signupImg from '../assets/signupImg.jpg'

const Template4 = () => {
  const resumeRef = useRef(null);

  const handleDownloadPdf = () => {
    const element = resumeRef.current;

    const options = {
      margin: [0.5, 0.5],
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },  // High-quality image
      html2canvas: {
        scale: 3, // Higher scale for better resolution
        logging: false,
        useCORS: true, // Ensure CORS compliance
        x: 0,
        y: 0,
        width: element.offsetWidth,
        height: element.offsetHeight,
        letterRendering: true, // Ensure font rendering is better
        backgroundColor: "#fff",
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
        compress: true, // Compress output for better file size
      },
    };

    // Generate PDF
    html2pdf()
      .set(options)
      .from(element)
      .toPdf()
      .get("pdf")
      .then((pdf) => {
        const totalPages = pdf.internal.pages.length;

        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i);
          pdf.setFont("Helvetica", "normal");
        }

        // Save the high-quality PDF
        pdf.save("resume.pdf");
      });
  };

  return (
    <div className="p-8 ">
        <div className="flex items-center justify-center w-full bg-b">
        <h3 className="text-4xl font-bold mb-8 text-[#f59f7a]">Register Now!</h3>
        </div>
        

        <div className="flex justify-center"     style={{
      height: "4.40in",
      overflow: "hidden",
      fontSize: "14px",
    }}>
  <div
    ref={resumeRef}
    contentEditable
    suppressContentEditableWarning={true}
    className="bg-white  p-8"
    style={{
      width: "6.27in",
      overflow: "hidden",
      fontSize: "14px",
    }}
  >
    {/* Header Section */}
    <div className="flex items-center justify-between border-b border-gray-300 pb-6">
      <div>
        <input
          type="text"
          className="text-5xl font-bold text-blue-800 focus:outline-none capitalize"
          placeholder="Enter your name"
        />

      </div>
    </div>

    {/* Contact Section */}
    <div className="flex justify-between mt-6">
      <p className="text-xl">
        Email:{" "}
        <input
          type="text"
          className="text-blue-600 focus:outline-none"
          placeholder="enter your email"
        />
      </p>
      <p className="text-xl">
        Password:{" "}
        <input
          type="password"
          className="text-blue-600 focus:outline-none"
          placeholder="enter your password"
        />
      </p>
    </div>
    <div className="flex justify-between mt-6">
      <p className="text-xl">
        Phone:{" "}
        <input
          type="text"
          className="text-blue-600 focus:outline-none"
          placeholder="enter your email"
        />
      </p>
      <p className="text-xl">
        Repeat Password:{" "}
        <input
          type="password"
          className="text-blue-600 focus:outline-none"
          placeholder="repeat your password"
        />
      </p>
    </div>


    {/* Footer */}
    <div className="flex flex-col mt-8 text-center text-gray-500 text-sm font-bold text-lg">
      <button className="border text-white py-2 px-5 rounded mt-5 text-2xl bg-[#5dc8cf] hover:text-[#5dc8cf] hover:bg-white hover:border-black transition-all duration-300 hover:duration-300">
        continue
      </button>

      <span className="mt-2">Already have an account click here</span>
    </div>
  </div>
  <div className="bg-red-200 ">
    <img
      src={signupImg}
      alt=""
      style={{
        width: "6.27in",
        height: "auto", // Maintains aspect ratio
      }}
    />
  </div>
</div>


    </div>
  );
};

export default Template4;