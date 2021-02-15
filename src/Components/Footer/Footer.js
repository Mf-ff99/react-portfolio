const Footer = () => {

    return (
        <footer>
            <div className='copywrite-container'>
            <span>let's <span className='awesome'>make</span> something <span className='awesome'>awesome</span> together</span>
            <span>© Mark Force 2020 All Rights Reserved</span>
            </div>
            
            <div>
            <span>developed by:</span>
            <span className='awesome'>@markforce</span>
            </div>
            <div className='contact-icons'>
                        <a href='mailto:force.j.mark@gmail.com'>
                            <i class="fas fa-envelope-square fa-md"></i>
                        </a>

                        <a href='https://github.com/Mf-ff99' target='_blank' rel='noopener noreferrer'>
                            <i class="fab fa-github-square fa-md"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/mark-j-force/' target='_blank' rel='noopener noreferrer'>
                            <i class="fab fa-linkedin fa-md"></i>
                        </a>
            <a href='https://medium.com/@lyerend' target='_blank' rel='noopener noreferrer'>
                        <i class="fab fa-medium fa-md"></i>
            </a> 
                    </div>
        </footer>
    )
}

export default Footer;