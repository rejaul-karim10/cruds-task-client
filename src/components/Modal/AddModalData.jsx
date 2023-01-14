import React from "react";

const AddModalData = () => {
  const handleSubmit = (event) => {
    const name = event.target.name.value;
    const phoneNumber = event.target.phoneNumber.value;
    const email = event.target.email.value;
    const hobbies = event.target.hobbies.value;
    console.log(name, phoneNumber, email, hobbies);
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
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
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
                <span className="label-text">Phone Number</span>
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
                value="Save"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddModalData;
