import React, { useRef, useState } from 'react';
import './MyWork.css';


// const work_type_img_or_gif = (asset_id) => {
//   const asset_url = `https://lh3.googleusercontent.com/d/${asset_id}=w1000?authuser=0`;
//   return asset_url
// };


const MyWork = ({ work , about = [], home ={} } ) => {
  
  
  const [open, setOpen] = useState({});
  
  const refs = useRef({});
  
  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  

    
  const getStyle = (ref, isOpen) => ({
    maxHeight: isOpen ? `${ref?.scrollHeight}px` : '0px',
    opacity: isOpen ? 1 : 0,
  });
  
  return (
    <section id='mywork'>
      <div className='work-main'>

        {/* Left Side */}
        <div className='left-block'>
          <div className='img-div'>
            <img src={home.asset_id} alt="User Work Image" />
          </div>
          <div className='download-div'>
          <a href={about.resume_link}>
            <button>Download Resume</button>
          </a>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className='content-div'>
          <span className='work-highlight'>Work Experience</span>

          {work.map((job, index) => {
            const key = `job${index}`;
            // Create ref for each job
            if (!refs.current[key]) refs.current[key] = React.createRef();

            return (
              <div key={index}>
                {/* Job Title */}
                <div className='title-1' onClick={() => toggle(key)}>
                  <span>{job.job_title}</span>
                  <span className='arrow-icon'>{open[key] ? '▲' : '▼'}</span>
                </div>

                {/* Company Info */}
                <div className='title-2'>
                  <span>{job.company_name}</span>
                  <span>
                    {formatDate(job.start_date)} – {formatDate(job.end_date)}
                  </span>
                </div>

                {/* Description */}
                <div
                  className='description'
                  ref={refs.current[key]}
                  style={getStyle(refs.current[key].current, open[key])}
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Utility function to format date from YYYY-MM-DD to "Mon YYYY"
const formatDate = (dateStr) => {
  const options = { year: 'numeric', month: 'short' };
  return new Date(dateStr).toLocaleDateString('en-US', options);
};

export default MyWork;
