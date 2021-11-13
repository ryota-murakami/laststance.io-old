import React, { memo } from 'react'

const Repo: React.FC = memo(() => {
  return (
    <section className="container flex flex-col items-center justify-center m-auto h-screen">
      <h1 className="text-4xl">Comming soon...</h1>
    </section>
  )
})
Repo.displayName = 'Repo'

export default Repo
