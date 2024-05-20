export default function Home({ mainUser }) {
    return (
        <>
        <main> {/* Flytte til Layout */}
          <h1>Hei {localStorage.getItem("user")}!</h1>
          <section>
            <h2>Filmer jeg skal se</h2>
            <p>Disse filmene ligger i ønskelisten min:</p>
          </section>
    
          <section>
            <h2>Jeg skal se sammen med...</h2>
            
          </section>
        </main>
        </>
      )
}