import Link from "next/link";
import { StrapiImage } from "../StrapiImage";
import type { HeroSectionProps } from "@/types";

export function HeroSection({
  theme,
  heading,
  cta,
  image,
  logo,
  author,
  publishedAt,
  darken = false,
}: Readonly<HeroSectionProps>) {
  const hasValidImage = image && image.url;

  // Handle logo being an array instead of an object
  const firstLogo = Array.isArray(logo) ? logo[0] : logo;
  const hasValidLogo = firstLogo && firstLogo.image && firstLogo.image.url;

  return (
    <section className="hero">
      <div className="hero__background">
        {hasValidImage && (
          <StrapiImage
            src={image.url}
            alt={image.alternativeText || "No alternative text provided"}
            className="hero__background-image"
            width={500}
            height={600}
          />
        )}
        {darken && <div className="hero__background__overlay"></div>}
      </div>
      <div className={`hero__heading hero__heading--${theme}`}>
        <h1>{heading}</h1>
        {author && <p className="hero__author">{author}</p>}
        {publishedAt && <p className="hero__published-at">{publishedAt}</p>}
      </div>
      {cta && (
        <button className={`btn btn--medium btn--${theme}`}>
          <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
            {cta.text}
          </Link>
        </button>
      )}
      {hasValidLogo && (
        <StrapiImage
          src={firstLogo.image.url}
          alt={
            firstLogo.image.alternativeText || "No alternative text provided"
          }
          className={`hero__logo hero__logo--${theme}`}
          width={120}
          height={120}
        />
      )}
    </section>
  );
}
