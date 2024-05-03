export const genres = {
    title: "Sjangere",
    name: "genres",
    type: "document",
    fields: [
      {
        title: "Sjangerbilde",
        name: "genreimage",
        type: "image",
      },
        {
            title: "Sjanger",
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
