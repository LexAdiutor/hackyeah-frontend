import React from 'react'
import Form from '../components/Form'

const Test = () => {
  return (
    <div>
        <Form dataUrl={`${import.meta.env.VITE_API_BACKEND_URL}/templateForm`} onFormChange={console.log}/>
    </div>
  )
}

export default Test