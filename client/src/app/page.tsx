import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
import React from "react";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();

  return { ...data.data };
}

async function Home() {
  const data = await loader();
  const blocks = data?.blocks || [];

  return <BlockRenderer blocks={blocks} />;
}

export default Home;
