import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

interface FormData {
  name: string;
  email: string;
  mobile: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/second");
  };

  return (
    <div className="wrapper-container">
      <div className="form-title">Welcome to <span className="company-title">GrowMeOrganic</span> </div>
    <form onSubmit={handleSubmit} className="form">
      <TextField
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="input"
        color="secondary"
       id="margin-normal" margin="normal"
      />
      <TextField
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="input"
        color="secondary"
        id="margin-normal" margin="normal"
      />
      <TextField
        name="mobile"
        label="Mobile"
        value={formData.mobile}
        onChange={handleChange}
        required
        className="input"
        color="secondary"
        id="margin-normal" margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </div>
  );
};

export default Form;
