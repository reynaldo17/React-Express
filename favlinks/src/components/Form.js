import { useState } from 'react'
import './stylesheet.css'

const Form = ({handleSubmit}) => {

  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  
  const handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
    const{ name, value } = event.target
    if (name === 'name') {
      setName(value)
    } else if (name === 'url') {
      setUrl(value)
    }
  }

  function onFormSubmit(event) {
    // to prevent page reload on form submit
    event.preventDefault()
    handleSubmit({ name , url })
    setName('')
    setUrl('')
    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        Name:
      <input type="text" name="name" value={name} onChange={handleChange} /><br/>
      </label>
      <label>
        URL:
      <input type="text" name="url" value={url} onChange={handleChange} /><br/>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
