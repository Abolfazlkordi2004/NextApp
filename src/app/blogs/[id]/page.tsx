import Container from "@/components/container";
import { promises } from "fs";
import { SearchParams } from "next/dist/server/request/search-params";
import React from "react";
import { IGetArticles } from "../page";

interface IArticleProps {
  params: Promise<{ id: string }>;
  SearchParams: Promise<{}>;
}

async function Article(props: IArticleProps) {
  const { id } = await props.params;
  const result = await fetch(`http://localhost:3001/articles/${id}`);
  const data = (await result.json()) as IGetArticles;
  return (
    <Container>
      <div>
        <h2 className="text-2xl font-bold my-4">{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </Container>
  );
}

export default Article;
