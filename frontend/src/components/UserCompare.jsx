export default function UserCompare({mainUser, compareUser}) {
  return (
    <>
      <main>
        <h2>
          Forslag for {mainUser.user} og {compareUser.user}
        </h2>
        <section>
          <h3>Catch up!</h3>
          <p>Oversikt over filmer, som begge brukere har på watchlist</p>
        </section>
        <section>
          <h3>Go safe!</h3>
          <p>Oversikt over felles favorittfilmer</p>
        </section>
        <section>
          <h3>Utforsk!</h3>
          {/* Skrive ut liste over favorittsjanger til begge brukere (SOM MATCHER BEGGE BRUKERE SOM BEGGE TO HAR OG LIKER) */}
        </section>
        <section>
          <h2>Ønskelister og favoritter</h2>
          <p>Dere har noen felles filminteresser!?</p>
        </section>
      </main>
    </>
  );
}
