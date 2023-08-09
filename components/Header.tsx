import Link from 'next/link'
import React, { memo } from 'react'

import Github from './elements/Github'

const Header: React.FC = memo(
  () => {
    return (
      <header className="z-10 box-border flex h-16 justify-center border-b">
        <section className="container mx-auto flex h-full flex-row justify-between px-2 py-2 md:px-6">
          <div className="flex items-center">
            <Link
              href="/"
              className="md:text3xl text-2xl font-bold leading-tight tracking-tighter"
            >
              Laststance.io
            </Link>
          </div>
          <section className="flex flex-grow flex-wrap items-center justify-end space-x-2 text-base md:space-x-4">
            <div className="flex-shrink">
              <a
                className="hover:text-gray-400"
                href="https://laststance.deno.dev/"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </div>
            <div className="flex-shrink">
              <Link href="/about" className="hover:text-gray-400">
                About
              </Link>
            </div>
            <div className="flex-shrink">
              <a
                className="hover:text-gray-400"
                href="https://nsx.malloc.tokyo/"
                target="_blank"
                rel="noreferrer"
              >
                ReadlingList
              </a>
            </div>
            <div className="flex-shrink">
              <Link href="/project" className="hover:text-gray-400">
                Project
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
  () => true,
)
Header.displayName = 'Header'

export default Header
