import { useState } from 'react'
import Table from './Table';
import Form from './Form';


const LinkContainer = () => {

  const[linkData, setLinkData] = useState([])

  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
    setLinkData(linkData.filter((_, i) => i !== index))

  }

  const handleSubmit = (favLink) => {
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
            setLinkData([...linkData, favLink])

    }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      <h3>Add New</h3>
      <Table linkData={linkData} removeLink={handleRemove}/>
      <br />
      <Form handleSubmit={handleSubmit}/>
    </div>
  )
}

export default LinkContainer
