import React from "react";

export default function Shadows() {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="bg-light size-48 rounded-xl shadow-sm dark:border"></div>
      <div className="bg-light size-48 rounded-xl shadow-md dark:border"></div>
      <div className="bg-light size-48 rounded-xl shadow-lg dark:border"></div>
      <div className="bg-light size-48 rounded-xl shadow-xl dark:border"></div>
    </div>
  );
}
