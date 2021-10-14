import React from 'react'
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {favLinks:[]}


  }

  handleRemove = (index) => {
    this.setState({favLinks : this.state.favLinks.filter((ele, ind) => ind !== index  )})
  } 

  handleSubmit = (favLink) => {
    this.setState({favLinks : [...this.state.favLinks, favLink] } )
  }

  render() {
    return (
      
      <div className="container">
        <h1>My Favorite Links </h1>
        <p>Add a new url with a name and link to the table.</p>
        <Table linkData = {this.state.favLinks} removeLink = {this.handleRemove}/>
        
        
        <br />

        <h3>Add New</h3>
        <Form onSubmit = {this.handleSubmit} /> 
      </div>
     )
  }
}

export default LinkContainer
