"use client";
import { useState } from "react";
import Kor from "./components/cardKor";
import Filter from "./components/filterCompanent";
export default function Home() {
  let arr = ["", "", "", ""];
  return (
    <main className="container mx-auto border grid md:grid-cols-[minmax(200px,_400px)_1fr]">
      <div className="border-r p-4">
        <Filter />
      </div>
      <div className="w-full h-full p-4 space-y-3 overflow-hidden ">
        {/* {arr.map(i => <Kor />)} */}
        <Kor
        // userName="username"
        // fullName="Tom Bom"
        // description="Frontend developer and UI/UX enthusiast. Join me on this coding
        //   adventure!"
        // watch="2340"
        />
        <Kor
        // userName="username"
        // fullName="Tom Bom"
        // description="Frontend developer and UI/UX enthusiast. Join me on this coding
        //   adventure!"
        // watch="2340"
        />
        <Kor
        // userName="username"
        // fullName="Tom Bom"
        // description="Frontend developer and UI/UX enthusiast. Join me on this coding
        //   adventure!"
        // watch="2340"
        />
        <Kor
        // userName="username"
        // fullName="Tom Bom"
        // description="Frontend developer and UI/UX enthusiast. Join me on this coding
        //   adventure!"
        // watch="2340"
        />
        <Kor
        // userName="username"
        // fullName="Tom Bom"
        // description="Frontend developer and UI/UX enthusiast. Join me on this coding
        //   adventure!"
        // watch="2340"
        />
        <Kor
        // userName="username"
        // fullName="Tom Bom"
        // description="Frontend developer and UI/UX enthusiast. Join me on this coding
        //   adventure!"
        // watch="2340"
        />
      </div>
    </main>
  );
}
