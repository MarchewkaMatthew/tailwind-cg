import React from "react";

interface ArticlePageProps {
  title: string;
}

export const ArticlePage: React.FC<ArticlePageProps> = (props) => {
  const { title } = props;
  return (
    <article>
      <div className="relative w-full max-h-72">
        <img
          src="https://picsum.photos/1920/1080"
          alt=""
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="container w-full aspect-video" />
      </div>
      <div className="container mx-auto px-8 lg:px-10 py-8 lg:flex lg:gap-10">
        <div>
          <h1 className="text-3xl">{title}</h1>
          <div className="prose dark:prose-invert mt-8 lg:mt-10">
            <p>
              For years parents have espoused the health benefits of eating
              garlic bread with cheese to their children, with the food earning
              such an iconic status in our culture that kids will often dress up
              as warm, cheesy loaf for Halloween.
            </p>
            <blockquote>Garlic bread is super cool</blockquote>
            <h2>Science talk</h2>
            <p>
              But a recent study shows that the celebrated appetizer may be
              linked to a series of rabies cases springing up around the
              country.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 h-96 lg:flex-1 mt-8 lg:mt-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://picsum.photos/1920/1080"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="col-start-3">
            <div className="relative rounded-lg shadow-lg overflow-hidden h-full">
              <img
                src="https://picsum.photos/1920/1080"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="relative rounded-lg shadow-lg overflow-hidden h-full">
            <img
              src="https://picsum.photos/1920/1080"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-lg shadow-lg overflow-hidden h-full">
            <img
              src="https://picsum.photos/1920/1080"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="row-start-1 col-start-2 col-span-2">
            <div className="relative rounded-lg shadow-lg overflow-hidden h-full">
              <img
                src="https://picsum.photos/1920/1080"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
