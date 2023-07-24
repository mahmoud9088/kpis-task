import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { VectorMap } from '@react-jvectormap/core'
import { worldMill } from '@react-jvectormap/world'
import { selectjVectorMapData } from '../../redux/kpi/sales-Per-region-kpi/sales-per-region.selector'
import 'jvectormap-next/jquery-jvectormap.css'
import { ISeries } from '@react-jvectormap/core/dist/types'

const regionStyle = {
  initial: {
    fill: '#e4e4e4',
    'fill-opacity': 0.9,
    stroke: 'none',
    'stroke-width': 0,
    'stroke-opacity': 0,
  },
}

const SalesByRegionKpi: React.FC = (): JSX.Element => {
  const jVectorMapData = useSelector(selectjVectorMapData)

  const series: ISeries = {
    regions: [
      {
        attribute: 'fill',
        values: jVectorMapData,
        scale: ['#6E6EF0', '#000099'],
        normalizeFunction: 'polynomial',
      },
    ],
  }

  return (
    <Paper variant="outlined" sx={{ p: '25px', borderRadius: '25px' }}>
      <Typography variant="h2" sx={{ fontSize: '20px', pb: '15px' }}>
        Sales By Region
      </Typography>

      <Box style={{ width: '100%', height: '400px' }}>
        {Object.keys(jVectorMapData).length > 0 && (
          <VectorMap
            map={worldMill}
            backgroundColor="transparent"
            zoomOnScroll={false}
            regionStyle={regionStyle}
            series={series}
            regionsSelectable={false}
            onRegionTipShow={function (
              _: null,
              label: any,
              code: string,
              ...props: any[]
            ) {
              const countrySales: number = (jVectorMapData[code] as number) || 0
              label.html(
                '<div style="background-color: white; border: 1px solid white; outline: 10px solid white; border-radius: 5px; min-height: 70px; width: 150px; color: black"; padding-left: 10px>' +
                  '<p>' +
                  '<b>' +
                  label.html() +
                  ' ' +
                  code +
                  '</b>' +
                  '</p>' +
                  '<p>' +
                  'Count: ' +
                  '<b>' +
                  countrySales +
                  '</b>' +
                  '</p>' +
                  '</div>'
              )
            }}
          />
        )}
      </Box>
    </Paper>
  )
}

export default SalesByRegionKpi
