import React from "react";

export const Fallback = ({ error }) => {
  return (
    <div role="alert">
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
};
