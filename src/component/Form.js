import "./Form.css"
import { useState, useEffect} from "react"

const Form = (props) => { 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [add, setAdd] = useState('Add');
    const [id, setId] = useState(Math.random().toString());

    const firstNameHandler = (e) => {
        setFirstName(e.target.value);
    }
    const lastNameHandler = (e) => {
        setLastName(e.target.value);
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }
    const submitForm = (e) => {
        
        e.preventDefault();
        // console.log(firstName);
        // console.log(lastName);
        // console.log(email);
        // console.log(password);
    if(firstName === ''){
        alert('Please enter first name');
        return false;
    }
    if(lastName === ''){
        alert('Please enter last name');
        return false;
    }
    if(email === ''){
        alert('Please enter email');
        return false;
    }
    if(password === ''){
        alert('Please enter password');
        return false;
    }
    if(add === 'Add'){
        // setId(Math.random().toString())
        const newId = Math.random().toString()
        const formData = {
            id : newId,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
        console.log(formData)
        
        props.takeFormData(formData);
        

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    } else{
        const updatedData = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        console.log(updatedData);
        props.takeUpdatedData(updatedData);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setAdd('Add')
    }     
    }

    useEffect(() => {
        if (props.sendEditData) {
          // Populate form fields with edit data when in update mode
          setFirstName(props.sendEditData.firstName);
          setLastName(props.sendEditData.lastName);
          setEmail(props.sendEditData.email);
          setPassword(props.sendEditData.password);
          setAdd("Update");
          setId(props.sendEditData.id)
        } else {
          // Reset the form fields when not in update mode
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setAdd("Add");
          setId('');
        }
      }, [props.sendEditData]);

    // setFirstName(getEditData)


    return(
        <div className="container">
            <div className="form-wrapper">
            <form onSubmit={submitForm}>
                <h2 style={{color: '#fff'}}>Registration Form</h2>
                <div className="input-field">
                    <input type="text" onChange={firstNameHandler} value={firstName} name="fname" placeholder="Enter your first name"/>
                </div>
                <div className="input-field">
                    <input type="text" onChange={lastNameHandler} value={lastName} name="lname" placeholder="Enter your last name"/>
                </div>
                <div className="input-field">
                    <input type="email" onChange={emailHandler} value={email} name="email" placeholder="Enter your email"/>
                </div>
                <div className="input-field">
                    <input type="text" onChange={passwordHandler} value={password} name="pass" placeholder="Enter your password"/>
                </div>
                <div className="btn-group">
                    <button>{add}</button>
                </div>
            </form>
        </div>
        </div>
    )
}
export default Form;