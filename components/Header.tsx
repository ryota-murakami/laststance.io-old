import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8">
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="hover:underline">Laststance.io</a>
      </Link>
    </h2>
  )
}

export default Header
