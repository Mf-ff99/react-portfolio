const Projects = () => {

    return (
        <div className='projects-container' id='projects'>
            <div className='projects-header'>
                <h1>Projects</h1>
            </div>
            <div className='project img-left'>
                <img src='/assets/images/jordy-mockup.jpg' alt='Jordy.com Application mockup' />
                <div className='project-info-container'>
                    <div className='project-info-header'>
                        <h3>Jordan Klein Film & Video</h3>
                        <div>
                            <span><a href='https://www.jordy.com/' target='_blank' rel='noopener noreferrer'>Live App</a></span>
                            <span><a href='https://github.com/Mf-ff99/jkfv' target='_blank' rel='noopener noreferrer'>Github</a></span>
                        </div>
                    </div>
                    <div className='project-tech'>
                        <ul>
                            <li>ReactJS</li>
                            <li>Styled-Components</li>
                            <li>Vanilla CSS</li>
                            <li>Github</li>
                        </ul>
                    </div>
                    <div className='project-info-p'>
                        <p>Combining the rugged world of cinematography and the beauty of web design, Jordy.com is a beautiful, straightforward, and information-first approach to web design.</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='project img-right'>
                <img src='/assets/images/ways-mockup.jpg' alt='Ways! Application mockup' />
                <div className='project-info-container'>
                    <div className='project-info-header'>
                        <h3>Ways! | A Travel Companion</h3>
                        <div>
                            <span><a href='https://ways-client.vercel.app/' target='_blank' rel='noopener noreferrer'>Live App</a></span>
                            <span><a href='https://github.com/wzeiher3/trip-client' target='_blank' rel='noopener noreferrer'>Github</a></span>

                        </div>
                    </div>
                    <div className='project-tech'>
                        <ul>
                            <li>ReactJS</li>
                            <li>Vanilla CSS</li>
                            <li>Express.js</li>
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                    <div className='project-info-p'>
                        A gorgeous and user-first web application, Ways! is designed to meet the needs of those who travel often and plan ahead. Ways! was developed by a team of four over the course of three weeks.
                    </div>
                </div>
            </div>
            <hr />
            <div className='project img-left'>
            <img src='/assets/images/lj-mockup.jpg' alt='Lightning Jib Application mockup' />
                <div className='project-info-container'>
                    <div className='project-info-header'>
                        <h3>Lightning Jib | Camera Innovation</h3>
                        <div>

                            <span><a href='https://lightning-jib-git-master.mf-ff99.vercel.app/' target='_blank' rel='noopener noreferrer'>Live App</a></span>
                            <span><a href='https://github.com/Mf-ff99/lightning-jib' target='_blank' rel='noopener noreferrer'>Github</a></span>
                        </div>
                    </div>
                    <div className='project-tech'>
                        <ul>
                            <li>ReactJS</li>
                            <li>Styled-Components</li>
                            <li>Sass</li>
                            <li>Github</li>
                        </ul>
                    </div>
                    <div className='project-info-p'>
                        The first of its kind, Lightning Jib is an innovative take on camera jibs. Utilizing an entirely SCSS-created parallax background, LightningJib.com is a creative take on camera crane advertisement.
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects