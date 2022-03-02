import React from "react";

interface ArticlePageProps {
  title: string;
}

export const ArticlePage: React.FC<ArticlePageProps> = (props) => {
  const { title } = props;
  return (
    <article className="bg-slate-200 p-16 min-h-screen">
      <h1 className="text-center text-xl mt-8">{title}</h1>
      <div className="w-96 bg-black h-1 mx-auto mt-4 rounded-sm" />
      <div className="w-6 aspect-square bg-red-500 mx-auto mt-8" />
      <div className="container mx-auto py-2 group">
        <p className="mt-8 first:mt-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
          massa sit amet enim malesuada tincidunt. Cras vel ipsum libero.
          Pellentesque non aliquam sapien, sit amet aliquet diam. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Fusce tincidunt accumsan quam eget lobortis. Donec a enim sit
          amet eros pellentesque commodo. Suspendisse placerat ipsum sit amet
          nulla suscipit, finibus condimentum erat accumsan. In tortor urna,
          accumsan nec massa ut, vehicula venenatis purus. Donec consequat
          luctus imperdiet. Donec in velit a tortor sollicitudin imperdiet ac
          vel nibh. Donec arcu justo, semper at odio eu, volutpat cursus nulla.
          Nunc dignissim felis vitae sapien laoreet, vel porttitor elit posuere.
        </p>
        <p className="mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
          massa sit amet enim malesuada tincidunt. Cras vel ipsum libero.
          Pellentesque non aliquam sapien, sit amet aliquet diam. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Fusce tincidunt accumsan quam eget lobortis. Donec a enim sit
          amet eros pellentesque commodo. Suspendisse placerat ipsum sit amet
          nulla suscipit, finibus condimentum erat accumsan. In tortor urna,
          accumsan nec massa ut, vehicula venenatis purus. Donec consequat
          luctus imperdiet. Donec in velit a tortor sollicitudin imperdiet ac
          vel nibh. Donec arcu justo, semper at odio eu, volutpat cursus nulla.
          Nunc dignissim felis vitae sapien laoreet, vel porttitor elit posuere.
        </p>
        <p className="mt-8 group-hover:text-red-600 transition">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
          massa sit amet enim malesuada tincidunt. Cras vel ipsum libero.
          Pellentesque non aliquam sapien, sit amet aliquet diam. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Fusce tincidunt accumsan quam eget lobortis. Donec a enim sit
          amet eros pellentesque commodo. Suspendisse placerat ipsum sit amet
          nulla suscipit, finibus condimentum erat accumsan. In tortor urna,
          accumsan nec massa ut, vehicula venenatis purus. Donec consequat
          luctus imperdiet. Donec in velit a tortor sollicitudin imperdiet ac
          vel nibh. Donec arcu justo, semper at odio eu, volutpat cursus nulla.
          Nunc dignissim felis vitae sapien laoreet, vel porttitor elit posuere.
        </p>
        <p className="mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
          massa sit amet enim malesuada tincidunt. Cras vel ipsum libero.
          Pellentesque non aliquam sapien, sit amet aliquet diam. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Fusce tincidunt accumsan quam eget lobortis. Donec a enim sit
          amet eros pellentesque commodo. Suspendisse placerat ipsum sit amet
          nulla suscipit, finibus condimentum erat accumsan. In tortor urna,
          accumsan nec massa ut, vehicula venenatis purus. Donec consequat
          luctus imperdiet. Donec in velit a tortor sollicitudin imperdiet ac
          vel nibh. Donec arcu justo, semper at odio eu, volutpat cursus nulla.
          Nunc dignissim felis vitae sapien laoreet, vel porttitor elit posuere.
        </p>
      </div>
    </article>
  );
};
