import { parseISO, format } from 'date-fns'
import React, { memo } from 'react'

import type { Post } from '../../types'

interface Props {
  dateString: Post['date']
}

const Date: React.FC<Props> = memo(
  ({ dateString }) => {
    const date = parseISO(dateString)
    return (
      <time
        className="flex items-center text-lg text-gray-500"
        dateTime={dateString}
      >
        {format(date, 'LLLL	d, yyyy')}
      </time>
    )
  },
  () => true
)

export default Date
