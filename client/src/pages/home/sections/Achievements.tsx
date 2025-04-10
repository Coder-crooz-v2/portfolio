import { motion } from 'framer-motion'
import { FaMedal, FaStar, FaUser } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Achievements = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });
    return (
        <section id="achievements">
            <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="p-4 md:p-8 z-5"
        >
            <div className='flex flex-row gap-5 justify-start items-end'>
                <div className='w-[5px] bg-[var(--color-primary)] h-[64px]' ></div>
                <div className="text-7xl font-bold mr-10">Achievements</div>
                <FaMedal size={60} />
            </div>
        </motion.div>
        <VerticalTimeline lineColor='rgb(142, 142, 253)' className='mt-14'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(30, 30, 30)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="February, 2025"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                iconClassName='border-2 border-white'
                icon={<FaUser />}
            >
                <h3 className="vertical-timeline-element-title">CTRL+ALT+HACK</h3>
                <h4 className="vertical-timeline-element-subtitle">NSUT, New Delhi</h4>
                <p>
                    Qualified for the finals and was among the top 17 teams from 1200+ teams of the CTRL+ALT+HACK hackathon organised by Netaji Subhas University of Technology, New Delhi.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(30, 30, 30)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="January, 2025"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                iconClassName='border-2 border-white'
                icon={<FaUser />}
            >
                <h3 className="vertical-timeline-element-title">Shaastra programming contest</h3>
                <h4 className="vertical-timeline-element-subtitle">IIT Madras</h4>
                <p>
                    Qualified for the finals and was among the top 1000 contestants from 20000+ participants of the Shaastra programming contest organised by IIT Madras.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="December 18, 2024"
                iconClassName='border-2 border-white'
                contentStyle={{ background: 'rgb(30, 30, 30)' }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaUser />}
            >
                <h3 className="vertical-timeline-element-title">Peak rating achieved</h3>
                <h4 className="vertical-timeline-element-subtitle">CodeChef</h4>
                <p>
                    Achieved a peak rating of 1754 and is currently a 3-star on CodeChef.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="October 26, 2024"
                iconClassName='border-2 border-white'
                contentStyle={{ background: 'rgb(30, 30, 30)' }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaUser />}
            >
                <h3 className="vertical-timeline-element-title">Peak rating achieved</h3>
                <h4 className="vertical-timeline-element-subtitle">Codeforces</h4>
                <p>
                    Achieved a peak rating of 1189 in Codeforces round 982 (Div. 2)
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="August 31, 2024"
                iconClassName='border-2 border-white'
                contentStyle={{ background: 'rgb(30, 30, 30)' }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaUser />}
            >
                <h3 className="vertical-timeline-element-title">Finalist, Reskill Ideathon 2024</h3>
                <h4 className="vertical-timeline-element-subtitle">Microsoft office, Gurugram</h4>
                <p>
                    Qualified for the finals with 19 other participants from among teams from all over India of the Reskill Ideathon, 2024 organised by Microsoft Azure.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="September, 2022"
                iconClassName='border-2 border-white'
                contentStyle={{ background: 'rgb(30, 30, 30)' }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaUser />}
            >
                <h3 className="vertical-timeline-element-title">Rank holder</h3>
                <h4 className="vertical-timeline-element-subtitle">JEE Advanced, 2022</h4>
                <p>
                    Secured an All India Rank of 3459 in JEE Advanced 2022.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconClassName='border-2 border-white'
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<FaStar />}
            />
        </VerticalTimeline>
        </section>
    )
}

export default Achievements
