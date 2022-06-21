import Link from 'next/link'
import React, { memo } from 'react'

import Github from '../components/elements/Github'

const Header: React.FC = memo(
  () => {
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
              <Link href="/project">
                <a className="hover:text-gray-400">Project</a>
              </Link>
            </div>
            <div className="flex-shrink">
              <a href="https://github.com/laststance" target="_blank">
                <Github />
              </a>
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
