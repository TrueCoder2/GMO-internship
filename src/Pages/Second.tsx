import React from "react";
import { useNavigate } from "react-router-dom";
import Comp1 from "../components/Comp1";
import Comp2 from "../components/Comp2";


const Second: React.FC = () => {
  const navigate = useNavigate();
  const formData = localStorage.getItem("formData");

  if (!formData) {
    navigate("/");
    alert("You must enter your details before accessing this page.");
    return null;
  }

  const { name } = JSON.parse(formData);

  return (
    <div className="second-page">
        <header className="welcome-header">
        <h1 className="welcome-text">Hello, {name}</h1>
        </header>
   
        <div className="component1">
         <Comp1></Comp1>
        </div>

        <div className="component2">
        <Comp2></Comp2>
        </div>

        <footer className="footer">
            <h3>🙏 Thanks from Abhishek Bhatt</h3>
        </footer>
    </div>
  );
};

export default Second;
