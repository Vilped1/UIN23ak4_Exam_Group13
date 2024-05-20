export default function GenreList({allGenres}) {
    return (
        <>
            <h2>Sjangere</h2>
            <ul>
            {allGenres?.map((genre, index) =>
                    <li key={index}>{genre.imagetitle}</li>
                )}
            </ul>
            {/* <Login allUsers={allUsers} setMainUser={setMainUser} /> */}
            {/* <UserCompare/> */}
        </>
    )
}