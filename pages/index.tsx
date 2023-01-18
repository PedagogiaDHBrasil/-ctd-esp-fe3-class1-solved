import { Inter } from '@next/font/google'
import { useState, useEffect } from "react";

interface IData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {

  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      {data.length
        ? data.map((item, index) => (
            <h1 key={index}>
              To do #{item.id}: {item.title}
            </h1>
          ))
        : null}
    </>
  );
}