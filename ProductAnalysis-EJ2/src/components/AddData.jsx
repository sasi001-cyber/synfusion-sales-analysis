import React, { useContext, useState } from 'react'

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent, NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';

import dataContext from "./controls"
import { Link ,useNavigate } from 'react-router-dom';
     
function AddData() {
  const navigate=useNavigate()
    const [newData, setNewData] = useState({
        name: '',
        price: 0,
        stock: 0,
        category: '',
        salesLastMonth: 0,
        rating: 0,
      });
       const {gridData,setGridData}=useContext(dataContext)
    
      function handleInputChange(name,args) {
        
          setNewData(
            (prev) => ({
            ...prev,
            [name]: args.value,})
    
          )
      }
    
    function handleSave() {
      // Generate a unique ID for the new item (or use another method if needed)
      let newItem;
      if(!newData.name==""){
         newItem = {
        ...newData,
        id: gridData.length + 1, // Assuming gridData has no duplicate IDs
      };
      }
      else{
        alert("Enter The data!!!!")
        window.location.href="/new-data"
        
      }
      
      // Update gridData by appending the new item
      setGridData([...gridData, newItem]);
      // Reset input fields after saving
      setNewData({
        name: '',
        price: 0,
        stock: 0,
        category: '',
        salesLastMonth: 0,
        rating: 0,
      });
    }
    
  return (
    <>
    <h1 style={{textAlign:'center',color:"white"}}>Synfusion TextComponent And NumericTextComponent</h1>
    <div className='grid_container'>
        <h3>Add New Product</h3>
              <div >
                <TextBoxComponent placeholder="Product Name" value={newData.name}  change={(args)=>handleInputChange('name',args)} floatLabelType="Auto" />
                <NumericTextBoxComponent decimals={0} placeholder="Price" value={newData.price} change={(args)=>handleInputChange('price',args)} floatLabelType="Auto" style={{ marginLeft: '10px' }} />
                <NumericTextBoxComponent placeholder="Stock" value={newData.stock} change={(args)=>handleInputChange('stock',args)} floatLabelType="Auto" style={{ marginLeft: '10px' }} />
                <TextBoxComponent placeholder="Category"  value={newData.category} change={(args)=>handleInputChange('category',args)} floatLabelType="Auto" style={{ marginLeft: '10px' }} />
                <NumericTextBoxComponent placeholder="Sales Last Month" value={newData.salesLastMonth} change={(args)=>handleInputChange('salesLastMonth',args)} floatLabelType="Auto" style={{ marginLeft: '10px' }} />
                <NumericTextBoxComponent placeholder="Rating" value={newData.rating}  change={(args)=>handleInputChange('rating',args)} floatLabelType="Auto" style={{ marginLeft: '10px' }} />
              <Link to={"/"}>  <ButtonComponent onClick={handleSave} style={{ marginLeft: '10px' }}>Save</ButtonComponent></Link>
              </div>
    </div>
    </>
    
  )
}

export default AddData