import React from 'react'

function EllipseIcon(props: { className: string }) {
  const { className } = props
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="6" cy="6" r="6" fill="currentColor" />
    </svg>
  )
}

export default EllipseIcon
