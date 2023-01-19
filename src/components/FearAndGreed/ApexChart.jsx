import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

const ApexChart = ({ history }) => {


    const [historyValues, setHistoryValues] = useState([])
    const [options, setOptions] = useState({
        series: [{
            name: "test",
            data: [],
        }],
        options: {
            chart: {
                height: '450px',
                type: 'line',
                foreColor: '#fff',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: '10 Day Fear and Greed Index',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#000000'], // takes an array which will be repeated on columns
                },
            },
            xaxis: {
                categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            }
        }
    })


    useEffect(() => {
        const separateHistory = async () => {
            const values = history.map(item => Number(item.value))
            const sers = { name: '10 Day Fear and Greed Index', data: values }
            setHistoryValues(values)
            setOptions({
                ...options,
                series: [sers],
            })
        }
        separateHistory()
    }, [])



    return (
        <div id="chart">
            <Chart options={options.options} series={options.series} type="line" height={350} />
        </div>
    )

}

export default ApexChart