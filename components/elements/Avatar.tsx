import React, { memo } from 'react'

import type { Author } from '../../types'

interface Props {
  name: Author['name']
  picture: Author['picture']
}

// @TODO fix aspect retio
export const Avatar: React.FC<Props> = memo(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ name, picture }) => {
    return (
      <div className="flex items-center">
        <img
          src="https://cdn.sanity.io/images/8qfjmpmv/production/0453a311ba3f903590b5c49e50cfce6e9d3110d6-1700x2267.jpg?rect=0,283,1700,1700&w=80&h=80&fit=crop"
          className="w-12 h-12 rounded-full mr-4"
          alt={name}
        />
        <div className="text-xl font-medium">{name}</div>
      </div>
    )
  },
  () => true
)
