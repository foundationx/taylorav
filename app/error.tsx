"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#030712",
        color: "#fff",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "640px",
          textAlign: "center",
          background: "rgba(10,15,35,0.85)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "14px",
          padding: "1.6rem",
        }}
      >
        <h1
          style={{
            margin: "0 0 0.5rem",
            fontSize: "clamp(1.6rem, 6vw, 2.5rem)",
          }}
        >
          Something went wrong
        </h1>
        <p style={{ margin: "0 0 1rem", color: "#cbd6ff" }}>
          We hit an unexpected error. Try refreshing, or return home.
        </p>
        <pre
          style={{
            background: "#071228",
            color: "#d6eaff",
            borderRadius: "8px",
            overflowX: "auto",
            padding: "0.75rem",
            fontSize: "0.78rem",
          }}
        >
          {error?.message}
        </pre>
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
            gap: "0.7rem",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              border: "none",
              borderRadius: "10px",
              padding: "0.55rem 1rem",
              background: "#4c92ff",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={() => reset()}
          >
            Retry
          </button>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#fff",
              background: "rgba(255,255,255,0.12)",
              borderRadius: "10px",
              padding: "0.55rem 1rem",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
