"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch("https://api.freeapi.app/api/v1/todos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        completed,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create todo");
    }

    router.push("/");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "#ffffff",
          padding: "35px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        {/* Heading */}
        <div style={{ marginBottom: "30px", textAlign: "center" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "36px",
              color: "#111827",
            }}
          >
            Create Todo
          </h1>

          <p
            style={{
              marginTop: "10px",
              color: "#6b7280",
              fontSize: "15px",
            }}
          >
            Add a new task to stay productive ✨
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Title */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#374151",
              }}
            >
              Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              name="title"
              placeholder="Enter todo title"
              required
              style={{
                width: "100%",
                padding: "14px",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Description */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#374151",
              }}
            >
              Description
            </label>

            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              name="description"
              placeholder="Write something about this todo..."
              rows={5}
              style={{
                width: "100%",
                padding: "14px",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                fontSize: "15px",
                resize: "vertical",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Checkbox */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 0",
            }}
          >
            <input
              type="checkbox"
              checked={completed}
              onChange={(event) => setCompleted(event.target.checked)}
              name="completed"
              style={{
                width: "18px",
                height: "18px",
                accentColor: "#2563eb",
                cursor: "pointer",
              }}
            />

            <label
              htmlFor="completed"
              style={{
                color: "#374151",
                fontSize: "15px",
              }}
            >
              Mark as completed
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              padding: "14px",
              background: "linear-gradient(to right, #2563eb, #1d4ed8)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s ease",
            }}
          >
            Create Todo
          </button>
        </form>
      </div>
    </div>
  );
}
