"use client";

import { useEffect, useState } from "react";

export default function TotalVisits() {
  const [total, setTotal] = useState(null);

  useEffect(() => {
    fetch("/api/visits", {
      method: "POST",
      cache: "no-store",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch visits");
        return res.json();
      })
      .then((data) => setTotal(data.total))
      .catch(() => setTotal(0));
  }, []);

  return (
    <div className="total-visits">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>

      <span>Total Visits: </span>

      <span className="total-visits-count">
        {total === null ? "..." : total.toLocaleString()}
      </span>
    </div>
  );
}