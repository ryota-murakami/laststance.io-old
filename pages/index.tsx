import React from 'react'

const Index: React.FC = () => {
  return (
    <main className="main flex flex-col justify-center space-y-10 relative bottom-20 sp:bottom-5">
      <h2 className="text-4xl text-center font-semibold text-indigo-600">
        UI<span className="mx-0.5">×</span>
        Data<span className="mx-0.5">×</span>
        Web<span className="mx-0.5">×</span>
        Code is Lifetime.
      </h2>
      <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-gray-900 text-center overflow-clip overflow-hidden">
        Laststance.io
      </h1>
      <p className="pt-15 leading-none text-2xl md:text-4xl text-gray-500 text-center">
        Laststance.io is independent OSS organization
      </p>
    </main>
  )
}

export default Index
