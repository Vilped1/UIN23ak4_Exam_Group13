export default function MovieCard({ content }) {
  return (
    <>
      <section className="cardSection">
        {Array.isArray(content) &&
          content.map((item) => (
            <article key={item.id} className="movieCard">
              <span className="imgContainer">
                {item.primaryImage && (
                  <img
                    src={item.primaryImage.url}
                    alt={item.originalTitleText.text}
                  />
                )}
              </span>
              <span className="infoContainer">
                <h3>{item.originalTitleText.text}</h3>
              </span>
            </article>
          ))}
      </section>
    </>
  );
}
