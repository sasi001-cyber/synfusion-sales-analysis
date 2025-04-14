import React, { useContext, useState } from 'react'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import dataContext from "./controls"
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent, NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';

import {  Link } from 'react-router-dom';

function ImageEditor() {
  const {gridData,setGridData}=useContext(dataContext)
  

  return (
    <>
  <h1 style={{textAlign:"center",color:"white"}}>Data Grid using Synfusion EJ2</h1>
    <div className='grid_container'>
     <div style={{ padding: '20px' }}>

 <div>
  <Link  to={"/new-data"} ><ButtonComponent  style={{position:"relative",left:0}}>New Entry +</ButtonComponent></Link> 
  </div>    
      <h2>Product Data</h2>
      <GridComponent dataSource={gridData} allowPaging={true}>
        <ColumnsDirective>
          <ColumnDirective field='name' headerText='Product' />
          <ColumnDirective field='price' headerText='Price' />
          <ColumnDirective field='stock' headerText='Stock' />
          <ColumnDirective field='category' headerText='Category' />
          <ColumnDirective field='salesLastMonth' headerText='Sales Last Month' />
          <ColumnDirective field='rating' headerText='Rating' />
        </ColumnsDirective>
      </GridComponent>
      
      <Link to={"/chart-visualize"} className='button'>
      <ButtonComponent>Visualize</ButtonComponent>
      </Link>  
      
    </div>
    </div>
    </>
  )
}

export default ImageEditor