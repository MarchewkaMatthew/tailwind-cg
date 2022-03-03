import React from "react";
import { ArticleHero } from "../../components/articleHero/ArticleHero";
import { ArticleRichtext } from "../../components/articleRichtext/ArticleRichtext";
import { Card } from "../../components/card/Card";
import { GalleryItem } from "../../components/galleryItem/GalleryItem";

interface ArticlePageProps {
  title: string;
}

export const ArticlePage: React.FC<ArticlePageProps> = (props) => {
  const { title } = props;
  return (
    <article>
      <ArticleHero />
      <h1>{title}</h1>
      <ArticleRichtext />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <Card>Extra content</Card>
    </article>
  );
};
