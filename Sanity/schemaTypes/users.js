export const user = {
  title: "User",
  name: "User",
  type: "document",
  fields: [
    {
      title: "Username",
      name: "Username",
      type: "string"
    },
    {
      title: "profilePicture",
      name: "ProfilePicure",
      type: "image"
    },
    {
      title: "GenreSection",
      name: "GenreSection",
      type: "array",
      of: [{type: "favGenre"}]
    }
  ]
}

export const favGenre = {
  title: "Favorite Genre",
  name: "favGenre",
  type: "object",
  fields: [
    {
      title: "Genre Name",
      name: "genreName",
      type: "string"
    },
    {
      title: "Genre preview image",
      name: "genreImage",
      type: "image"
    }
  ]
}