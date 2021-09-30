import React from "react";
import { Image } from "react-bootstrap";
import errImg from "../images/error.jpg";
function ErrorPage() {
  return (
    <>
      <Image width="100%" src={errImg} alt="error-page" />
      <footer>
        <a href="http://www.freepik.com">Designed by stories / Freepik</a>
      </footer>
    </>
  );
}

export default ErrorPage;
