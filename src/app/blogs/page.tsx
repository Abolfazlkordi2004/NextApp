import React from "react";
import Container from "../../components/container";
import Article from "../../components/Article";
import Link from "next/link";

export interface IGetArticles {
  map(arg0: (item: any) => React.JSX.Element): React.ReactNode;
  id?: number;
  title?: String;
  description?: string;
}

async function Blogs() {
  const result = await fetch("http://localhost:3001/articles");
  const data = (await result.json()) as IGetArticles;

  return (
    <Container>
      <div className="grid grid-cols-4 gap-4 py-16">
        {data.map((item) => (
          <Link href={`/blogs/${item.id}`}>
            <Article {...item} key={item.id} />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Blogs;
