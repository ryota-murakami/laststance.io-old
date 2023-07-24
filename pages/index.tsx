import React, { memo } from 'react'

// @TODO up content something
const Index: React.FC = memo(
  () => {
    return (
      <main className="main bottom-20 flex flex-col sp:bottom-5">
        <h2 className="mt-40 text-center text-4xl font-semibold text-indigo-600">
          Straightforward Web Application Framework for Better World
        </h2>
        <h1 className="mt-10 overflow-clip text-center text-5xl font-bold text-gray-900 md:text-8xl lg:text-9xl">
          Laststance.io
        </h1>

        <div className="mt-32">
          <p className="text-center text-2xl leading-none text-gray-500 md:text-4xl">
            Laststance.io is story for become best Framework auther from a
            contract web dev 🛣️
          </p>

          <p className="mt-10 text-center text-2xl leading-none text-gray-500 md:text-4xl">
            "But how? You have no time for do it within 8h 5days per week and
            your exhausted by daily job"
          </p>
        </div>
      </main>
    )
  },
  () => true,
)
Index.displayName = 'Index'

export default Index
