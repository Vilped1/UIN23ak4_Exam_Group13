export const movies = {
    title: "Filmer",
    name: "movies",
    type: "document",
    fields: [
        {
            title: "Filmtittel",
            name: "movietitle",
            type: "string",
        },
        {
            title: "Filmlink",
            name: "movieurl",
            type: "slug",
            options: {
                source: "movietitle",
                slugify: input => input
                .toLowerCase()
                .replace(/\s+/g, '-')
            }
        },
        {
            title: "Sjanger",
            name: "genre",
            type: "reference",
            to: [{type: "genres"}]
        }
    ]
}