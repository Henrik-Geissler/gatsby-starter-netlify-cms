import React from 'react'
import ActionForm from './ActionForm'
const ActionBar = ({ interactions, buttonsActive }) => (
  <>
    <ActionForm
      variant="success"
      title="Teilnahme bestätigt"
      description="soso"
    >
      <p>long description</p>
    </ActionForm>
    <ActionForm variant="danger" title="Absage und Storno" description="soso">
      <p>long description</p>
    </ActionForm>
    <ActionForm
      variant="warning"
      title="Kontaktaufnahme gescheitert"
      description="soso"
    >
      <p>long description</p>
    </ActionForm>
    <ActionForm variant="secondary" title="Umbuchen" description="soso">
      <p>long description</p>
    </ActionForm>
    <ActionForm
      variant="secondary"
      title="Kann sich nicht entscheiden"
      description="soso"
    >
      <p>long description</p>
    </ActionForm>
  </>
)

export default ActionBar
