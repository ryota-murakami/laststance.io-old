import type { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React, { memo } from 'react'

import { Preview } from './Preview'

interface Props {
  preview?: GetStaticPropsContext['preview']
}

const Header: React.FC<Props> = memo(
  ({ preview }) => {
    if (preview) {
      return (
        <header className="box-border h-16 border-b">
          <Preview />
        </header>
      )
    }

    return (
      <header className="z-10 box-border flex h-16 justify-center border-b">
        <section className="container mx-auto flex h-full flex-row justify-between px-2 py-2 md:px-6">
          <div className="flex items-center">
            <Link href="/">
              <a className="md:text3xl text-2xl font-bold leading-tight tracking-tighter">
                Laststance.io
              </a>
            </Link>
          </div>
          <section className="flex flex-grow flex-wrap items-center justify-end space-x-2 text-base md:space-x-4">
            <div className="flex-shrink">
              <Link href="/about">
                <a className="hover:text-gray-400">About</a>
              </Link>
            </div>
            <div className="flex-shrink">
              <a
                className="hover:text-gray-400"
                href="https://digitalstrength.dev/"
                target="_blank"
                rel="noreferrer"
              >
                Diary
              </a>
            </div>
            {/*<div className="px-1 sm:px-4 md:px-4 lg:px-4 flex-shrink">*/}
            {/*  <Link href="/activity">*/}
            {/*    <a className="hover:text-gray-400">Activity</a>*/}
            {/*  </Link>*/}
            {/*</div>*/}
            <div className="flex-shrink">
              <Link href="/repo">
                <a className="hover:text-gray-400">Repo</a>
              </Link>
            </div>
          </section>
        </section>
      </header>
    )
  },
  () => true
)
Header.displayName = 'Header'

export default Header
