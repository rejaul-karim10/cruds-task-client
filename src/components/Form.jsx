import React from "react";
import { toast } from "react-hot-toast";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      phoneNumber: event.target.phoneNumber.value,
      email: event.target.email.value,
      hobbies: event.target.hobbies.value,
    };

    // post data
    fetch("http://localhost:5000/hobbies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Successfully created!");
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center font-bold uppercase">Enter Your Entry</h2>
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
              placeholder="123-45-678"
              type="tel"
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
              value="Save Entry"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
