import React from 'react'

export const Preview: React.FC = () => (
  <div className="py-2 text-center text-sm">
    This page is a preview.{' '}
    <a
      href="/api/exit-preview"
      className="hover:text-cyan underline transition-colors duration-200"
    >
      Click here
    </a>{' '}
    to exit preview mode.
  </div>
)
