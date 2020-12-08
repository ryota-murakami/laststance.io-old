import React from 'react'
import { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import { Preview } from './Preview'

interface Props {
  preview?: GetStaticPropsContext['preview']
}

const Header: React.FC<Props> = ({ preview }) => {
  return (
    <header className="w-full h-12 box-border border-b px-40">
        {preview ? (<Preview />) :                                  /* eslint-disable-line prettier/prettier */
          (                                                         /* eslint-disable-line prettier/prettier */
          <section className="flex flex-row justify-between h-full py-2">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter leading-tight">
                <Link href="/">
                  <a>Laststance.io</a>
                </Link>
              </h1>
            </div>
            <aside className="flex flex-row-reverse items-end">
              <div className="px-4">
                <Link href="/posts">
                  <a>Blog</a>
                </Link>
              </div>
              <div className="px-4">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </div>
              <div className="px-4">
                <Link href="/activity">
                  <a>Activity</a>
                </Link>
              </div>
              <div className="px-4">
                <Link href="/products">
                  <a>Products</a>
                </Link>
              </div>
            </aside>
          </section>
          )                                                        /* eslint-disable-line prettier/prettier */
        }                                                         {/* eslint-disable-line prettier/prettier */}
    </header>
  )
}

export default Header
