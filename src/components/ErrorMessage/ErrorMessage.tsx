import React from "react";

interface Props {
  message?: string;
}

const ErrorMessage: React.FC<Props> = ({ message = "Oops! Something went wrong. Please reload the page..." }) => {
  return <p>{message}</p>;
};

export default ErrorMessage;
