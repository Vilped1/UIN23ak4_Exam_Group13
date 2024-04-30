export default function MovieCard({ content }) {
  return (
    <>
      <section>
        {Array.isArray(content) &&
          content.map((item) => (
            <article key={item.id}>
              {item.primaryImage && (
                <img
                  src={item.primaryImage.url}
                  alt={item.originalTitleText.text}
                />
              )}
              <span>
                <h3>{item.originalTitleText.text}</h3>
              </span>
            </article>
          ))}
      </section>
    </>
  );
}
