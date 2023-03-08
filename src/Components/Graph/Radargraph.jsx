import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
)

export const data = {
  labels: ['Javascript', 'Html', 'Flinto', 'Vue Js', 'Sketch', 'Priciple', 'Css', 'Angular'],
  datasets: [
    {
      label: '# of Votes',
      data: [8, 9, 8, 9, 9, 8, 7, 9],
      backgroundColor: 'transparent',
      borderColor: 'blue',
      borderWidth: 2,
    },
  ],
}

const RadarGraph = () => {
  return <Radar data={data} />
}

export default RadarGraph
