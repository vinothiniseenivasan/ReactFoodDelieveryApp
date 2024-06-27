import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ApiForImage from "./Components/ApiForImage";


const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      {/* Body */}
      {/* Footer */}
      <Header />
      <Body /> 
    </div>
  );
};

root.render(<AppLayout />);
