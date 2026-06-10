import React from "react";

function Rightimage({
  imageURL,
  productName,
  productDescription,
  linkText,
  linkURL,
}) {
  return (
    <div className="container mt-4">
      <div
        className="row align-items-center p-3"
        style={{ marginLeft: "60px" }}
      >
        <div className="col-5">
          <h2 className="text-muted fs-4 mb-3">
            {productName}
          </h2>

          <p style={{ lineHeight: "2" }}>
            {productDescription}
          </p>

          <a
            href={linkURL}
            style={{ textDecoration: "none" }}
          >
            {linkText}
            <i
              className="fa fa-long-arrow-right ms-2"
              aria-hidden="true"
            ></i>
          </a>
        </div>

        <div className="col-7 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Rightimage;