import React, { memo } from 'react'

const About: React.FC = memo(
  () => {
    return (
      <main className="main">
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
              . Tokyo, Japan, age 31.
            </p>
            <p className="leading-16 mb-8">
              Here is just my website of personal Github Organization.{' '}
            </p>
            <p className="leading-16 mb-8">
              There are two reasons why I personally own a Github Organization.
            </p>
          </section>
          <section className="mb-4">
            <p className="leading-16 mb-8">
              At first, I was looking for some English words to use in the NPM
              scoped name, such as "@foo/mylib".
            </p>
            <p className="leading-16 mb-8">
              Secondly, I wanted to have a separate account for the cluttered
              fork repository, an extension of Helloworld that is trying
              something new, and a repository that is being developed as OSS
              with a clear concept.
            </p>
          </section>

          <p className="leading-16">
            I am currently focusing on the popularization of "Deno"
            <br />
            Because Deno is a platform that allows to build secure "Web
            Applications" without unnecessary complex ecosystems.
          </p>
        </section>
      </main>
    )
  },
  () => true,
)
About.displayName = 'About'

export default About
