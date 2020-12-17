import React from 'react'
import { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import { Preview } from './Preview'

interface Props {
  preview?: GetStaticPropsContext['preview']
}

const Header: React.FC<Props> = ({ preview }) => {
  if (preview) {
    return (
      <header className="h-16 box-border border-b w-screen">
        <Preview />
      </header>
    )
  }

  return (
    <header className="h-16 box-border border-b w-screen">
      <section className="container h-full flex flex-row justify-between py-2 px-2 m-auto">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold tracking-tighter leading-tight">
              Laststance.io
            </a>
          </Link>
        </div>
        <section className="flex flex-row-reverse items-end flex-wrap items-center">
          <div className="px-1 sm:px-4 md:px-4 lg:px-4 flex-shrink">
            <Link href="/posts">
              <a className="hover:text-gray-400">Blog</a>
            </Link>
          </div>
          <div className="px-1 sm:px-4 md:px-4 lg:px-4 flex-shrink">
            <Link href="/about">
              <a className="hover:text-gray-400">About</a>
            </Link>
          </div>
          <div className="px-1 sm:px-4 md:px-4 lg:px-4 flex-shrink">
            <Link href="/activity">
              <a className="hover:text-gray-400">Activity</a>
            </Link>
          </div>
          <div className="px-1 sm:px-4 md:px-4 lg:px-4 flex-shrink">
            <Link href="/products">
              <a className="hover:text-gray-400">Prod</a>
            </Link>
          </div>
        </section>
      </section>
    </header>
  )
}

export default Header
