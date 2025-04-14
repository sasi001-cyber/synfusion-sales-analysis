import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Inject, Category3D, ColumnSeries3D } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import dataContext from "./controls"
function Chart() {

    const {chart}=React.useContext(dataContext)

    return (
    <>
     <h1 style={{textAlign:'center',color:"white"}}>Synfusion EJ2 3D Chart </h1>
     <div className='char_container'>
        <h2>Product Data</h2>
        <Chart3DComponent id='charts'  primaryXAxis={{valueType:"Category"}}
        wallColor='transparent'
         enableRotation={true} rotation={7} tilt={10} depth={100} title='Sales Analysis'>
        <Inject services={[ColumnSeries3D, Category3D]} />
        <Chart3DSeriesCollectionDirective >
            <Chart3DSeriesDirective dataSource={chart} xName='x' yName='y' type='Column'>
            </Chart3DSeriesDirective>
        </Chart3DSeriesCollectionDirective>
    </Chart3DComponent>
      </div>
    </>
   )
}
;
export default Chart;
