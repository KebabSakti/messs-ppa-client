import React from "react";

function StatusCard({
  positive,
  negative,
  status,
  className = "",
}: {
  positive: string;
  negative: string;
  status: boolean;
  className?: string;
}) {
  return (
    <>
      {status ? (
        <p
          className={`text-xs font-bold bg-green-500 text-white rounded-full px-2 py-1 ${className}`}
        >
          {positive}
        </p>
      ) : (
        <p
          className={`text-xs font-bold bg-red-500 text-white rounded-full px-2 py-1 ${className}`}
        >
          {negative}
        </p>
      )}
    </>
  );
}

export { StatusCard };
