import Head from "next/head";
import BlogCard from "components/Blogs/BlogCard";
import Footer from "components/common/Footer";
import Header from "components/common/Header/Header";
import styles from "@styles/scss/blog.module.scss";
import blogData from "/data/blogdata";
import GoToTop from "components/GoToTop";

export default function Blogs({ blogsData }) {
  console.log(blogsData);
  return (
    <>
			<GoToTop />
      <Head>
        <title>Blogs | Amupedia</title>
        <meta name='description' content='Check out our blog posts.' />
        <Header image='/images/blog/blog_bg.svg' text='Blogs' />
      </Head>
      {/* <Link href="/blog/writeblog">Write a blog</Link> */}
      <div className={styles.container}>
        {blogsData?.map((blogItem, index) => (
          <BlogCard
            key={blogItem.userId}
            id={index}
            title={blogItem.title}
            image={blogItem.coverImg}
            comments={blogItem.numberOfComments}
            likes={blogItem.like}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const blogsData = await fetchBlogs();
  return {
    props: { blogsData }
  };
}
