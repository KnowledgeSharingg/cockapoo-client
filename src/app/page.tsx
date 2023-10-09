'use client'

import Image from 'next/image'
import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";

const API_URL = 'http://localhost:8080';
export default function Home() {
    type BlogInfo = {
        id: number;
        name: string;
        url: string;
        views?: number;
    };
  const [data, setData] = useState<BlogInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Axios를 사용하여 서버에 GET 요청을 보냅니다.
    axios.get(API_URL + "/blogs")
        .then((response) => {
          setData(response.data.data);
          console.log('>>data : ' + JSON.stringify(data));
          setLoading(false);
        })
        .catch((error) => {
          console.error('서버 요청 오류:', error);
          setLoading(false);
        });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Tech Blogs
        </p>
        <div>
        {loading ? (
            <p>데이터를 불러오는 중...</p>
        ) : (
            <ul>
              {data && data.map((item, index) => (
                  <li key={index}>
                      <Link href={`${item.url}`}>
                              <h2>{item.name}</h2>
                      </Link>
                      <p>{item.views}</p>
                  </li>
              ))}
            </ul>
        )}
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By seongkyu-lim
          </a>
        </div>
      </div>
    </main>
  )
}
