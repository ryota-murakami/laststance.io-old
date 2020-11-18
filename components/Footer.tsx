import Container from './generic/Container'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-accent-2">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center">
          <div className="flex flex-row lg:pl-4 lg:w-1/2">
            <div className="self-start">
              Copyright © 2020 Laststance.io All rights reserved.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
