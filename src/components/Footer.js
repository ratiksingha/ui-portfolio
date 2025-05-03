import React from "react";

const Footer = (props) => {
  const { sharedBasicInfo } = props;

  const networks = sharedBasicInfo
    ? sharedBasicInfo.social.map((network) => (
        <span key={network.name} className="m-4">
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.class}></i>
          </a>
        </span>
      ))
    : null;

  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">{networks}</div>

        <div className="copyright py-4 text-center">
          <div className="container">
          <small>
              Made with <span style={{ color: "red" }}>❤</span> by{" "}
              {sharedBasicInfo ? sharedBasicInfo.name : "???"}
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;