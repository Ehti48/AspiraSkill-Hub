import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Enrolled Students',
      data: [0, 0, 0, 0, 0, 0, 0, 2, 64, 16, 0, 0],
      backgroundColor: '#3282c4',
    },
    {
      label: 'Active Students',
      data: [0, 0, 0, 0, 0, 0, 0, 2, 56, 15, 0, 0],
      backgroundColor: '#6aaa43',
    },
    {
      label: 'Got Job Students',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      backgroundColor: '#ff6636',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const MyChart = () => {
  return (
    <div style={{ width: '95%', height: '500px', padding: '5px' }}>
      <Bar style={{padding: '1px'}} data={data} options={options} />
    </div>
  );
};

export default MyChart;