import React, { memo } from 'react'

export const Footer: React.FC = memo(
  () => {
    return (
      <footer className="border-accent-2 h-16 border-t">
        <div className="m-auto flex h-full items-center justify-center">
          <div className="break-all text-center">
            Copyright © {new Date().getFullYear()} Laststance.io All rights
            reserved.
          </div>
        </div>
      </footer>
    )
  },
  () => true
)
Footer.displayName = 'Footer'
