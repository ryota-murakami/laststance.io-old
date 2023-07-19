import React, { memo } from 'react'

const Index: React.FC = memo(
  () => {
    return (
      <main className="main relative bottom-20 flex flex-col justify-center space-y-10 sp:bottom-5">
        <h2 className="text-center text-4xl font-semibold text-indigo-600">
          Straightforward Web Technology for Better World
        </h2>
        <h1 className="overflow-hidden overflow-clip text-center text-5xl font-bold text-gray-900 md:text-8xl lg:text-9xl">
          Laststance.io
        </h1>
        <p className="pt-15 text-center text-2xl leading-none text-gray-500 md:text-4xl">
          Laststance.io is independent OSS organization
        </p>
      </main>
    )
  },
  () => true,
)
Index.displayName = 'Index'

export default Index
