import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { profile } from "../constants";

const heroTags = ["6+ yrs in banking", "UPI · API Banking", "Python · SQL · n8n"];

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className='neo-brutalism-blue py-5 px-7 mx-5 text-white text-center sm:max-w-2xl'>
        <p className='text-sm uppercase tracking-widest opacity-80'>
          Hi, I'm {profile.name.split(" ")[0]} 👋
        </p>
        <h1 className='font-poppins font-semibold sm:text-3xl text-2xl leading-snug mt-2'>
          I build banking products that run on code.
        </h1>
        <p className='mt-2 sm:text-lg opacity-90'>{profile.role}</p>

        <ul className='flex flex-wrap justify-center gap-2 mt-4'>
          {heroTags.map((tag) => (
            <li
              key={tag}
              className='text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-white/15 border border-white/30'
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          6+ years inside bank rails: UPI, API Banking and digital term deposits at RBL Bank.
          <br />
          Transaction success 79% → 92%, ₹192+ Cr in business, 320+ APIs managed.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          See the banking work
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Roadmaps are only half the job. I also ship the tooling: n8n automations, AI document agents,
          and a live full-stack app.
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Explore the builds
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Hiring for payments or banking product, or want to build something together?
          <br /> Let's talk.
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Get in touch
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
