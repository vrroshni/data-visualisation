import React, { useState } from 'react'
import ShowCharts from './ShowCharts'
import { data, data1, options1, options2, options3, options4 } from '../../utils/data';
import { ChartMenu } from '../../utils/menu';



/**
 * IndividualChart Component
 *
 * The IndividualChart component displays a single chart type selected by the user.
 * It provides a menu to switch between different chart types.
 */
const IndividualChart = () => {

  // to manage the selected chart type
  const [type, setType] = useState('bar')
  const [options, setOptions] = useState(options1)
  const [datas, setData] = useState(data)


  //function to change the option and type
  const setOptionsType = (chartType) => {
    setType(chartType);
    switch (chartType) {
      case 'bar':
        {
          setData(data)
          setOptions(options1);
          break;
        }

      case 'line':
        {
          setData(data)
          setOptions(options2);
          break;
        }

      case 'pie':
        {
          setData(data1)
          setOptions(options3);
          break;
        }
     
      case 'doughnut':
        {
          setData(data1)
          setOptions(options4);
          break;
        }
      default:
        console.error('Invalid chart type');
    }
  };

  return (
    <div className='flex w-full justify-center items-center'>
      <div className='grid grid-cols-1  w-full  justify-center md:w-auto gap-8 items-center h-auto py-12'>

        {/* Display chart type menu for mobile */}
        <ChartMenu selectedChartType={type} classnames={" md:hidden  md:h-16  w-full flex "} onChartTypeChange={setOptionsType} />

        {/* Display the selected chart */}
        <ShowCharts data={datas} chartType={type} chartOptions={options} all={false} />

        {/* Display chart type menu for desktop */}
        <ChartMenu selectedChartType={type} onChartTypeChange={setOptionsType} />
      </div>
    </div>
  )
}

export default IndividualChart