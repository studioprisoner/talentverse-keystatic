import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NextHead from "next/head";

type MetaData = {
  title?: string;
  description?: string;
  imagePath?: string;
  imageAlt?: string;
};

const defaultMeta = {
  title: "Talentverse | Employment Navigation",
  description:
    "We work with clients and talent to navigate the best connection and retention outcomes.",
  imagePath: "/images/seo-image.png",
  imageAlt: "Talentverse Logo",
};

export default function Seo({
  title = defaultMeta.title,
  description = defaultMeta.description,
  imagePath = defaultMeta.imagePath,
  imageAlt = defaultMeta.imageAlt,
}: MetaData) {
  // Get correct domain to pass it to SEO image
  const router = useRouter();
  const [rootUrl, setRootUrl] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    const root = window.location.origin;
    const current = root + window.location.pathname;
    setRootUrl(root);
    setCurrentUrl(current);
  }, [router.pathname]);

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={rootUrl + imagePath} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
