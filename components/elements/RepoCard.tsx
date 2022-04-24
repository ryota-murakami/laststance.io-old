import type { HTMLAttributes } from 'react'
import React, { memo } from 'react'

import type { _ } from '../../types'

interface Props {
  name: string
  url: string
  intro: string
}

const RepoCard: React.FC<Props & HTMLAttributes<_>> = memo(
  ({ name, url, intro, children }) => {
    return (
      <div className="w-10/12 border-b border-gray-200 py-6">
        <a
          href={url}
          target="_blank"
          className="text-2xl font-medium leading-6 text-gray-900 no-underline hover:underline"
        >
          {name}
        </a>
        <div className="flex flex-col">
          <p className="mt-2 max-w-4xl text-xl text-gray-600 ">{intro}</p>
          <p className="mt-2 max-w-4xl text-lg text-gray-500">{children}</p>
        </div>
      </div>
    )
  },
  () => true
)
RepoCard.displayName = 'RepoCard'

export default RepoCard
