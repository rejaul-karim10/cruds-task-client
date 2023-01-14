import React from "react";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const phoneNumber = event.target.phoneNumber.value;
    const email = event.target.email.value;
    const hobbies = event.target.hobbies.value;
    console.log(name, phoneNumber, email, hobbies);
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center font-bold">Fill Out The Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              placeholder="Name"
              type="text"
              name="name"
              required
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              placeholder="Phone Number"
              type="number"
              name="phoneNumber"
              required
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              placeholder="Email"
              type="email"
              name="email"
              required
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Hobbies</span>
            </label>
            <textarea
              placeholder="Hobbies"
              name="hobbies"
              required
              className="textarea textarea-bordered w-full max-w-xs"
            ></textarea>
          </div>
          <div className="mt-4">
            <input
              className="btn btn-primary w-full"
              type="submit"
              value="Save"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
