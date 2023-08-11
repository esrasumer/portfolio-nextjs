import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Sümer | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Esra Sümer</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/esra-sumer/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/esrasumer'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Web Development{' '}<span className='px-1'>|</span>Complex Problem Solving
              <span className='px-1'>|</span>Creative Thinking
            </p>
          </div>
          <div className='block sm:hidden'>
            <p> Web Development</p>
            <p className='py-2'>Complex Problem Solving</p>
            <p>Creative Thinking</p>
          </div>
        </div>
        <p>
          I am a seasoned Frontend Developer specializing in HTML, CSS, JavaScript, and React. My portfolio showcases projects that blend
          UI/UX design finesse with seamless functionality, reflecting my commitment to exceptional user experiences. With a focus on optimizing
          performance, I have contributed to load time enhancements. A Sakarya University graduate with a strong educational background, I invite you
          to connect on LinkedIn or explore my GitHub for a closer look at my work.

        </p>

        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Gesund.ai</span>
            <span className='px-2'>|</span>Frontend Developer
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Gesund Company
            </span>
          </p>
          <p className='py-1 italic'>Front End Web Developer (2023 - Now)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Used React, JavaScript, SCSS,TypeScript, Ant design and lots of different packages
              & tools to develop companies.
            </li>
            <li>
              Prioritized platform roadmap with market needs.
            </li>
            <li>
              Researched new technologies for stable and re-boost platforms.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
