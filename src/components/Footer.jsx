import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-4">
      <div className="max-w-[1200px] mx-auto p-4">
        <ul className="flex">
          <a
            href="https://github.com/rejaul-karim10/cruds-task-server"
            target="_blank"
            className=" mr-2 text-[12px] text-primary hover:text-secondary"
            rel="noreferrer"
          >
            GitHub Server
          </a>
          <a
            href="https://github.com/rejaul-karim10/cruds-task-client"
            target="_blank"
            className="text-[12px] text-primary hover:text-secondary" rel="noreferrer"
          >
            GitHub Client
          </a>
        </ul>
        <a
          href="https://www.linkedin.com/in/rejaul-karim-rabbi/"
          target="_blank"
          className="text-[12px] text-primary hover:text-secondary" rel="noreferrer"
        >
          Designed and built by Rejaul Karim{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
