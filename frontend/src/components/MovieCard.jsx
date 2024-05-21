export default function MovieCard({ movie }) {
  return (
    <>
      <a href={`https://www.imdb.com/title/${movie.id}/`}>
        <img src={movie.primaryImage.url} alt={movie.titleText.text} />
        <h3>{movie.titleText.text}</h3>
        <p>{movie.releaseYear.year}</p>
      </a>
    </>
  );
}
