import React from 'react'
import { Author } from '../DataStructure'

interface Props {
  name: Author['name']
  picture: Author['picture']
}

export const Avatar: React.FC<Props> = ({ name, picture }) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
