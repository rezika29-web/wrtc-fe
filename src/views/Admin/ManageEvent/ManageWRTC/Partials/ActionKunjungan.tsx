import { LinkButton } from 'components/Buttons'
import React from 'react'

function ActionKunjungan() {
  return (
    <div className="flex justify-end pt-5">
      <LinkButton
        classType="primary"
        className="h-10 px-8"
        href="/admin/manage-event/we-run-the-city/add-kunjungan"
      >
        Create new
      </LinkButton>
    </div>
  )
}

export default ActionKunjungan
