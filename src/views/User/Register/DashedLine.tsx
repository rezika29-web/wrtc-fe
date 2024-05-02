interface DashedLineProps {
  text: string
}
// eslint-disable-next-line react/function-component-definition
function DashedLine({ text }) {
  return (
    <div className="dashed-line-container">
      <hr className="dashed-line" />
      <span className="text-in-line" style={{ color: '#616161' }}>
        {text}
      </span>
      <hr className="dashed-line" />
    </div>
  )
}
export default DashedLine
