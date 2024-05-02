import React from 'react'

function ArrowRightIcon(props: { className?: string }) {
  const { className } = props

  return (
    <svg
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.4333 4.68333C10.3937 4.58103 10.3342 4.48758 10.2583 4.40833L6.09167 0.241658C6.01397 0.16396 5.92173 0.102326 5.82021 0.0602756C5.71869 0.0182253 5.60988 -0.00341797 5.5 -0.00341797C5.27808 -0.00341797 5.06525 0.0847387 4.90833 0.241658C4.83063 0.319357 4.769 0.411599 4.72695 0.513117C4.6849 0.614636 4.66326 0.723442 4.66326 0.833325C4.66326 1.05524 4.75141 1.26807 4.90833 1.42499L7.65833 4.16666H1.33333C1.11232 4.16666 0.900358 4.25446 0.744078 4.41074C0.587798 4.56702 0.5 4.77898 0.5 4.99999C0.5 5.22101 0.587798 5.43297 0.744078 5.58925C0.900358 5.74553 1.11232 5.83333 1.33333 5.83333H7.65833L4.90833 8.57499C4.83023 8.65246 4.76823 8.74463 4.72592 8.84618C4.68362 8.94773 4.66183 9.05665 4.66183 9.16666C4.66183 9.27667 4.68362 9.38559 4.72592 9.48714C4.76823 9.58869 4.83023 9.68086 4.90833 9.75832C4.9858 9.83643 5.07797 9.89843 5.17952 9.94073C5.28107 9.98304 5.38999 10.0048 5.5 10.0048C5.61001 10.0048 5.71893 9.98304 5.82048 9.94073C5.92203 9.89843 6.0142 9.83643 6.09167 9.75832L10.2583 5.59166C10.3342 5.51241 10.3937 5.41895 10.4333 5.31666C10.5167 5.11377 10.5167 4.88621 10.4333 4.68333Z"
        fill="white"
      />
    </svg>
  )
}

export default ArrowRightIcon