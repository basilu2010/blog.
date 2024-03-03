import BlogContent from "@/components/BlogContent";
import Hero from "@/components/Hero";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import Image from "next/image";

const query = groq`*[_type=='post']{
  ...,
  author->,
    categories[]->,
    
} | order(_createdAt desc)`;

export default async function Home() {
	const posts = await client.fetch(query);

	return (
		<div>
			<Hero />
			<BlogContent posts={posts} />
		</div>
	);
}
