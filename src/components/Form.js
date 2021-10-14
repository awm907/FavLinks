import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {name : "" , URL: ""}
    }

    handleChange = event => {
        event.preventDefault()
        if (event.target.id == "input1"){
            this.setState({name:event.target.value}) 
        }
        else{
            this.setState({URL:event.target.value})
        }
        
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        if(this.state.name != "" && this.state.URL != ""){
            this.props.onSubmit({name: this.state.name, URL: this.state.URL})
            this.setState({name:"" , URL:""})
        }
        else{
            alert("Please provide both Name and URL!")
        }
        


    }

    render() {

        return(
            <form>    
                <label> Name </label>
                <input type="text" id="input1" value = {this.state.name} onChange = {this.handleChange} />
                <label> URL </label>
                <input type="text" id="input2" value = {this.state.URL}  onChange = {this.handleChange} />

                <button onClick={this.onFormSubmit}> Submit </button>                
            </form>
        )
    
    }
}

export default Form;
