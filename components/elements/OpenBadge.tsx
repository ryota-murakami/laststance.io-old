import React, { memo } from 'react'

const OpenBadge: React.FC = memo(
  () => (
    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
      Open
    </span>
  ),
  () => true
)
OpenBadge.displayName = 'OpenBadge'

export default OpenBadge
