import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">About Page</h1>
      <div className="mt-6">
        <Link to="/" className="text-blue-400 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default AboutPage;
