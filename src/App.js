import { useState } from 'react';
import './App.css';
import DisplayData from './component/DIsplayData';
import Form from './component/Form';
const dummyData = [
  {
    id: 1,
    firstName: 'kshitij',
    lastName: 'gupta',
    email: 'kshitij376@gmail.com',
    password: 546
  }
]

function App() {
  var [data,setData] = useState(dummyData);
  const[dataToEdit,setDataToEdit] = useState();
  const [dataToUpdate, setDataToUpdate] = useState();
  const getFormData = (formData) => {
     //console.log("data is ",formData)
    const updatedData = [ ...data,formData];
    console.log("data is ",updatedData);

    setData(updatedData);
  }
  const getEditData = (editData) => {
    setDataToEdit(editData);
  }
  // console.log(dataToEdit);
  const getUpdatedData = (data) => {
    console.log(data);
    setDataToUpdate(data)
  }

  const updatedData = (update) => {
    setData(update);
  }
  return (
    <div className="App">
      <h1>Welcome to the .....</h1>
      <Form 
        takeFormData = {getFormData}
        sendEditData = {dataToEdit}
        takeUpdatedData = {getUpdatedData}
      />
      <DisplayData 
      takeEditData = {getEditData}
      allData = {data}
      sendUpdatedData = {dataToUpdate}
      takeDataUpdate = {updatedData}
      />
      
    </div>
  );
}

export default App;
