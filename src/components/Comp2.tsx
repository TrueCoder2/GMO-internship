import React from "react";
import { Checkbox, Collapse, FormControlLabel, FormGroup } from "@mui/material";

interface Department {
  department: string;
  sub_departments: string[];
}

const api: Department[] = [
  {
    department: "Customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "Design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
  {
    department: "Agriculture & Fishing",
    sub_departments: ["Agriculture", "Crops","Fishery & Aquaculture" , "Ranching"],
  },
];

const Comp2: React.FC = () => {
  const [checked, setChecked] = React.useState<Record<string, boolean>>({});

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setChecked((prev) => ({ ...prev, [name]: checked }));
  };

  const handleCollapse = (department: string) => {
    setChecked((prev) => ({ ...prev, [department]: !prev[department] }));
  };

  const handleSelectAll = (department: string) => {
    const sub_departments = api.find(
      (item) => item.department === department
    )?.sub_departments;
    if (sub_departments) {
      const allChecked = sub_departments.every(
        (sub) => checked[sub] === true
      );
      sub_departments.forEach((sub) => {
        setChecked((prev) => ({ ...prev, [sub]: !allChecked }));
      });
    }
  };

  return (
    <div>
      <h1 style={{marginBottom:"20px",backgroundColor:"yellowgreen",padding:"10px"}}>Here is Component 2</h1>
      {api.map((item) => (
        <div key={item.department}>
          <span
            onClick={() => handleCollapse(item.department)}
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              border: "1px solid black",
              borderRadius: "50%",
              textAlign: "center",
              cursor: "pointer",
              margin:"5px"
            }}
          >
            {checked[item.department] ? "-" : "+"}
          </span>
          <FormControlLabel
            control={
              <Checkbox
                checked={
                  item.sub_departments.every((sub) => checked[sub] === true) ||
                  false
                }
                onChange={() => handleSelectAll(item.department)}
                name={item.department}
              />
            }
            label={`${item.department}(${item.sub_departments.length})`}
          />
          <Collapse in={checked[item.department]}>
            <FormGroup>
              {item.sub_departments.map((sub) => (
                <FormControlLabel
                  key={sub}
                  control={
                    <Checkbox
                      checked={checked[sub] || false}
                      onChange={handleCheck}
                      name={sub}
                    />
                  }
                  label={sub}
                />
              ))}
            </FormGroup>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default Comp2;

