import { Paper, Typography } from '@mui/material'
import React from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import { selectSalesTrendData } from '../../redux/kpi/sales-trend-kpi/sales-trend.selector'

interface IApexOptions {
  xaxis?: any
  yaxis?: any
  stroke?: any
}

const SalesTrend: React.FC = (): JSX.Element => {
  const kpiData = useSelector(selectSalesTrendData)
  const options: IApexOptions = {
    xaxis: {
      categories: kpiData?.labels,
    },
    yaxis: {
      show: true,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
  }

  const series: any = [
    {
      name: 'Sales',
      data: kpiData?.series,
    },
  ]

  return (
    <>
      <Paper variant="outlined" sx={{ p: '25px', borderRadius: '25px' }}>
        <Typography variant="h2" sx={{ fontSize: '20px', pb: '15px' }}>
          Sales Trend
        </Typography>

        <Chart
          options={options}
          series={series}
          style={{ paddingTop: '15px' }}
        />
      </Paper>
    </>
  )
}

export default SalesTrend
