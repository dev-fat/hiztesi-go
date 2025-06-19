import Head from 'next/head'
import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, CartesianAxis
} from 'recharts';

export default function HistoryChart() {
  const data = [
    {
      name: '16.04.2018 13:04', download: 20, upload: 15,
    },
    {
      name: '16.05.2018 13:04', download: 15, upload: 10,
    },
    {
      name: '16.06.2018 13:04', download: 11, upload: 7,
    },
    {
      name: '16.07.2018 13:04', download: 24, upload: 6,
    },
    {
      name: '16.08.2018 13:04', download: 13, upload: 4,
    },
    {
      name: '16.09.2018 13:04', download: 25, upload: 9,
    },
    {
      name: '16.10.2018 13:04', download: 17, upload: 13,
    },
    {
      name: '16.11.2018 13:04', download: 45, upload: 25,
    },
    {
      name: '16.12.2018 13:04', download: 23, upload: 18,
    }, 
    {
      name: '16.04.2018 13:04', download: 20, upload: 15,
    },
    {
      name: '16.05.2018 13:04', download: 15, upload: 10,
    },
    {
      name: '16.06.2018 13:04', download: 11, upload: 7,
    },
    {
      name: '16.07.2018 13:04', download: 24, upload: 6,
    },
    {
      name: '16.08.2018 13:04', download: 13, upload: 4,
    },
    {
      name: '16.09.2018 13:04', download: 25, upload: 9,
    },
    {
      name: '16.10.2018 13:04', download: 17, upload: 13,
    },
    {
      name: '16.11.2018 13:04', download: 45, upload: 25,
    },
    {
      name: '16.12.2018 13:04', download: 23, upload: 18,
    }, 
    {
      name: '16.12.2018 13:04', download: 23, upload: 0,
    },     
  ];

  return (
    <div className="chart-area">
      <div className="chart-label">Mbps</div>
      <a href="#" className="export">
        <FormattedMessage id="export" />
      </a>
      <ResponsiveContainer width={'99%'} height={300}>
        <LineChart width={1240} height={300} data={data} >
         <YAxis width={30} tickSize={10} />
         <XAxis dataKey="name" type="category" />
         <CartesianGrid strokeDasharray="3 3"  />
         <CartesianAxis />
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="download" stroke="#1afffc" activeDot={{r: 8}}/>
         <Line type="monotone" dataKey="upload" stroke="#bf71ff" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
