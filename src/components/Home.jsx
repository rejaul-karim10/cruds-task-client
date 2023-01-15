
import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import lottie from "../lottie/application.json";

const Home = () => {
    return (
        <div className="w-full h-screen py-8 px-4">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center pt-16">
          <p className="text-secondary uppercase font-bold">
            CRUD'S
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-primary py-2">
            Create Read Update <br /> Delete And Send
          </h1>
          <p className="md:text-mg text-sm">
            In this application i have implemented MongoDb CRUD operation.

          </p>
          <Link to='/entries' className="btn btn-outline btn-primary w-[200px] rounded-md my-6 py-3 ">
            Start Exploring
          </Link>
        </div>
        <div className="">
          <Lottie animationData={lottie} />
        </div>
      </div>
    </div>
    );
};

export default Home;