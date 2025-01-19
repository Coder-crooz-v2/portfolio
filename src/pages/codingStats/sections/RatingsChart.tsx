import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
} from 'chart.js';
import { contests } from '../data/data';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const RatingsChart: React.FC = () => {
  console.log(contests.userContestRankingHistory.filter((contest: Contest) => contest.attended));
  // Chart data
  interface Contest {
    attended: boolean;
    rating: number;
    contest: {title: string};
    ranking: number;
    // Add other properties of the contest if needed
  }

  interface Data {
    labels: string[];
    datasets: Dataset[];
  }

  interface Dataset {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
    tension: number;
    pointBackgroundColor: string;
    pointBorderColor: string;
    pointHoverRadius: number;
  }

  const contestsAttended: Contest[] = contests.userContestRankingHistory.filter((contest: Contest) => contest.attended)
  const data: Data = {
    labels: Array.from(contestsAttended.map((contest: Contest) => contest.contest.title)),
    datasets: [
      {
        label: 'Rating',
        data: contestsAttended.map((contest: Contest) => Math.floor(contest.rating)),
        borderColor: 'rgb(132, 132, 255)', // Line color
        backgroundColor: 'rgb(132, 132, 255, 0.2)', // Gradient fill
        fill: true,
        tension: 0.4, // Smooth curves
        pointBackgroundColor: 'white',
        pointBorderColor: 'transparent',
        pointHoverRadius: 5,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    interaction: {
      mode: 'nearest' as const,
      intersect: false,
    },
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        ticks: { display: false },
        grid: { display: false },
      },
      y: {
        ticks: { color: 'rgb(156 163 175)' },
        grid: { color: 'rgba(255,255,255,0.2)' },
      },
    },
  };

  return (
    <div className='max-h-fit row-start-2 row-end-4 col-start-2 col-end-4 bg-[var(--color-card-background)] p-4 rounded-[10px]'>
      <div className='flex justify-start gap-4 my-2 mb-4 px-4'>
        <button className='bg-[#333] text-white hover:bg-gray-200 hover:text-gray-800 transition-all px-4 py-2 rounded-[10px]'>
          Leetcode
        </button>
        <button className='bg-[#333] text-white hover:bg-gray-200 hover:text-gray-800 transition-all px-4 py-2 rounded-[10px]'>
          Codeforces
        </button>
        <button className='bg-[#333] text-white hover:bg-gray-200 hover:text-gray-800 transition-all px-4 py-2 rounded-[10px]'>
          CodeChef
        </button >
      </div>
      <div style={{ textAlign: 'center', color: '#fff', marginTop: '10px' }}>
      <p className='flex justify-between mb-5 items-center'>
        <div className='text-gray-400'>{
        "Rating: " + Math.floor(contestsAttended[contestsAttended.length - 1].rating)
        }</div>
        <div className='text-gray-400'>
        {
          contestsAttended[contestsAttended.length - 1].contest.title
        }
        </div>
        <div className='text-gray-400'>{
        "Rank: " + contestsAttended[contestsAttended.length - 1].ranking
        }</div>
      </p>
      </div>
      <Line className='max-h-fit' data={data} options={options} />
    </div>
  );
};

export default RatingsChart;
