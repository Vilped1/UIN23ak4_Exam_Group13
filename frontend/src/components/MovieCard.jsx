export default function MovieCard({ movie }) {
  return (
    <>
      {/*Henter bilde, title,release Year */}
      <article id="movieCard">
        {/* Link til IMDB side for folmen er lagt på hele filmkortet */}
        <a href={`https://www.imdb.com/title/${movie.id}/`}>
          <img src={movie.primaryImage.url} alt={movie.titleText.text} />
          <h3>{movie.titleText.text}</h3>
          <p>{movie.releaseYear.year}</p>
        </a>
      </article>
    </>
  );
}
