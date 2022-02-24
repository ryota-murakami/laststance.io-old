import React, { memo } from 'react'

import RepoCard from '../components/elements/RepoCard'

const Repo: React.FC = memo(
  () => {
    return (
      <section className="container flex flex-col items-center m-auto h-screen">
        <RepoCard
          name="vite-react-ts-extended"
          url="https://github.com/laststance/vite-react-ts-extended"
          intro="Vite's react-ts templete + eslint, jest, tailwindcss."
        >
          This is the official Vite template(npm init vite@latest{' '}
          <span>(npm init vite@latest myapp -- --template react-ts)</span> with
          the following additional set up.
        </RepoCard>
        <RepoCard
          name="NSX"
          url="https://github.com/laststance/nsx"
          intro="Micro Blog System for React Developer"
        >
          The ultimate goal for this project is release it as a personal blog
          starter kit for React developers like Minimal Wordpress. I'm
          developping essential feature while my spare time, currenty I planning
          publish v1 2023 early.
        </RepoCard>
        <RepoCard
          name="create-react-app-typescript-todo-example-2022"
          url="https://github.com/laststance/create-react-app-typescript-todo-example-2022"
          intro="🚀 Create React App TypeScript Todo Example 2022"
        >
          Keep updating and publish{' '}
          <a
            href="https://todomvc.com/"
            target="_blank"
            className="no-underline hover:underline font-medium text-gray-700"
          >
            TODO MVC stuff
          </a>{' '}
          with a modern code style React.
        </RepoCard>
        <RepoCard
          name="use-app-state"
          url="https://github.com/laststance/use-app-state"
          intro="🌏 useAppState() hook. that global version of setState() built on useContext."
        >
          I wanted just setState() but can use across the another components for
          prototyping.
        </RepoCard>
      </section>
    )
  },
  () => true
)
Repo.displayName = 'Repo'

export default Repo
