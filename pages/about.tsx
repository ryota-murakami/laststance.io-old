import React, { memo } from 'react'

//
const About: React.FC = memo(
  () => {
    return (
      <main className="flex-1 bottom-20 flex flex-col sp:bottom-5">
        <h1 className="py-6 text-center text-4xl">About</h1>
        <section className="px-10 text-xl md:px-32 lg:px-48">
          <section className="mb-8">
            <p className="leading-16">
              Hi, I'm{' '}
              <a
                className="text-gray-600 hover:text-gray-400"
                href="https://ryota-murakami.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                Ryota Murakami
              </a>
              . Tokyo, Japan, age 32.
            </p>
            <p className="leading-16 mb-8">
              Here is just my website of personal Github Organization.{' '}
            </p>
          </section>

          <p className="leading-16 mb-8">
            Laststance.io, gig for become best Framework auther from a contract
            web dev 🛣️
          </p>
          <p className="leading-16 mb-8">
            "But how? You have no time for do it within 8h 5days per week and
            your exhausted by daily job"
          </p>
          <p className="leading-16 mb-8">
            Work 3 days per week then, invent everything Webdev/OSS things.
          </p>
        </section>
      </main>
    )
  },
  () => true,
)
About.displayName = 'About'

export default About
