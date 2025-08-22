import React from 'react'
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
                  {proj.about_avatar ? (
                    <img src={proj.about_avatar} alt={proj.Project_title} />
                  ) : (
                    <img src="/default-project.png" alt="default" />
                  )}
                </div>

                <div className='card-text'>
                  <div className='card-text-heading'>
                    <div className='project-title'>{proj.Project_title}</div>

                    <div className='project-link'>
                      <div className='logo'>
                        <i className='fa-brands fa-github'></i>
                      </div>
                      <div>Source Code</div>
                    </div>
                  </div>

                  <p>{proj.Project_info}</p>
                  <div className='project-languages'>
                    <strong>Tech Stack:</strong>{proj.language_used}
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

export default Mywork
