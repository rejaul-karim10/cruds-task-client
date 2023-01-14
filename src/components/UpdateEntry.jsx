import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEntry = () => {
  const router = useParams();
  const { id } = router;
  const [hobbies, setHobbies] = useState({});
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:5000/entries/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setHobbies(data.data);
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => toast.error(error.message));
  }, [refresh, id]);
  console.log(hobbies);

  const handleSubmit = (e) => {
    e.preventDefault();
    const entries = {
      name: e.target.name.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.email.value,
      hobbies: e.target.hobbies.value,
    };

    fetch(`http://localhost:5000/entries/${id}`,{
        method: "PATCH",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(entries)
    })
    .then(res=>res.json())
    .then(data =>{
        if(data.success){
            toast.success(data.message)
            navigate('/table')
        }else{
            toast.error(data.error)
        }
    })
    .catch(error=>toast.error(error.message))
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
              defaultValue={hobbies?.name}
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
              defaultValue={hobbies?.phoneNumber}
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
              defaultValue={hobbies?.email}
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
              defaultValue={hobbies?.hobbies}
              required
              className="textarea textarea-bordered w-full max-w-xs"
            ></textarea>
          </div>
          <div className="mt-4">
            <input
              className="btn btn-primary w-full"
              type="submit"
              value="Update Entry"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEntry;
