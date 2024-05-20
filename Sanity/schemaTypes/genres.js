<<<<<<< Updated upstream
// export const images = {
//   title: "Genres",
//   name: "asset",
//   type: "document",
//   fields: [
//     {
//       title: "Image",
//       name: "image",
//       type: "image",
//     },
//     {
//       title: "Image title",
//       name: "imagetitle",
//       type: "string"
//   }
//   ],
// };
=======
export const images = {
  title: "Genres",
  name: "asset",
  type: "document",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Genre",
      name: "genreTitle",
      type: "string"
  }
  ],
};
>>>>>>> Stashed changes

export const genres = {
    title: "Sjangere",
    name: "genres",
    type: "document",
    fields: [
<<<<<<< Updated upstream
      // {
      //   title: "Genre Image",
      //   name: "genreimage",
      //   type: "reference",
      //   to: [{ type: "asset"}],
      // },
=======
            {
        title: "Genre Image",
        name: "genreimage",
        type: "reference",
        to: [{ type: "asset"}],
      },
>>>>>>> Stashed changes
        {
            title: "Sjangertittel",
            name: "genre",
            type: "string",
        },
        {
            title: "Sjangerlink",
            name: "genreurl",
            type: "slug",
            options: {
                source: "genre",
                slugify: input => input
                .toLowerCase()
                .replace(/\s+/g, '-')
            }
        }
    ]
}
