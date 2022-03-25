import React from "react";

export const Error = ({ message }: {message: string}) => {
  const defaultMessage = "Something went wrong. Please try again later.";
  return <div className="error">{`Oops! ${message || defaultMessage}`}</div>;
}
