"use client";
import React, { useState } from "react";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onhandleButton = () => {
    fetch("http://localhost:3001/articles", {
      method: "POST",
      body: JSON.stringify({
        id: Math.floor(Math.random() * 1000).toString(),
        title: title,
        description: description,
      }),
    });
  };
  return (
    <div className="bg-sky-200 flex flex-col py-24 px-8">
      <label>title</label>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />

      <label>description</label>
      <textarea
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></textarea>

      <button onClick={onhandleButton}>Submit</button>
    </div>
  );
}

export default CreateArticle;
