import React from "react";

export default function ProgressBar() {
  return (
    <div className="ProgressBar">
      <div className="relative px-96 pt-1">
        <div className="mb-4 flex h-5 overflow-hidden rounded-xl bg-teal-100 text-xs">
          <div
            style={{ width: "30%" }}
            className="flex flex-col justify-center whitespace-nowrap bg-teal-500 text-center text-white shadow-none"
          >
            60%
          </div>
        </div>
      </div>
    </div>
  );
}
