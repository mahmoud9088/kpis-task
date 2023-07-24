import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchRevenuePerProductStart } from '../redux/kpi/revenue-per-product-kpi/revenue-per-product.action'
import { fetchSalesPerRegionStart } from '../redux/kpi/sales-Per-region-kpi/sales-per-region.action'
import { fetchSalesByCategoryStart } from '../redux/kpi/sales-by-category-kpi/sales-by-category.action'
import { fetchSalesTrendStart } from '../redux/kpi/sales-trend-kpi/sales-trend.action'
import HomeMain from '../components/home'

const Home: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRevenuePerProductStart())
    dispatch(fetchSalesPerRegionStart())
    dispatch(fetchSalesByCategoryStart())
    dispatch(fetchSalesTrendStart())
  }, [])
  return (
    <>
      <HomeMain />
    </>
  )
}

export default Home
