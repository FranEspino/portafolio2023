import React from "react";
import { getAllFilesFrontMatter } from "../lib/mdx";
import styles from '../styles/Home.module.css';
import CardPost from '../src/components/CardPost/CardPost'
import Bloghead from '../src/components/Bloghead/Bloghead'

const Blog = ({ props }) => {
  return (
    <>
      <Bloghead />
      <div className={styles.layout_posts} >
        {props.map((post) => (

          <CardPost
            key={post.id}
            content={post}
          />
        ))}
      </div>
    </>
  );
};

export default Blog;
export async function getStaticProps() {
  const props = await getAllFilesFrontMatter("posts");
  return {
    props: { props },
  };
}

