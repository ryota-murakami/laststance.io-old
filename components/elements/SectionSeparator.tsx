import React, { memo } from 'react'

const SectionSeparator: React.FC = memo(
  () => {
    return <hr className="border-accent-2 mb-8 mt-16" />
  },
  () => true
)

export default SectionSeparator
