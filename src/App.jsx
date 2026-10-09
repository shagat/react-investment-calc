import Calculator from "./components/Calculator";
import { useState } from "react";
import { INPUT_FORM_DATA } from "./inputData";
import InvestmentList from "./components/InvestmentList";

function App() {
  const [formData, setFormData] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  function handleFormDataChange(event) {
    setFormData((prev) => ({ ...prev }));
  }

  return (<>
    <Calculator
      initialFormData={INPUT_FORM_DATA}
      formData={formData}
      handleChange={handleFormDataChange}
    ></Calculator>
    <InvestmentList></InvestmentList>
  </>
  );
}

export default App;
