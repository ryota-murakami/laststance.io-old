import Link from 'next/link'
import Container from '../generic/Container'
import React from 'react'

interface Props {
  preview?: GetStaticPropsContext['preview']
}

const Header: React.FC<Props> = ({ preview }) => {
  return (
    <div className="border-b py-2">
      <Container>
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
      </Container>
    </div>
  )
}

export default Header
