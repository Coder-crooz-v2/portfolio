import { useEffect, useState } from 'react';
import { user } from '../data/data'
import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Title } from 'chart.js';
import { Tooltip } from 'chart.js';
import { Chart } from 'chart.js';

Chart.register(ArcElement, Tooltip, Title);

const QuestionsChart = () => {
    const [questionsCount, setQuestionsCount] = useState<{count: number, difficulty: string, submissions: number}[]>([]);
    const colorsDoughnut = ['#40E0D0', '#ffa700', 'red'];

    useEffect(() => {
        setQuestionsCount(user.matchedUser.submitStats.acSubmissionNum);
    }, [user.matchedUser.submitStats.acSubmissionNum, user.matchedUser.submitStats.acSubmissionNum[0].count]);
  return (
    <div className=" rounded-lg bg-[var(--color-card-background)] p-3 gap-5 justify-around flex flex-row col-start-3 col-end-6 row-span-1">
      {
        questionsCount.map((question, index) => (
        question.difficulty !== 'All' && <div className="flex flex-col gap-2">
            <Doughnut
            className='h-[100px]'
        key = {index}
        data={{
            labels: [
                'Accepted',
                'Not accepted',
            ],
            datasets: [{
            label: 'Questions',
            data: [question.count, user.allQuestionsCount[index].count - question.count],
            backgroundColor: [
                colorsDoughnut[index-1],
                'rgba(50, 50, 50)',
            ],
            borderColor: '#111',
            borderJoinStyle: 'round',
            borderWidth: 5,
            hoverOffset: 0
            }]
        }}/>
        <p className='m-auto text-gray-400'>{question.difficulty + ": " + question.count}</p>
        </div>
        ))
      }
    </div>
  )
}

export default QuestionsChart
