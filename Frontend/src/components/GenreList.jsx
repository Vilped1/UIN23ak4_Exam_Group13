export default function GenreList() {
    return (
        <>
            <h2>Sjangere</h2>
            {allGenres?.map((genre) =>
                <ul>
                    <li>{genre.imagetitle}</li>
                </ul>
            )}
            {/* <Login allUsers={allUsers} setMainUser={setMainUser} /> */}
            {/* <UserCompare/> */}
        </>
    )
}