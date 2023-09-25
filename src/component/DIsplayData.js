import { useEffect, useState } from "react";
import "./DisplayData.css";
const DisplayData = (props) => {
   const [data,setData] = useState([]);
   
//    const data = props.allData;

   const deleteData = (id,index) => {
    const result = window.confirm('Are you sure tou want to delete!')
    
    if(result){
        props.allData.splice(index,1);
        const updateData = data.filter((item) => item.id !== id)
        setData(updateData);
        // console.log("after deleting",data)
    }
  }
  
  const editData = (id,firstName,lastName,email,password) => {
    const editObj = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }
    props.takeEditData(editObj);
    // console.log(editObj);
  }

  useEffect(() => {
    
    // Create a new array that contains the updated data
    setData(props.allData)
    let updatedData = [...props.allData];
  
    if (props.sendUpdatedData) {
      // console.log(props.sendUpdatedData);
      // Find the index of the item to update
      const index = updatedData.findIndex(
        (item) => item.id === props.sendUpdatedData.id
      );
      console.log(index)
      if (index !== -1) {
        // Update the item at the specified index with the new data
        updatedData[index] = props.sendUpdatedData;
      }

  
    }
    props.takeDataUpdate(updatedData)
    setData(updatedData);
    // console.log(updatedData)
  
    // Update the component's data state with the updated data


  }, [props.allData]);
   

    return(
        <div className="container">
            <table  className="table">
               <thead>
               <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th colSpan={2}>Action</th>
                </tr>
               </thead>
               <tbody>
                {data.map((item,index) => (
                    <tr key={item.id}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td><button className="delete-btn" onClick={() => deleteData(item.id,index)} >Delete</button></td>
                    <td><button className="edit-btn" onClick={() => editData(item.id,item.firstName,item.lastName,item.email,item.password)}
                    >Edit</button></td>
                </tr>
                ))}
               </tbody>
            </table>
        </div>
    )
}
export default DisplayData;