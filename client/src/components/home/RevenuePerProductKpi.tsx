import { Paper, Typography } from '@mui/material'
import React from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import { selectRevenuePerProductData } from '../../redux/kpi/revenue-per-product-kpi/revenue-per-product.selector'

interface IApexOptions {
  chart?: any
  xaxis?: any
  yaxis?: any
  stroke?: any
}

type IApexSeries = any[]

const RevenuePerProductKpi: React.FC = (): JSX.Element => {
  const kpiData = useSelector(selectRevenuePerProductData)

  const options: IApexOptions = {
    xaxis: {
      categories: kpiData.labels,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
  }

  const series: IApexSeries = [
    {
      name: 'Revenue per product',
      data: kpiData.series,
    },
  ]

  return (
    <>
      <Paper variant="outlined" sx={{ p: '25px', borderRadius: '25px' }}>
        <Typography variant="h2" sx={{ fontSize: '20px', pb: '15px' }}>
          Revenue per product
        </Typography>

        <Chart
          type="bar"
          options={options}
          series={series}
          style={{ paddingTop: '15px' }}
        />
      </Paper>
    </>
  )
}

export default RevenuePerProductKpi
