import React, { memo } from 'react'

import RepoCard from '../components/elements/RepoCard'

const Project: React.FC = memo(
  () => {
    return (
      <main className="flex-1 bottom-20 flex flex-col items-center sp:bottom-5">
        <RepoCard
          name="eslint-config-ts-prefixer"
          url="https://github.com/laststance/eslint-config-ts-prefixer"
          intro="ESLint rule set that integrated prettier as one of ESLint rule and specialized fixable rule set :-)"
        >
          My TypeScript project's ESLint config.
        </RepoCard>
        <RepoCard
          name="vite-rtk-query"
          url="https://github.com/laststance/vite-rtk-query"
          intro="Vite RTK Query temptelte."
        >
          This include React+TS with familiar pre-setup tooling Redux Toolkit,
          RTK Query, eslint/prettier, jest/TS/react-testing-library/MSW,
          tailwindcss, GitHub Actions CI.
        </RepoCard>
        <RepoCard
          name="usd-query"
          url=""
          intro="Just make $ alias for document.querySelector."
        >
          While developing Browser Extension, I missed jQuery...
        </RepoCard>
        <RepoCard
          name=" create-react-app-vite"
          url="https://github.com/laststance/create-react-app-vite"
          intro="My CRA alternative. ⚛️"
        >
          This is the official Vite template(npm init vite@latest{' '}
          <span>(npm init vite@latest myapp -- --template react-ts)</span> with
          the following additional set up.
        </RepoCard>
        <RepoCard
          name="nsx"
          url="https://github.com/laststance/nsx"
          intro="Micro Blog System for React Developer"
        >
          The ultimate goal for this project is release it as a personal blog
          starter kit for React developers like Minimal Wordpress. I'm
          developping essential feature while my spare time, currenty I planning
          publish v1 2023 early.
        </RepoCard>
        <RepoCard
          name="react-typescript-todomvc-2022"
          url="https://github.com/laststance/react-typescript-todomvc-2022"
          intro="React TypeScript TodoMVC 2022"
        >
          Keep updating and publish{' '}
          <a
            href="https://todomvc.com/"
            target="_blank"
            className="font-medium text-gray-700 no-underline hover:underline"
          >
            TODO MVC stuff
          </a>{' '}
          with a modern code style React.
        </RepoCard>
      </main>
    )
  },
  () => true,
)
Project.displayName = 'Project'

export default Project
