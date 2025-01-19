import { FaMedal, FaStar } from 'react-icons/fa';
import { IoIosPodium } from 'react-icons/io';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

const Timeline = () => {
  return (
    <VerticalTimeline lineColor='var(--color-primary)'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'var(--color-timeline-background)', color: 'var(--color-gray)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="4th January, 2025"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoIosPodium />}
  >
    <h3 className="vertical-timeline-element-title">Shaastra programming contest</h3>
    <h4 className="vertical-timeline-element-subtitle">IIT Madras</h4>
    <p>
      Qualified for the finals of the contest and was in the top 1000 from among 20000+ contestants
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'var(--color-timeline-background)', color: 'var(--color-gray)' }}
    date="18th December 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaStar />}
  >
    <h3 className="vertical-timeline-element-title">Peak rating achieved - 1754, 3*</h3>
    <h4 className="vertical-timeline-element-subtitle">CodeChef</h4>
    <p>
      Achieved a peak rating of 1754 in Starters 165 and is currently a 3* coder on CodeChef
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'var(--color-timeline-background)', color: 'var(--color-gray)' }}
    date="26th October, 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaStar />}
  >
    <h3 className="vertical-timeline-element-title">Peak rating achieved - 1189</h3>
    <h4 className="vertical-timeline-element-subtitle">Codeforces</h4>
    <p>
      Achieved a peak rating of 1189 in Codeforces round 982 (Div. 2)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'var(--color-timeline-background)', color: 'var(--color-gray)' }}
    date="31st August, 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoIosPodium />}
  >
    <h3 className="vertical-timeline-element-title">Innoquest 2024</h3>
    <h4 className="vertical-timeline-element-subtitle">Gurugram, India</h4>
    <p>
      Qualified for the finals of the Innoquest ideathon organised by Microsoft Azure community with 19 other teams from all over India
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'var(--color-timeline-background)', color: 'var(--color-gray)' }}
    date="September 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaMedal/>}
  >
    <h3 className="vertical-timeline-element-title">All India Rank - 3459</h3>
    <h4 className="vertical-timeline-element-subtitle">JEE advanced 2022</h4>
    <p>
      Achieved an all India rank of 3459 in JEE advanced, 2022 among 1,50,000+ candidates 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'var(--color-timeline-background)', color: 'var(--color-gray)' }}
    date="July 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaMedal />}
  >
    <h3 className="vertical-timeline-element-title">All India Rank - 4583</h3>
    <h4 className="vertical-timeline-element-subtitle">JEE Main 2022</h4>
    <p>
      Achieved an all India rank of 4583 in JEE Main, 2022 among 9,00,000+ candidates (top 0.5 percentile)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FaStar />}
  />
    </VerticalTimeline>
  )
}

export default Timeline
