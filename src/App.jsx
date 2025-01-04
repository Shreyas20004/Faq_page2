/* eslint-disable react/jsx-key */
import './App.css'
import { useState } from 'react'
export default function App() {
  const dataL = [
    {
      question: "What is a hackathon?",
      answer: "A hackathon is an event where participants collaborate intensively to create projects, typically involving software, hardware, or design, within a limited timeframe."
    },
    {
      question: "Who can participate?",
      answer: "Anyone with an interest in technology, design, or problem-solving can participate. Hackathons are often open to developers, designers, students, and professionals."
    },
    {
      question: "Do I need to know how to code?",
      answer: "Not necessarily! Hackathons welcome participants with diverse skill sets, including design, project management, and creative problem-solving."
    },
    {
      question: "Is there a participation fee?",
      answer: "No, most hackathons are free to attend. Some may require registration, so be sure to sign up early."
    },
    {
      question: "What should I bring to a hackathon?",
      answer: "Bring your laptop, chargers, and any hardware or tools you might need. Some hackathons also recommend bringing a water bottle and comfortable clothes."
    },
    {
      question: "Can I form a team before the event?",
      answer: "Yes, many hackathons allow pre-formed teams. However, there are also opportunities to form teams at the event during networking sessions."
    },
    {
      question: "Are there prizes?",
      answer: "Yes, hackathons often have prizes for the best projects in various categories, such as innovation, design, or technical implementation."
    },
    {
      question: "What if I don’t finish my project?",
      answer: "That’s okay! Hackathons are about learning and collaborating. Judges value creativity and effort even if the project isn’t complete."
    },
    {
      question: "Will there be mentors or support available?",
      answer: "Yes, most hackathons provide mentors and volunteers to help participants with technical or design challenges."
    },
    {
      question: "How can I prepare for a hackathon?",
      answer: "Familiarize yourself with the theme, review any provided resources, and consider brainstorming ideas with your team before the event."
    }
  ];
  const dataR = [
    {
      question: "What is a hackathon?",
      answer: "A hackathon is an event where participants collaborate intensively to create projects, typically involving software, hardware, or design, within a limited timeframe."
    },
    {
      question: "Who can participate?",
      answer: "Anyone with an interest in technology, design, or problem-solving can participate. Hackathons are often open to developers, designers, students, and professionals."
    },
    {
      question: "Do I need to know how to code?",
      answer: "Not necessarily! Hackathons welcome participants with diverse skill sets, including design, project management, and creative problem-solving."
    },
    {
      question: "Is there a participation fee?",
      answer: "No, most hackathons are free to attend. Some may require registration, so be sure to sign up early."
    },
    {
      question: "What should I bring to a hackathon?",
      answer: "Bring your laptop, chargers, and any hardware or tools you might need. Some hackathons also recommend bringing a water bottle and comfortable clothes."
    },
    {
      question: "Can I form a team before the event?",
      answer: "Yes, many hackathons allow pre-formed teams. However, there are also opportunities to form teams at the event during networking sessions."
    },
    {
      question: "Are there prizes?",
      answer: "Yes, hackathons often have prizes for the best projects in various categories, such as innovation, design, or technical implementation."
    },
    {
      question: "What if I don’t finish my project?",
      answer: "That’s okay! Hackathons are about learning and collaborating. Judges value creativity and effort even if the project isn’t complete."
    },
    {
      question: "Will there be mentors or support available?",
      answer: "Yes, most hackathons provide mentors and volunteers to help participants with technical or design challenges."
    },
    {
      question: "How can I prepare for a hackathon?",
      answer: "Familiarize yourself with the theme, review any provided resources, and consider brainstorming ideas with your team before the event."
    }
  ];

  const [state,setState] = useState(null)

  const toggle = (index, set) => () => {
    if (state && state.index === index && state.set === set) {
      return setState(null);
    }
    setState({ index, set });
  };
  
  return (
    <div className=' h-auto w-[100vw] justify-center items-center  bg-[#CECCCD]  '>
      <div className='flex justify-between mx-44 '>
      <div className='flex justify-between '>
          <div className="inline my-8 text-center">
              <h1 className="text-6xl font-semibold">Got any questions?</h1>
              <p className="mt-2 text-6xl font-semibold text-gray-500">We&apos;ve got answers.</p>
          </div>
      </div>

      <div className="flex justify-center p-24 align-center">
          <button className="w-48 px-3 text-lg font-medium text-[#103c59] transition border border-slate-600 focus: rounded-full shadow-sm h-14 mt-7 bg-[#CECCCD] sm:text-base md:text-lg hover:bg-gray-800 hover:text-white ">
              Book an Intro Call
          </button>
      </div>
      </div>

      <div className="flex justify-center pb-8 mt-8 text-[#103c59]">
      <div className='w-[600px] mr-10'>
        {dataL.map((item, j) => (
          <div id='items' className='bg-[#fffffe] m-1 p-7 rounded-lg'>
            <div className='flex justify-between text-xl font-medium cursor-pointer' id='title' onClick={toggle(j, 'left')}>
              {item.question}
              <span className=''>{state && state.index === j && state.set === 'left' ? '-' : '+'}</span>
            </div>
            <div className={state && state.index === j && state.set === 'left' ? 'text-[#103c59]' : 'hidden'} id='content'>{item.answer}</div>
          </div>
        ))}
      </div>
      <div className='w-[600px]'>
        {dataR.map((item, i) => (
          <div id='items' className='bg-[#ffffff] m-1 p-7 rounded-lg'>
            <div className='flex justify-between text-xl font-medium cursor-pointer' id='title' onClick={toggle(i, 'right')}>
              {item.question}
              <span className=''>{state && state.index === i && state.set === 'right' ? '-' : '+'}</span>
            </div>
            <div className={state && state.index === i && state.set === 'right' ? 'text-[#103c59]' : 'hidden'} id='content'>{item.answer}</div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
