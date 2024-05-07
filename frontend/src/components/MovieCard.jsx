export default function MovieCard({ content, searchQuery }) {
  return (
    <>
      <section className="cardSection">
        {content === null || content?.length === 0 ? (
          <p>{`No results match your query: "${searchQuery}"`}</p>
        ) : (
          Array.isArray(content) &&
          content.map((item) => (
            <article key={item.id} className="movieCard">
              <section className="imgContainer">
                {item.primaryImage && (
                  <img
                    src={item.primaryImage.url}
                    alt={item.originalTitleText.text}
                  />
                )}
              </section>
              <section className="infoContainer">
                <h3>{item.originalTitleText.text}</h3>
              </section>
            </article>
          ))
        )}
      </section>
    </>
  );
}
