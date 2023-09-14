import React, { memo } from 'react'

// @TODO up content something
const Index: React.FC = memo(
  () => {
    return (
      <main className="flex-1 bottom-20 flex flex-col sp:bottom-5">
        <h2 className="mt-40 text-center text-4xl font-semibold text-indigo-600">
          I'm making tools for reduce yak shaving clutter.
        </h2>
        <h1 className="mt-10 overflow-clip text-center text-5xl font-bold text-gray-900 md:text-8xl lg:text-9xl">
          Laststance.io
        </h1>

        <div className="mt-ratio lg:mt-28">
          <p className="mt-10 text-center text-2xl leading-none text-gray-500 md:text-4xl">
            Laststance.io, gig for become best Framework author from a contract
            developer. 🛣️
          </p>
        </div>
      </main>
    )
  },
  () => true,
)
Index.displayName = 'Index'

export default Index
