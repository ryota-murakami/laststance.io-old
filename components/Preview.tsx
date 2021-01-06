import React from 'react'

export const Preview: React.FC = () => (
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
)
