import React, { useState } from "react";


export default function Card({ resource }) {
    return (
      <section className = " flex items-center justify-center ml-5 p-5 border-2 border-red-400 bg-red-100 rounded-lg mt-5 w-80 text-red-400">
        <a href={resource.link} target="_blank" class = "resource-link">
        <h2 class = "font-extrabold">
            {resource.name}</h2>
        <p>{resource.description}</p>
        </a>
      </section>
    )
  }

export function List({ object }) {
  return (
    <section className = " flex items-center justify-center ml-5 p-5 border-2 border-red-400 bg-red-100 rounded-lg mt-5 w-80 text-red-400">
      <h2 className = "pt-5 pl-5 text-xl text-green-400 font-bold">
          {object.title}</h2>
      <p>{object.description}</p>
      <p>{object.description}</p>
    </section>
  )
}