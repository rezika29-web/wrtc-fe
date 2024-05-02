import React from 'react'

function ArrowDownIcon(props: { className?: string }) {
  const { className } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.9999 9.16994C16.8126 8.98369 16.5591 8.87915 16.2949 8.87915C16.0308 8.87915 15.7773 8.98369 15.5899 9.16994L11.9999 12.7099L8.45995 9.16994C8.27259 8.98369 8.01913 8.87915 7.75495 8.87915C7.49076 8.87915 7.23731 8.98369 7.04995 9.16994C6.95622 9.26291 6.88183 9.37351 6.83106 9.49537C6.78029 9.61723 6.75415 9.74793 6.75415 9.87994C6.75415 10.012 6.78029 10.1427 6.83106 10.2645C6.88183 10.3864 6.95622 10.497 7.04995 10.5899L11.2899 14.8299C11.3829 14.9237 11.4935 14.9981 11.6154 15.0488C11.7372 15.0996 11.8679 15.1257 11.9999 15.1257C12.132 15.1257 12.2627 15.0996 12.3845 15.0488C12.5064 14.9981 12.617 14.9237 12.7099 14.8299L16.9999 10.5899C17.0937 10.497 17.1681 10.3864 17.2188 10.2645C17.2696 10.1427 17.2957 10.012 17.2957 9.87994C17.2957 9.74793 17.2696 9.61723 17.2188 9.49537C17.1681 9.37351 17.0937 9.26291 16.9999 9.16994Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default ArrowDownIcon
