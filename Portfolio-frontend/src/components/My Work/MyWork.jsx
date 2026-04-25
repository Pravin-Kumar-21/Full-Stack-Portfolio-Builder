import React, { useRef, useState } from 'react';
import './MyWork.css';


// const work_type_img_or_gif = (asset_id) => {
//   const asset_url = `https://lh3.googleusercontent.com/d/${asset_id}=w1000?authuser=0`;
//   return asset_url
// };

const work = [
  {
    "company_name": "Soul AI – Remote",
    "job_title": "1. Python Full Stack Developer [Freelance]",
    "start_date": "2025-03-01",
    "end_date": "2025-12-01",
    "description": "<ul>\r\n  <li>Integrated Python modules with OneDrive, ServiceNow, HubSpot, and GitHub APIs to authenticate, retrieve domain entities, and manage ACL data.</li>\r\n  <li>Implemented incremental synchronization, delta queries, pagination handling, and rate-limit backoff to ensure efficient and complete data ingestion.</li>\r\n  <li>Built resilient API workflows with structured logging, retry mechanisms, and robust error handling to handle transient failures.</li>\r\n  <li>Worked across the stack using Python, React.js, and Django REST Framework to deliver scalable and maintainable solutions.</li>\r\n</ul>"
  },
  {
    "company_name": " GoQuant – Apprenticeship",
    "job_title": "2. Go Quant Bootcamp Trainee",
    "start_date": "2025-08-01",
    "end_date": "2025-08-31",
    "description": "<ul>\r\n  <li>Developed C++ WebSocket clients using Boost/Beast libraries to stream real-time order book updates for decentralized exchanges (e.g., BTC, ETH markets).</li>\r\n  <li>Implemented REST APIs to place, modify, update, and cancel orders, along with handling order and transaction updates.</li>\r\n  <li>Worked with high-frequency data streams and optimized performance for low-latency trading interactions.</li>\r\n</ul>"
  },
  {
    "company_name": "Luein Analytics – Bengaluru, Karnataka",
    "job_title": "3. Python Django Developer Intern",
    "start_date": "2024-10-01",
    "end_date": "2025-02-01",
    "description": "<ul>\r\n  <li>Developed and maintained a course application platform using Django and Django Rest Framework (DRF).</li>\r\n  <li>Built RESTful APIs, modified scraping code, and gathered data from various sources.</li>\r\n  <li>Worked with senior developers to design the backend and implemented frontend using Django templates, HTML, CSS, and the company’s custom framework.</li>\r\n  <li>Tested APIs, generated reports to optimize costs, and stored scraped data in Elasticsearch for faster retrieval.</li>\r\n  <li>Wrote Python scripts to convert various API JSON formats into the required structure.</li>\r\n</ul>"
  },
  {
  "company_name": "Celebal Technologies – Jaipur, India",
  "job_title": "4. React Developer Intern",
  "start_date": "2024-06-01",
  "end_date": "2024-08-01",
  "description": "<ul>\r\n  <li>Developed contact submission forms and dashboards using React.js, focusing on building reusable components to reduce bundle size and improve load performance.</li>\r\n  <li>Created custom React hooks to manage dynamic loaders and optimize data fetching and rendering.</li>\r\n  <li>Implemented lazy loading techniques for components, enhancing application performance and user experience.</li>\r\n  <li>Collaborated on frontend projects and ensured timely delivery within defined deadlines.</li>\r\n</ul>"
}
]
const about = {
  "description": "I’m driven by curiosity, resilience, and a calm determination to solve problems that others walk away from.",
  "floating_captions": [
    "Full Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Django Developer",
    "UI/UX Designer",
  ],
  "resume_link": "https://drive.google.com/file/d/1u4qlgn5d6XH5OzM-cOnyfiugjV-s21zS/view?usp=drive_link"
}
const home = {
  "name": "Pravin Kumar",
  "intro": "Hi Viewers,",
  "subcaption": "Turning Ideas into Web Experiences",
  "job_title": "Full Stack Developer",
  "avatar_img": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/User+Avatar/IMG_20220418_223644-min.jpg",
  "paragraph": "Full-Stack Engineer with strong experience in developing and deploying scalable web apps. Proficient in backend development with Django, DjangoRestFramework, seamlessly integrating front-end tech like HTML, Django templates, CSS, and Tailwind CSS. Skilled in React for smooth front-end and backend interaction. Adept at designing robust Python APIs, optimizing performance, and enhancing UX. Hands-on with Elasticsearch, API testing via Postman, and exploring machine learning. Proven ability to deliver innovative, high-quality, and scalable solutions",
  "HireMe_link": "https://mail.google.com/mail/u/0/?fs=1&to=pravinkumar2108@gmail.com&tf=cm",
  "asset_id": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Work+Experience+gif-image+related+to+your+work/code+for+life.gif"
}



const MyWork = () => {
  
  
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
