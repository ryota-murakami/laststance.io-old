import React from 'react'
import { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import { Preview } from './Preview'

interface Props {
  preview?: GetStaticPropsContext['preview']
}

const Header: React.FC<Props> = ({ preview }) => {
  return (
    <header className="w-full h-16 box-border border-b px-40">
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
            <section className="flex flex-row-reverse items-end">
              <div className="px-4">
                {/* @ts-ignore */}
                <Link href="/posts">
                  <a className="hover:text-gray-400">Blog</a>
                </Link>
              </div>
              <div className="px-4">
                <Link href="/about">
                  <a className="hover:text-gray-400">About</a>
                </Link>
              </div>
              <div className="px-4">
                <Link href="/activity">
                  <a className="hover:text-gray-400">Activity</a>
                </Link>
              </div>
              <div className="px-4">
                <Link href="/products">
                  <a className="hover:text-gray-400">Products</a>
                </Link>
              </div>
            </section>
          </section>
          )                                                        /* eslint-disable-line prettier/prettier */
        }                                                         {/* eslint-disable-line prettier/prettier */}
    </header>
  )
}

export default Header
