import { Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import { selectSalesByCategoryData } from '../../redux/kpi/sales-by-category-kpi/sales-by-category.selector'

const SalesByCategoryKpi: React.FC = (): JSX.Element => {
  const kpiData = useSelector(selectSalesByCategoryData)

  const options: any = {
    chart: {
      width: 340,
      type: 'pie',
    },
    labels: kpiData?.labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    legend: {
      position: 'bottom',
    },
    // colors: ["#000099", "#00FFFF"],
  }

  const series: any = kpiData?.series

  return (
    <>
      <Paper variant="outlined" sx={{ p: '25px', borderRadius: '25px' }}>
        <Typography variant="h2" sx={{ fontSize: '20px', pb: '15px' }}>
          Sales By Category
        </Typography>
        {/* <Divider variant="fullWidth" /> */}

        <Chart
          type={'pie'}
          options={options}
          series={series}
          style={{ paddingTop: '15px' }}
        />
      </Paper>
    </>
  )
}

export default SalesByCategoryKpi
