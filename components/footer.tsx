import Container from './container'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="pt-28 pb-8 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row items-center lg:pl-4 lg:w-1/2">
            <div>Copyright © 2020 Laststance.io All rights reserved.</div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
