export const users = {
    title: "Brukere",
    name: "users",
    type: "document",
    fields: [
        {
            title: "Bruker",
            name: "user",
            type: "string"
        },
        {
            title: "Favorittsjangere",
            name: "favoriteGenre",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "genres" }],
                    preview: {
                        select: {
                            title: "genre",
                            subtitle: "genreurl.current"
                        }
                    }
                }
            ]
        },
        {
            title: "Favorittfilmer",
            name: "favoriteMovies",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "movies" }]
                }
            ]
        }
    ]
}