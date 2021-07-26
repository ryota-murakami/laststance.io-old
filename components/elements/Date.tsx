import React from 'react'
import { parseISO, format } from 'date-fns'
import { Post } from '../../types'

interface Props {
  dateString: Post['date']
}

const Date: React.FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}

export default Date
