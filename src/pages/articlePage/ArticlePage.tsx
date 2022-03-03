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
    <article className="min-h-screen bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-50">
      <ArticleHero />
      <div className="container mx-auto px-32 lg:px-40 py-32 lg:flex lg:flex-wrap lg:gap-x-40 space-y-40">
        <div>
          <h1 className="text-3xl">{title}</h1>
          <div className="prose dark:prose-invert mt-32 lg:mt-40">
            <ArticleRichtext />
          </div>
        </div>
        <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-32 h-300 lg:flex-1">
          <GalleryItem />
          <div className="col-start-3">
            <GalleryItem />
          </div>
          <GalleryItem />
          <GalleryItem />
          <div className="row-start-1 col-start-2 col-span-2">
            <GalleryItem />
          </div>
        </div>
        <Card>Extra content</Card>
      </div>
    </article>
  );
};
