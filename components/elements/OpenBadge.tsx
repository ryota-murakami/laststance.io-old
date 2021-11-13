import React, { memo } from 'react'

const OpenBadge: React.FC = memo(
  () => (
    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
      Open
    </span>
  ),
  () => true
)
OpenBadge.displayName = 'OpenBadge'

export default OpenBadge
