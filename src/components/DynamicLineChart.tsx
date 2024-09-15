'use client';  // Add this at the top of the file

import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface DynamicLineChartProps {
  data: Array<{
    name: string;
    Total: number;
    Target: number;
  }>
}

const DynamicLineChart: React.FC<DynamicLineChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Total" stroke="#8884d8" />
        <Line type="monotone" dataKey="Target" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default DynamicLineChart