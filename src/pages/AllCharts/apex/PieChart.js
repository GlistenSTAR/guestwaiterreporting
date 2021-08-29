import React from "react"
import ReactApexChart from "react-apexcharts"

const PieChart = () => {
  const series = [44, 55, 41, 17, 15]
  const options = {
    labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
    colors: ["#34c38f", "#5b73e8", "#f1b44c", "#50a5f1", "#f46a6a"],
    legend: {
      show: !0,
      position: 'bottom',
      horizontalAlign: 'center',
      verticalAlign: 'middle',
      floating: !1,
      fontSize: '14px',
      offsetX: 0
    },
    responsive: [{
      breakpoint: 600,
      options: {
        chart: {
          height: 240
        },
        legend: {
          show: !1
        },
      }
    }]
  }

  return (
    <ReactApexChart options={options} series={series} type="pie" height="320" className="apex-charts" />
  )
}

export default PieChart
