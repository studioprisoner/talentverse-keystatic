import Image from "next/image";
import type { InferGetStaticPropsType } from "next";
import { createReader } from "@keystatic/core/reader";
import { DocumentRenderer } from "@keystatic/core/renderer";

import config from "../keystatic.config";
import Seo from "../components/Seo";
import { inject } from "../utils/slugHelpers";

import woman from 'public/images/woman-working-on-computer.webp'
import warehouseworker from 'public/images/warehouse-worker-man.webp'
import warehouseworkers from 'public/images/warehouse-workers-3.webp'
import coffeeshop from 'public/images/people-meeting-for-coffee.webp'
import trainingroom from 'public/images/training-room.webp'

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

function ArrowIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
        <path d="M17.92 11.62C17.8724 11.4973 17.801 11.3851 17.71 11.29L12.71 6.29C12.6168 6.19676 12.5061 6.1228 12.3842 6.07234C12.2624 6.02188 12.1319 5.99591 12 5.99591C11.7337 5.99591 11.4783 6.1017 11.29 6.29C11.1968 6.38324 11.1228 6.49393 11.0723 6.61575C11.0219 6.73758 10.9959 6.86814 10.9959 7C10.9959 7.2663 11.1017 7.5217 11.29 7.71L14.59 11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H14.59L11.29 16.29C11.1963 16.383 11.1219 16.4936 11.0711 16.6154C11.0203 16.7373 10.9942 16.868 10.9942 17C10.9942 17.132 11.0203 17.2627 11.0711 17.3846C11.1219 17.5064 11.1963 17.617 11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L17.71 12.71C17.801 12.6149 17.8724 12.5028 17.92 12.38C18.02 12.1365 18.02 11.8635 17.92 11.62Z" fill="#2C2D34"/>
    </svg>
  );
}

function CardLink({ link, title, subtitle, icon }) {
  return (
    <a
      href={link}
      className="relative flex flex-col justify-end px-6 py-8 overflow-hidden bg-shark-700 isolate rounded-3xl"
    >
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      <div className="flex flex-wrap items-center overflow-hidden text-sm leading-6 text-gray-300 gap-y-1">
      </div>
      <Image
        src={icon}
        alt={title}
        width={32}
        height={32}
        className="flex-none object-cover w-8 h-8"
      />
      <h3 className="mt-3 text-xl font-semibold leading-6 text-white">
        <span className="absolute inset-0" />
        {title}
      </h3>
      <p className="uppercase text-malibu-300">{subtitle}</p>
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-white uppercase">Find out more</p>
        <div className="px-1 py-1 rounded-full w-9 h-9 bg-malibu-300">
          <ArrowIcon />
        </div>
      </div>
    </a>
  )
}

export default function Home({
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
    <div>
      <Seo />
      <div className="bg-malibu-300">
          <div className="overflow-hidden">
            <div className="px-6 pt-24 pb-24 mx-auto max-w-7xl sm:pt-30 lg:px-8 lg:pt-32">
              <div className="max-w-2xl mx-auto gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-5xl font-bold tracking-tight text-white font-cabinetgrotesk sm:text-6xl">
                  Navigate Talent Attraction and Retention
                  </h1>
                  
                  <p className="relative mt-6 text-lg leading-8 text-shark-700 sm:max-w-md lg:max-w-none">
                  We partner with business and talent to navigate the best employment connection experience. We co-pilot with you through every stage of your working journey.
                  </p>
                  <p className="mt-10 text-lg font-semibold uppercase">Journey with us</p>
                  <div className="flex items-center mt-4 gap-x-6">
                    
                    <a
                      href="/connect-employer"
                      className="rounded-md bg-shark-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-shark-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Employer <span>→</span>
                    </a>
                    <a
                      href="/connect-seeker"
                      className="rounded-md bg-shark-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-shark-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Job Seeker <span>→</span>
                    </a>
                  </div>
                </div>
                <div className="flex justify-end gap-8 mt-14 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="flex-none pt-32 ml-auto space-y-8 w-44 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        src={woman}
                        alt="Woman with glasses sitting at a laptop working"
                        priority
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="flex-none mr-auto space-y-8 w-44 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        src={warehouseworker}
                        alt="Man standing in a warehouse smiling wearing a high vis vest"
                        priority
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src={warehouseworkers}
                        alt="Female professional standing in a office"
                        priority
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="flex-none pt-32 space-y-8 w-44 sm:pt-0">
                    <div className="relative">
                      <Image
                        src={coffeeshop}
                        alt="Two people meeting in a coffee shop for a professional meeting smiling and having a conversation"
                        priority
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src={trainingroom}
                        alt="Training teacher standing infront of classroom smiling with people in the background"
                        priority
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative p-4 mx-auto overflow-hidden bg-white sm:p-0 max-w-7xl isolate">
          <img
            src="images/middle-bg.svg"
            className="absolute inset-0 -z-10"
          />
          <div className="relative grid items-end grid-cols-1 py-16 gap-y-12 lg:static lg:grid-cols-2">
            <div>
              <img
                src="images/our-approach.svg"
                />
            </div>
            <div className="">
                      <div>
                        <h2 className="text-base font-semibold leading-7 uppercase text-malibu-300">Understanding your journey</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-shark-700 sm:text-4xl">Our Approach</p>
                        <p className="mt-6 text-lg leading-8 text-shark-700">Before every take-off we connect with you to understand your specific needs. Through our 3-stage diagnostic approach, we co-create a tailored talent plan to achieve your outcomes.</p>
                        <p className="mt-6">
                          <a href="#" className="text-base font-semibold leading-6 text-malibu-300 hover:text-shark-700">
                            Find out more about our approach <span aria-hidden="true">→</span>
                          </a>
                        </p>
                      </div>
            </div>
          </div>
        </div>
    <div className="bg-malibu-300">
      <div className="p-4 py-8 mx-auto max-w-7xl">
      <div>
            <p className="text-base font-semibold leading-7 text-white uppercase">Unlocking connection outcomes</p>
            <h2 className="text-3xl font-bold tracking-tight text-shark-700 sm:text-4xl">Our Integrated Services</h2>      
            <p className="max-w-3xl mt-6 text-lg leading-8 text-shark-700">
            Our integrated service platforms support you at each employment stage. We remove friction barriers to more positive hiring and onboarding experience.
            </p>
      </div>
      <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 sm:gap-32 auto-rows-fr sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <CardLink
              link="/bizcrew"
              title="Bizcrew"
              subtitle="Talent Navigate"
              icon="images/rocket.svg"
            />
            <CardLink
              link="/catchzone"
              title="Catchzone"
              subtitle="Talent Employ"
              icon="images/target.svg"
            />
            <CardLink
              link="/coffee-career"
              title="Coffee & Careers"
              subtitle="Talent Connect"
              icon="images/coffee.svg"
            />
      </div>
  </div>
    </div>
    </div>
  );
}


