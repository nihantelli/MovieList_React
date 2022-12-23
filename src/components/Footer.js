import React from "react";

function Footer() {
  return (
    <div>
      <footer className="text-center ">
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href={"https://www.linkedin.com/in/nihantelli/"}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href={"https://github.com/nihantelli"}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href={"https://www.instagram.com/nihantellii/"}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <div className="text-center text-dark p-3">
          © 2022 Copyright: Nihan Telli
        </div>
      </footer>
    </div>
  );
}

export default Footer;
