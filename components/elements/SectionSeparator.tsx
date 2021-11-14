import React, { memo } from 'react'

const SectionSeparator: React.FC = memo(
  () => {
    return <hr className="border-accent-2 mt-16 mb-8" />
  },
  () => true
)

export default SectionSeparator
