import React, { useState, useEffect } from 'react'
import './Projects.css'

const Mywork = ({ projects = [] }) => {
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
