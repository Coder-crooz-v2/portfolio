import { Link } from 'react-router-dom';
import { user } from '../data/data'
import leetcode from '../../../assets/codingPlatforms/leetcode.png';
import cf from '../../../assets/codingPlatforms/cf.png';
import codechef from '../../../assets/codingPlatforms/codechef.png';

import { FaEnvelope, FaGithub, FaLink, FaLinkedin } from 'react-icons/fa';
import { IoLocation, IoSchool } from "react-icons/io5";

const ProfileCard = () => {
  console.log(user);
  return (
    <div className='col-span-1 row-span-3 rounded-lg bg-[var(--color-card-background)] text-gray-400 p-5 flex flex-col items-center'>
      <img className='my-6 h-[150px] w-[150px] rounded-full' src={user.matchedUser.profile.userAvatar} alt="Avatar" />
      <p className='text-2xl font-semibold'>Sounak Bhawal</p>
      <p className='text-lg text-blue-700 border-b-gray-600 border-b-2 w-full text-center pb-4'>{"@" + user.matchedUser.username}</p>
      <div className='w-full p-4 flex justify-center gap-5 border-b-gray-600 border-b-2'>
        <Link to='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new' target="_blank">
          <FaEnvelope size={30}/>
        </Link>
        <Link to='https://linkedin.com/in/sounak-bhawal' target="_blank">
          <FaLinkedin size={30}/>
        </Link>
        <Link to='https://github.com/Coder-crooz-v2' target="_blank">
          <FaGithub size={30}/>
        </Link>
      </div>
      <div className='text-md w-full p-4 flex flex-col justify-center gap-5 border-b-gray-600 border-b-2'>
        <div className='flex gap-5'>
          <IoLocation size={30}/>
          <p>Hooghly, West Bengal</p>
        </div>
        <div className='flex gap-5'>
          <IoSchool size={30}/>
          <p>IIT Kharagpur</p>
        </div>
      </div>
      <div className='w-full p-4 flex flex-col justify-center gap-5 border-b-gray-600 border-b-2'>
        <div className='flex gap-5 text-md w-full justify-center items-center' >
        <img src={leetcode} width={30} height={30} alt="icon-lc" />
        <Link to='https://leetcode.com/Coder-crooz-v2/' className='flex gap-3 items-center' target="_blank">Coder-crooz-v2 <FaLink size={15}/></Link>
        </div>
        <div className='flex gap-5 text-md w-full justify-center items-center' >
        <img src={cf} width={30} height={30} alt="icon-cf" />
        <Link to='https://codeforces.com/profile/Coder-crooz-v2/' className='flex gap-3 items-center' target="_blank">Coder-crooz-v2 <FaLink size={15}/></Link>
        </div>
        <div className='flex gap-5 text-md w-full justify-center items-center' >
        <img src={codechef} width={30} height={30} alt="icon-codechef" />
        <Link to='https://codechef.com/users/codercroozv2' className='flex gap-5 items-center' target="_blank">codercroozv2 <FaLink size={15}/></Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard