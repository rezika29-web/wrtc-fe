import { Collapse } from 'antd'
import React, { useState } from 'react'
import ArrowDownIcon from 'components/Icons/ArrowDownIcon'
import EllipseIcon from 'components/Icons/EllipseIcon'
import Text from '../../../../components/Text'

const { Panel } = Collapse

function GeneralQuestions(props) {
  const { question, answer, panelKey } = props
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Collapse
      bordered={false}
      onChange={toggleCollapse}
      activeKey={isOpen ? panelKey : ''}
      className="md:shadow-md shadow-sm mb-6"
    >
      <Panel
        showArrow={false}
        key={panelKey}
        header={
          <div className="flex justify-between items-center">
            <span className="flex gap-x-6 items-center">
              <EllipseIcon className="text-primary opacity-35" />
              <Text
                className="text-lg text-inter font-semibold"
                style={{ color: '#616161' }}
              >
                {question}
              </Text>
            </span>
            <ArrowDownIcon className="text-primary" />
          </div>
        }
        className="px-6 py-2"
      >
        <div className="pt-6 pb-8 px-9">
          <Text
            className="text-sm text-inter font-normal"
            style={{ color: '#616161' }}
          >
            {answer}
          </Text>
        </div>
      </Panel>
    </Collapse>
  )
}

export default GeneralQuestions
