import { IconContext } from "react-icons"
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import heartIcon from "../assets/heartIcon.svg"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {
  return (
    <>
      <img src={movie.primaryImage.url} alt={movie.titleText.text} />
      <a href={`https://www.imdb.com/title/tt1114677/${movie.id}`}>{movie.titleText.text}</a>
      <p>{movie.releaseYear.year}</p>
    </>
  )
}
