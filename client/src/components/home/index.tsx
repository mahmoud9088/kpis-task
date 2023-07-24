import { Box, Grid, Stack, Typography } from '@mui/material'
import SalesByRegionKpi from './SalesByRegionKpi'
import SalesByCategoryKpi from './SalesByCategoryKpi'
import RevenuePerProductKpi from './RevenuePerProductKpi'
import SalesTrend from './SalesTrendKpi'
import React from 'react'

const HomeMain: React.FC = (): JSX.Element => {
  return (
    <>
      <Stack
        sx={{
          pt: '100px',
          m: {
            xs: '0 20px 100px 20px',
            md: '0 20px 100px 260px',
          },
          maxWidth: '100vw',
          overflow: 'hidden',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            mb: '20px',
          }}>
          <Typography sx={{ color: '#030355', fontSize: '30px' }}>
            Home Overview
          </Typography>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'right',
              fontWeight: '200',
              fontSize: '20px',
              color: '#343434',
            }}>
            hi Salman, Welcome Back
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <RevenuePerProductKpi />
          </Grid>

          <Grid item xs={12} md={7}>
            <SalesTrend />
          </Grid>
          <Grid item xs={12} md={5}>
            <SalesByCategoryKpi />
          </Grid>

          <Grid item xs={12}>
            <SalesByRegionKpi />
          </Grid>
        </Grid>
      </Stack>
    </>
  )
}

export default HomeMain
