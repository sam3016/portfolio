import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge"
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

type Data = [{
  "id": number;
  "title": string;
  "content": string;
  "image": string;
  "video": string;
  "github": string;
  "categories": [string];
}]

async function getWorks() {
  const res = await fetch(`${process.env.HOST}/backend/works`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch works')
  }

  return res.json()
}

export default async function Work() {
  const works: Data = await getWorks();
  if (!works) return (
    <>
      <h1 className="p-4 mt-4 text-4xl text-center font-semibold mb-6">My Works</h1>
      <div className="lg:grid grid-cols-3 gap-10">
        {
          Array.from({ length: 18 }, (v, i) => (
            <div className="p-1" key={i}>
              <Card className="h-[350px] min-w-4">
                <CardHeader>
                    <Skeleton className="w-50 h-20" />
                </CardHeader>
                <CardContent className="grid gap-4">
                  <Skeleton className="w-50 h-20"/>
                  <Skeleton className="w-50 h-10"/>
                </CardContent>
              </Card>
            </div>
          ))
        }
      </div>
    </>
  );

  return (
    <>
      <h1 className="p-4 mt-4 text-4xl text-center font-semibold mb-6">My Works</h1>
      <div className="lg:grid grid-cols-3 gap-10">
        {
          works.map((work, index) => (
            <div className="p-1" key={index}>
              <Card className="h-[350px] min-w-4">
                <CardHeader>
                  <CardTitle className="text-center">{work?.title}</CardTitle>
                  { !work?.image ? null : (
                  <div className="flex flex-row justify-center pt-3">
                    <Image 
                      src={work.image}
                      width={200}
                      height={200}
                      alt={work?.title}
                    />
                  </div>
                  
                )}
                </CardHeader>
                <CardContent className="grid gap-4">
                  <p className="flex-1 space-y-1">{work?.content}</p>
                </CardContent>
                <CardFooter>
                <div>
                { (work?.categories !== undefined && work?.categories?.length > 0) ? (
                    work?.categories.map((category, index) => (
                        <Badge variant="secondary" className="rounded-full text-sm font-semibold text-gray-700 mr-2" key={index}>{category}</Badge>
                    ))
                ) : null}
                </div>
                </CardFooter>
                <div className="pt-10 flex flex-1">
                  {!work?.github ? null : (
                    <div className="p-6 pt-0">
                      <Link href={work?.github} className="inline-block">
                        <button
                          className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20 dark:bg-white dark:hover:bg-slate-400"
                          type="button">
                          GitHub
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                          </svg>
                        </button>
                      </Link>
                    </div>
                  )}
                  {!work?.video ? null : (
                  <div className="p-6 pt-0">
                      <Link href={work?.video} className="inline-block">
                        <button
                          className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20 dark:bg-white dark:hover:bg-slate-400"
                          type="button">
                          Video
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                          </svg>
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ))
        }
      </div>
      <ScrollToTopButton />
    </>
  )
};