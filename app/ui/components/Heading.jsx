import React from "react";

const Heading = ({ children }) => {
  return (
    <h1 className="text-gurkha py-10 text-4xl font-mono text-center font-bold">
      {children}
    </h1>
  );
};

export default Heading;
