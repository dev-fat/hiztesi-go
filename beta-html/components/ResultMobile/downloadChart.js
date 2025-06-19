import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

import Chart from 'react-apexcharts'

export default function DownloadChart() {
  const series = [{
    name: 'series1',
    data: [0, 3, 5, 7, 3, 11, 0]
    }];
  const options = {
    chart: {
      height: 120,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    labels: {
      show: false
    },
    axisBorder: {
        show: false
    },
    axisTicks: {
        show: false
    },    
    stroke: {
      width: 1
    },    
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.45,
        opacityTo: 0
      }
    },    
    colors: ['#1afffc'],
    crosshairs: {
        show: false,
        position: 'back',
        stroke: {
            color: '#b6b6b6',
            width: 1,
            dashArray: 0,
        },
    },    
    tooltip: {
        enabled: false,
        offsetX: 0,
    }
  };

  return (
    <div className="mobile-chart">
      {window !== undefined &&
        <Chart options={options} series={series} type="area" height={120} />
      }
      <div className="text">Kullanılan Data: 34,2 MB</div>
    </div>
  )
}
