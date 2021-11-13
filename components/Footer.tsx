import React, { memo } from 'react'

export const Footer: React.FC = memo(
  () => {
    return (
      <footer className="border-t border-accent-2 h-16">
        <div className="h-full flex justify-center items-center m-auto">
          <div className="text-center break-all">
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
