import React from "react";

function RegistrationPage() {
  // function reg() {
  //   fetch(`http://adventurehub-dev.herokuapp.com/register`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }

  return (
    <>
      <div>
        <div>
          <label htmlFor="fName">Name:</label>
          <input type="text" name="fName" />
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" />
          <label htmlFor="email">email:</label>
          <input type="text" name="email" />
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
