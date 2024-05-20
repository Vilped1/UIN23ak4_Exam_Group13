/*  export const images = {
   title: "Genres",
   name: "posterImages",
   type: "object",
   fields: [
     {
      title: "Image",
       name: "image",
       type: "image",
     },
    {
      title: "Image title",
      name: "imagetitle",
      type: "string"
  }
   ],
 }; */

export const genres = {
    title: "Sjangere",
    name: "genres",
    type: "document",
    fields: [
/*        {
         title: "Genre Image",
         name: "genreimage",
         type: "reference",
         to: [{ type: "posterImages"}],
       }, */
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
