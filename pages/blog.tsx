import Link from "next/link";
import Image from "next/image";
import type { InferGetStaticPropsType } from "next";
import { createReader } from "@keystatic/core/reader";
import { DocumentRenderer } from "@keystatic/core/renderer";

import config from "../keystatic.config";
import Seo from "../components/Seo";
import Divider from "../components/Divider";
import { inject } from "../utils/slugHelpers";
import { cx } from "../utils/cx";
import maybeTruncateTextBlock from "../utils/maybeTruncateTextBlock";

const reader = createReader("", config);

async function getHomeData() {
  const reader = createReader("", config);
  const homePage = await reader.singletons.home.read();
  const homePageHeading = await (homePage?.heading() || []);

  return {
    ...homePage,
    heading: homePageHeading,
  };
}

async function getPostData() {
  const postSlugs = await reader.collections.posts.list();
  const postData = await Promise.all(
    postSlugs.map(async (slug) => {
      const post = await reader.collections.posts.read(slug);
      const content = (await post?.content()) || [];
      return {
        ...post,
        content,
        slug,
        ...({ type: "post" } as const),
      };
    })
  );
  return postData;
}

async function getExternalArticleData() {
  const externalArticles = await reader.collections.externalArticles.list();
  const externalArticleData = await Promise.all(
    externalArticles.map((slug) =>
      inject(slug, reader.collections.externalArticles)
    )
  );
  return externalArticleData.map((article) => ({
    ...({ type: "externalArticle" } as const),
    ...article,
  }));
}

async function getAllAuthors() {
  const authorsList = await reader.collections.authors.list();
  const allAuthors = await Promise.all(
    authorsList.map((slug) => inject(slug, reader.collections.authors))
  );
  return allAuthors;
}

export async function getStaticProps() {
  const [home, posts, externalArticles, authors] = await Promise.all([
    getHomeData(),
    getPostData(),
    getExternalArticleData(),
    getAllAuthors(),
  ]);

  return {
    props: {
      home,
      posts,
      externalArticles,
      authors,
    },
  };
}

export default function Blog({
  home,
  posts,
  externalArticles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const allPosts = [...posts, ...externalArticles];
  const orderedPostFeed = allPosts.sort((a, b) => {
    if (a?.publishedDate && b?.publishedDate) {
      return new Date(a.publishedDate).getTime() <
        new Date(b.publishedDate).getTime()
        ? 1
        : -1;
    }

    return 0;
  });

  return (
    <div className="px-4 mx-auto md:px-28 max-w-7xl">
      <Seo />
      {home.heading && (
        <>
          <DocumentRenderer
            document={home.heading}
            renderers={{
              inline: {
                bold: ({ children }) => {
                  return <span className="text-cyan-700">{children}</span>;
                },
              },
              block: {
                paragraph: ({ children }) => {
                  return (
                    <h1 className="text-center font-bold text-2xl max-w-xs sm:text-5xl sm:max-w-2xl lg:text-7xl lg:max-w-[60rem] mx-auto">
                      {children}
                    </h1>
                  );
                },
              },
            }}
          />
          <Divider />
        </>
      )}
      {orderedPostFeed.length === 0 ? (
        <h2>There are no posts available</h2>
      ) : (
        <ul className="grid grid-cols-1 gap-4 pl-0 md:gap-x-6 gap-y-20 sm:gap-y-16 md:grid-cols-2 xl:grid-cols-3">
          {orderedPostFeed.map((post) => {
            if (post.type === "externalArticle") {
              return (
                <Card
                  image={`/images/external-articles/${post.slug}/${post.coverImage}`}
                  title={post.title}
                  summary={post.summary}
                  key={post.slug}
                  link={post.directLink}
                  externalLink
                />
              );
            }
            if (post.type === "post") {
              return (
                <Card
                  image={`/images/posts/${post.slug}/${post.coverImage}`}
                  title={post.title}
                  summary={post.summary}
                  key={post.slug}
                  link={`/${post.slug}`}
                />
              );
            }
          })}
        </ul>
      )}
    </div>
  );
}

const Card = ({ image, title, summary, link, externalLink }: any) => {
  return (
    <li className={cx("group", externalLink && "external-link")}>
      <Link
        href={link}
        target={externalLink ? "_blank" : "_self"}
        className="no-underline"
      >
        <div>
          <div>
            <Image
              src={image}
              alt=""
              width={768}
              height={400}
              className="rounded-sm ring-1 ring-black/5"
            />
          </div>
          <h3 className="mt-4 text-xl font-medium group-hover:underline">
            {title}
          </h3>
          {summary && (
            <p className="mt-3 text-gray-600 line-clamp-3">
              {maybeTruncateTextBlock(summary, 100)}
            </p>
          )}
        </div>
      </Link>
    </li>
  );
};
