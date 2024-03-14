"use client"
import Image from "next/image";
import Link from "next/link";
import Portfolio from "../../portfolio";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Port({ params }: { params: { id: string } }) {
  const portfolioItem = Portfolio.find(item => item.id === parseInt(params.id));

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    if (portfolioItem?.md != "") {
      fetch(portfolioItem!.md)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text();
        })
        .then((md) => {
          setMarkdown(md);
        })
        .catch((error) => {
          console.error("There was a problem fetching the markdown:", error);
        });
    }
    else {
      setMarkdown("### mdファイルが存在しません");
    }
  }, [portfolioItem]);

  return (
    <main>
      <h1 className="m-5 text-5xl text-center font-bold">{portfolioItem?.title}</h1>
      <div className="flex justify-center">
      <figure className="ml-5 mr-5 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <Link href={portfolioItem!.link}>
            <Image
              src={portfolioItem!.image_url}
              width={1000}
              height={100}
              className="rounded-lg"
              alt=""
            />
          </Link>
          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <p>{portfolioItem?.description}</p>
          </figcaption>
        </figure>
      </div>
      <div className="m-2 flex justify-center">
        <Link href={portfolioItem!.link} target="_blank">
        <button type="button" className="text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">ページへ</button>
        </Link>
      </div>
      <div className="m-5 p-5 bg-white rounded-lg overflow-hidden shadow-md">
        <ReactMarkdown remarkPlugins={[remarkGfm]} className='markdown'>
          {markdown}
          </ReactMarkdown>

      </div>
    </main>
  );
}
