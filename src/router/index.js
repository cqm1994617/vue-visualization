import App from '../App'
import Home from '../pages/home'
import D3 from '../pages/d3'
import Three from '../pages/three'
import Echarts from '../pages/echarts'
import HighCharts from '../pages/highcharts'
import NotFound from '../pages/notFound'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/d3',
        component: D3
    },
    {
        path: '/three',
        component: Three
    },
    {
        path: '/echarts',
        component: Echarts
    },
    {
        path: '/highCharts',
        component: HighCharts
    },
    {
        path: '*',
        component: NotFound
    }
]

export default routes
