import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "../lib/mdx";
import MDXComponents from "../components/MDXComponents";
import { DiscussionEmbed } from "disqus-react";
import { useDimension } from "../src/hooks/useDimension";
import { useEffect, useState } from "react";

export default function Post({ source, frontmatter }) {
  const { width } = useDimension();
  const [slug, setSlug] = useState("");
  useEffect(() => {
    console.log(frontmatter);
    setSlug(frontmatter.disqus);
  }, []);
  return (
    <div style={{ width: "100vw" }}>
      <div
        style={
          width > 700
            ? { margin: "auto", width: "80vw" }
            : { margin: "auto", width: "95vw" }
        }
      >
        <MDXRemote {...source} components={MDXComponents} />
        <DiscussionEmbed
          style={{ 
            backgroundColor: "#fff",
            borderRadius: "10px",
            padding: "1em",
            margin: '2em'

            
          
          }}
          
          shortname={slug}
          config={{
            url: `https://fraporitmos.com`,
            identifier: frontmatter.slug,
            title: "Comentarios con react",
            language: "es_MX",
            
          }}
        />
      </div>
    </div>
  );
}




export async function getStaticPaths() {
  const posts = await getFiles("posts");
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug("posts", params.slug);

  return {
    props: {
      source,
      frontmatter: {
        slug: params.slug,
        ...frontmatter,
      },
    },
  };
}
