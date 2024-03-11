import React from 'react';

export default function Resume() {
  // Construct the embed URL from the shareable link
  const embedUrl = "https://docs.google.com/document/d/1DFORBQbXTY6P9iXSNTRfmwu1jbSp09W5bZoCDbkU6OU/edit";

  // Download URL for the resume - you might need to upload a PDF version somewhere accessible and use that URL here
  const downloadUrl = "https://docs.google.com/document/d/1DFORBQbXTY6P9iXSNTRfmwu1jbSp09W5bZoCDbkU6OU/edit";

  return (
    <div className="resume-container">
      <h2 className="text-center my-4">My Resume</h2>
      {/* Embed the Google Doc */}
      <iframe src={embedUrl} width="100%" height="600px" frameborder="0"></iframe>
      {/* Provide a download link */}
      <div className="text-center mt-4">
        <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download Resume
        </a>
      </div>
    </div>
  );
}
