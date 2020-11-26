import Link from 'next/link'
import { Main } from '../generic/Main'
import React from 'react'
import { GetStaticPropsContext } from 'next'

interface Props {
  preview?: GetStaticPropsContext['preview']
}

const Header: React.FC<Props> = ({ preview }) => {
  return (
    <div className="border-b py-2">
      <Main>
        {preview ? (
          <div className="py-2 text-center text-sm">
            This page is a preview.{' '}
            <a
              href="/api/exit-preview"
              className="underline hover:text-cyan duration-200 transition-colors"
            >
              Click here
            </a>{' '}
            to exit preview mode.
          </div>
        ) : (
          <div className="flex flex-row-reverse py-2">
            <Link href="/posts">
              <a>Blog</a>
            </Link>
          </div>
        )}
      </Main>
    </div>
  )
}

export default Header
