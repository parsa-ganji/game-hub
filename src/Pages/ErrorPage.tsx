import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <p>{isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected Error"}</p>
  );
};

export default ErrorPage;
