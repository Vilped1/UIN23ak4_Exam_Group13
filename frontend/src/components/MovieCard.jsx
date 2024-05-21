import { IconContext } from "react-icons"
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import heartIcon from "../assets/heartIcon.svg"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {
  return (
    <>
      <a href={`https://www.imdb.com/title/${movie.id}/`}>
        <img src={movie.primaryImage.url} alt={movie.titleText.text} />
      </a>
      <section id="movieInfo">
        <a href={`https://www.imdb.com/title/${movie.id}/`}>{movie.titleText.text}</a>
        <p>{movie.releaseYear.year}</p>
      </section>
    </>
  )
}
