import React, { Component, Fragment } from 'react'
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";


export class AccountSetup extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    
    constructor(props) {
        super(props);
        this.state = { value: "coconut" };
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        let d = this.state.value
      }
      //   handleChange(event) {
      //     this.setState({ value: event.target.value });
      //   }
      handleSubmit(event) {
     
        alert("Your favorite flavor is: " + this.state.value);
        event.preventDefault();
      }
    
      handleChange = event => {
        this.setState({ value: event.target.value });
      };

      
    render() {
                    const { values, inputChange} = this.props;
                    const got = this.state.value
                    const samplecities = [
                        { title: "Adelaide" },
                        { title: "Melbourne" },
                        { title: "Brisbane" },
                        { title: "Canberra" },
                        { title: "Darwin" },
                        { title: "GoldCoast" },
                        { title: "NewYork" },
                        { title: "London" }
                      ];
                    return (
                        <>
                    
                <div className="form-container">
                <h1 className="mb-5">Contact Form</h1>
                <div className="form-group">
                    <input type="hidden" className="form-control" name="ID" value="357"/>
                       { /* </input>onClick={this.setInputHidden.bind(this,"UserSelecedText")} value={values.name}*/}
                </div>
                <div className="form-group">
                    <label htmlFor="name">Contact Name</label>
                    <input type="text" className="form-control" name="name" onChange={inputChange('name')} value={values.name} />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Work Phone</label>
                    <input type="number" className="form-control" name="phone" onChange={inputChange('phone')} value={values.phone} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" className="form-control" name="email" onChange={inputChange('email')} value={values.email} />
                </div>
                
                <label htmlFor="Contact Location">Contact Location</label>
                <div className="form-group">
                <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={samplecities}
                disableCloseOnSelect
                getOptionLabel={option => option.title}
                renderOption={(option, { selected }) => (
                    <React.Fragment>{option.title}</React.Fragment>
                )}
                renderInput={params => (
                    <TextField name="location"
                    {...params}
                    variant="outlined"
                    onChange={inputChange('location')} value={values.selected}
                    />
                )}
                />
                </div>
                <div className="form-group">
                <label htmlFor="Contact Type">Contact Type</label>
                <select name ="drop" className="form-control" value={this.state.value} onChange={this.handleChange} value = {values.drop}>
                <option value="Administrative Contact">Types of Contacts</option>
            <option value="Administrative Contact">Administrative Contact</option>
            <option value="Billing Contact">Billing Contact</option>
            <option value="HR Contact">HR Contact</option>
            <option value="Recruitment Contact">Recruitment Contact</option>
          </select>
                <div>
                </div>
                </div>
                <br />
                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.continue}>Review</button>
                </div>
            </div>
            </>
        )
    } 
}
export default AccountSetup
