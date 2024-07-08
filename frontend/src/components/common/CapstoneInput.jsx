import React from "react";

function CapstoneInput({ placeholder, type, icon, parentRef, error }) {
  return (
    <React.Fragment>
      <label
        className={
          "input input-bordered flex items-center gap-2 " +
          (error ? "border-red-500" : "")
        }
      >
        {icon ? icon : <React.Fragment />}
        <input
          type={type}
          className="grow"
          placeholder={placeholder}
          autocomplete="none"
          ref={parentRef}
        />
      </label>
    </React.Fragment>
  );
}

export default CapstoneInput;
