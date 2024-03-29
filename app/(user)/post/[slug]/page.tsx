import { RichText } from "@/components/RichText";
import { client, urlFor } from "@/lib/sanity.client";
import { Post } from "@/types";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import {
	FaFacebookF,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaYoutube,
} from "react-icons/fa";

interface Props {
	params: {
		slug: string;
	};
}

export const revalidate = 30;

export const generateStaticParams = async () => {
	const query = groq`*[_type == 'post']{
        slug
    }`;
	const slugs: Post[] = await client.fetch(query);
	const slugRoutes = slugs.map((slug) => slug?.slug?.current);
	return slugRoutes?.map((slug) => ({
		slug,
	}));
};

const SlugPage = async ({ params: { slug } }: Props) => {
	const query = groq`*[_type == 'post' && slug.current == $slug][0]{
        ...,
        body,
        author->
    }`;
	const post: Post = await client.fetch(query, { slug });

	return (
		<div className="m-[3.5rem]">
			<div className="flex  items-center mb-10">
				<div className="w-full md:w-2/3">
					<h1 className="text-3xl font-black mb-10">{post.title}</h1>
					<Image
						src={urlFor(post?.mainImage).url()}
						width={500}
						height={500}
						alt="main image"
						className="object-cover w-full"
					/>
				</div>
				<div className="w-1/3 m-10 hidden md:inline-flex flex-col items-center gap-5 px-4">
					<Image
						src={urlFor(post?.author?.image).url()}
						width={200}
						height={200}
						alt="author image"
						className="w-32 h-32 rounded-full object-cover"
					/>
					<p className="text-3xl text-[#ff7878] font-semibold">
						{post?.author?.name}
					</p>
					<p className="text-center tracking-wide text-sm">
						{post?.author?.description}
					</p>
					<br />
				</div>
			</div>
			<div>
				<PortableText value={post?.body} components={RichText} />
			</div>
		</div>
	);
};

export default SlugPage;
