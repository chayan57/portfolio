
"use client";
import { Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function VisitCounter() {
  const [total, setTotal] = useState(null);
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;

    called.current = true;

    const updateVisits = async () => {
      try {
        const response = await fetch("/api/visits", {
          method: "POST",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to update visits");
        }

        const data = await response.json();
        setTotal(data.total);
      } catch (error) {
        console.error("Visit Counter Error:", error);
      }
    };

    updateVisits();
  }, []);

  return (
    <span>
     <Eye size={18}/>Total Visits: {total !== null ? total.toLocaleString() : "..."}
    </span>
  );
}
