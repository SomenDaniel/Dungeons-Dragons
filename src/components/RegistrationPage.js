import React from "react";

function RegistrationPage() {
  return (
    <>
      <div>
        <div>
          <label for="fName">Name:</label>
          <input type="text" name="fName" />
          <label for="password">Password:</label>
          <input type="text" name="password" />
        </div>
        <div>
          <button>Registration</button>
          <button>Cancel</button>
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;
