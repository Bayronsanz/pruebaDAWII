import React, { useState } from 'react'
import { PlantillaReact, Temas } from '../Modelos/TemaLectura'

export default function ListaTemas({children}: PlantillaReact) {
  const [temas, mostrarSoloInteresantes] = useState<Temas[]>([
    {
    id: 1,
    titulo: 'tema1',
    interesante: true
    },
    {
    id: 2,
    titulo: 'tema2',
    interesante: true
    },
    {
    id: 3,
    titulo: 'tema3',
    interesante: true
    },
    {
    id: 4,
    titulo: 'tema4',
    interesante: true
    },
    {
    id: 5,
    titulo: 'tema5',
    interesante: true
    },
    {
    id: 6,
    titulo: 'tema6',
    interesante: true
    },
    {
    id: 7,
    titulo: '7',
    interesante: true
    },{
    id: 8,
    titulo: 'tema8',
    interesante: true
    },
    {
    id: 9,
    titulo: 'tema9',
    interesante: true
    },
    {
    id: 10,
    titulo: 'tema10',
    interesante: true
    },{
    id: 11,
    titulo: 'tema11',
    interesante: true
    },
    {
    id: 12,
    titulo: 'tema12',
    interesante: true
    }
  ])
}


