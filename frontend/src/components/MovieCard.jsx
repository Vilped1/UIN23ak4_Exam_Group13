import { useState, useEffect } from "react";

export default function MovieCard() {
    const [movieCard, setMovieCard] = useState([])
    const [query, setQuery] = useState("tt0076759")

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    }

    const getMovieCard = async () => {
        try {
            const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/${query}`, options)
            const data = response.json()
            setMovieCard(data.results)
            console.log("movie card fetch: ", data)
        } catch {
            console.error("error on fetch movie card")
        }
    }

    useEffect(() => {
        getMovieCard()
    }, [])

    return (
        <>
            <article>
                <h1>Tittle:</h1>
            </article>
        </>
    )
}