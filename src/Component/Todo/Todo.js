import React, {useState} from 'react'
import './Todo.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const Todo = () => {
    const [addValue, setAddValue] = useState("");
    const [data, setData] = useState([]);
    const handleAdd = () => {
        if (!addValue) {
            alert("Enter the value")
        }
        else {
            setData([...data, addValue]);
            setAddValue("")
        }
    }
    const handleRemove = (index) => {
        const remove=data.filter((item, indexItem) => indexItem !== index);
        setData(remove);
        
    }
  return (
      <>
          <div className='mt-5'>
              <div className='row'>
                  <div className='col-md-5'>
                      <div className='d-flex gap-2 align-items-center'>
                          <input type='text' className='form-control' placeholder='Enter the value' onChange={(e) => setAddValue(e.target.value)} value={addValue}/>
                      <button className='btn btn-sm btn-primary mt-2' onClick={()=>handleAdd()}>ADD</button>
                      </div>
                 </div>
                  <div className='col-md-5'>
                      <ul>{
                          
                          data.map((currItem, index) => {
                              return (
                                  <>
                                      <li>
                                          {currItem} <button className='btn btn-sm btn-danger' onClick={()=>handleRemove(index)}>REMOVE</button>
                                      </li>
                                  </>
                              )
                          })
                      }
                          
                      </ul>
                  </div>
              </div>
      </div>
      
      
      
      
      
      
      
      
      </>
  )
}

export default Todo