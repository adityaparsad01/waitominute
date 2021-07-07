import React from "react";
import { Twitter, GitHub, Database, Mail } from "react-feather";

function Footer(props) {
  return (
    <footer>
      <div className="card-footer text-center">
        <div className="">
          Copyright © 2020 by <strong>WaitOminute.</strong> All Rights Reserved.
        </div>

        <div className="">
          <a
            href="/"
            className="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>

          <a className="api" href="/" target="_blank" rel="noopener noreferrer">
            <Database />
          </a>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <Twitter />
          </a>

          <a
            href="/"
            className="mail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
