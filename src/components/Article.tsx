import { IGetArticles } from "@/app/blogs/page";
import React from "react";

function Article({ title, description }: IGetArticles) {
  return (
    <div className="shadow p-4">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Article;
