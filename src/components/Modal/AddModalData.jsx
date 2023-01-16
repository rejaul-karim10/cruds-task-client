import React from "react";
import { toast } from "react-hot-toast";

const AddModalData = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const entries = {
      name: event.target.name.value,
      phoneNumber: event.target.phoneNumber.value,
      email: event.target.email.value,
      hobbies: event.target.hobbies.value,
    };

    // post data to database
    fetch("https://cruds-task-server.vercel.app/entries", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(entries),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);

          event.target.reset();
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <input type="checkbox" id="dataModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="dataModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold text-center uppercase">
            Add New Entry
          </h3>
          <p className="text-center">
            You can add your entry by filling out the form
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                placeholder="Name"
                type="text"
                name="name"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                placeholder="123-45-678"
                type="tel"
                name="phoneNumber"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Hobbies</span>
              </label>
              <textarea
                placeholder="Hobbies"
                name="hobbies"
                required
                className="textarea textarea-bordered w-full"
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
    </>
  );
};

export default AddModalData;
