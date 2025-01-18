"use client";
import React from "react";
import { SearchEngineSP } from "./SearchEngineSP";
import { ExampleWebsites } from "@/components/ExampleWebsites";
import Image from "next/image";
import { Search, SearchCheck } from "lucide-react";

export function SearchPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-start pt-10 px-4">
      <div className="mb-8 flex flex-row items-center">
        <p className="text-3xl font-bold">HTTP3 Web3 Search</p>
      </div>
      <SearchEngineSP />
      <div className="mt-16 w-full max-w-4xl">
        <ExampleWebsites showDescription={false} />
      </div>
    </div>
  );
}