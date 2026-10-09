export default function Calculator({
  initialFormData,
  formData,
  handleChange,
}) {
  return (
    <div id="user-input" >
      <div className="input-group">
        {initialFormData.map((ele) => {
          return (
            <div key={ele.key}>
              <label htmlFor={ele.key}>{ele.label}</label>
              <input
                id={ele.key}
                name={ele.key}
                type={ele.type}
                value={formData.initialInvestment}
                onChange={() => handleChange}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
