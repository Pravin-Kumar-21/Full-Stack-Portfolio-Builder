import React, { useState, useEffect } from 'react'
import './Projects.css'

const projects = [
  {
    "language_used": "React JS , HTML, CSS",
    "updated_on": "2025-08-30T22:41:19.582496Z",
    "Project_title": "React Dashboard for Developers",
    "Project_info": "A frontend project featuring bar graphs and charts to visualize the number of lines of code committed and deleted, providing insights for developers.",
    "project_link": "https://github.com/Pravin-Kumar-21/React-Dashboard",
    "priority": 5,
    "project_photos": [
      {
        "project": 1,
        "image_name": "3",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Dashborad/Screenshot+From+2025-08-23+04-03-47.png"
      },
      {
        "project": 1,
        "image_name": "2",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Dashborad/Screenshot+From+2025-08-23+04-04-00.png"
      },
      {
        "project": 1,
        "image_name": "1",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Dashborad/Screenshot+From+2025-08-23+04-04-08.png"
      }
    ]
  },
  {
    "language_used": "Django, Django Rest Framework ,Postman for API testing",
    "updated_on": "2025-08-30T22:42:00.383267Z",
    "Project_title": "Vendor Management Systems",
    "Project_info": "Developed a Django CRUD based Vendor Management System with Performance metrics(VMS) featuring comprehensive vendor profile management, purchase order tracking, and performance metrics calculation.Implemented RESTful APIs for vendor and purchase order management.",
    "project_link": "https://github.com/Pravin-Kumar-21/Vendor-Management-System",
    "priority": 4,
    "project_photos": [
      {
        "project": 2,
        "image_name": "1",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Vendor+Management/1.png"
      },
      {
        "project": 2,
        "image_name": "2",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Vendor+Management/2.png"
      },
      {
        "project": 2,
        "image_name": "3",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Vendor+Management/3.png"
      },
      {
        "project": 2,
        "image_name": "4",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Vendor+Management/4.png"
      },
      {
        "project": 2,
        "image_name": "5",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Vendor+Management/5.png"
      },
      {
        "project": 2,
        "image_name": "6",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Vendor+Management/6.png"
      },
      {
        "project": 2,
        "image_name": "7",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Vendor+Management/7.png"
      }
    ]
  },
  {
    "language_used": "Python",
    "updated_on": "2025-08-30T22:42:44.340410Z",
    "Project_title": "Spot Exposure Hedgebot",
    "Project_info": "Spot Exposure Hedgebot is an automated trading system designed to manage and neutralize spot market exposure by dynamically opening hedging positions on derivative markets. Built to run on Python, it monitors real-time spot balances across user accounts and calculates delta exposure, automatically placing counter-positions (e.g., perpetual shorts) to maintain a market-neutral stance.\r\n\r\nThe bot integrates with [Exchange APIs] and supports instruments like [e.g., BTC, ETH, SOL], offering configurable thresholds, slippage tolerance, and risk management features. Designed for high-frequency operation, it ensures immediate response to spot movements, reducing directional risk in volatile markets.",
    "project_link": "https://github.com/Pravin-Kumar-21/Hedgebot",
    "priority": 2,
    "project_photos": [
      {
        "project": 3,
        "image_name": "6",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Spot+Exposure/Screenshot+From+2025-08-23+04-19-52.png"
      },
      {
        "project": 3,
        "image_name": "5",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Spot+Exposure/Screenshot+From+2025-08-23+04-20-03.png"
      },
      {
        "project": 3,
        "image_name": "4",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Spot+Exposure/Screenshot+From+2025-08-23+04-20-16.png"
      },
      {
        "project": 3,
        "image_name": "3",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Spot+Exposure/Screenshot+From+2025-08-23+04-20-34.png"
      },
      {
        "project": 3,
        "image_name": "2",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Spot+Exposure/Screenshot+From+2025-08-23+04-20-52.png"
      },
      {
        "project": 3,
        "image_name": "1",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Spot+Exposure/Screenshot+From+2025-08-23+04-21-39.png"
      }
    ]
  },
  {
    "language_used": "Django, Django Rest Framework , HTML, CSS, ,ReactJS",
    "updated_on": "2025-08-30T22:43:22.633754Z",
    "Project_title": "Full Stack Portfolio Builder",
    "Project_info": "Welcome to my Full Stack Portfolio! Here, Django's powerful backend meets React's sleek, responsive design. Explore projects that showcase robust APIs, interactive interfaces, and stylish, functional designs. Witness the blend of innovation and elegance in every application.",
    "project_link": "https://github.com/Pravin-Kumar-21/React-Django-Full-Stack-Portfolio",
    "priority": 1,
    "project_photos": [
      {
        "project": 4,
        "image_name": "7",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Portfolio+builder/Screenshot+From+2025-08-23+02-12-50.png"
      },
      {
        "project": 4,
        "image_name": "6",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Portfolio+builder/Screenshot+From+2025-08-23+02-13-00.png"
      },
      {
        "project": 4,
        "image_name": "5",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Portfolio+builder/Screenshot+From+2025-08-23+02-56-43.png"
      },
      {
        "project": 4,
        "image_name": "4",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Portfolio+builder/Screenshot+From+2025-08-23+02-56-59.png"
      },
      {
        "project": 4,
        "image_name": "3",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Portfolio+builder/Screenshot+From+2025-08-23+02-57-13.png"
      },
      {
        "project": 4,
        "image_name": "2",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Portfolio+builder/Screenshot+From+2025-08-23+03-51-31.png"
      },
      {
        "project": 4,
        "image_name": "1",
        "image_url": "https://portfolio-builder-drf.s3.ap-south-1.amazonaws.com/Projects+/Portfolio+builder/Screenshot+From+2025-08-23+02-57-13.png"
      }
    ]
  },
  {
    "language_used": "Python, Django,HTML, CSS, Tailwind CSS, JavaScript",
    "updated_on": "2025-09-01T14:40:12.579358Z",
    "Project_title": "Full Stack Airbnb Clone",
    "Project_info": "A web application that combines the power of HTML, CSS, Django, and Tailwind CSS to bring you an online accommodation booking experience. It features a user-friendly interface with intuitive and visually appealing navigation for both hosts and guests. Users can explore accommodation listings with detailed information and reviews. The platform includes easy user registration, login, and profile management. Guests can make bookings and reservations with ease, while hosts can manage availability. Advanced search and filtering options help users find accommodations based on location, price, amenities, and more. Real-time messaging allows smooth communication between hosts and guests. A dedicated host dashboard enables hosts to manage their listings, bookings, and earnings. An admin panel ensures that administrators can manage user accounts, monitor listings, and maintain platform integrity.",
    "project_link": "https://github.com/Pravin-Kumar-21/Airbnb_Clone_Latest",
    "priority": 3,
    "project_photos": [
      {
        "project": 5,
        "image_name": "8",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Airbnb/1-min.png"
      },
      {
        "project": 5,
        "image_name": "9",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Airbnb/2-min.png"
      },
      {
        "project": 5,
        "image_name": "5",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Airbnb/9-min.png"
      },
      {
        "project": 5,
        "image_name": "4",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Airbnb/4-min.png"
      },
      {
        "project": 5,
        "image_name": "3",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Airbnb/8-min.png"
      },
      {
        "project": 5,
        "image_name": "2",
        "image_url": "https://my-personal-s3-bucket-portfolio.s3.ap-south-1.amazonaws.com/Projects+/Airbnb/12-min.png"
      }
    ]
  }
]

const Mywork = () => {
  // Sort projects by priority (lower = higher priority)
  const sortedProjects = [...projects].sort((a, b) => a.priority - b.priority)
  
  
  

  return (
    <section id='project'>
      <div className='project-main'>
        <div className='project-heading'>
          <h1>My Projects</h1>
        </div>

        <div className='project-container'>
          {sortedProjects.map((proj, index) => (
            <div className='project-card' key={index}>
              <div className='card-content'>

                <div className='card-image'>
                    {proj.project_photos && proj.project_photos.length > 0 && (
                      <ImageSlider photos={proj.project_photos} />
                    )}
                </div>

                <div className='card-text'>
                  <div className='card-text-heading'>
                    <div className='project-title'>{proj.Project_title}</div>

                    <div className='project-link'>
                      <a href={proj.project_link} target="_blank" rel="noopener noreferrer">
                        <div className='logo'>
                          <i className='fa-brands fa-github'></i>
                        </div>
                        <div>Source Code</div>
                      </a>
                    </div>
                  </div>

                  <p>{proj.Project_info}  </p>
                  <div className='project-languages'>
                    <strong>Tech Stack:</strong> {proj.language_used}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ImageSlider = ({ photos }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % photos.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [photos.length])



  return (
    <div className="slider">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo.image_url}
          alt={`slide-${index}`}
          className={`slider-img ${index === current ? "active" : ""}`}
        />
      ))}
    </div>
  )
}


export default Mywork
