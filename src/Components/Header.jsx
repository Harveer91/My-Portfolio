function Header(){
    return(
        <header>
            <nav className='navigation'>
                <ul id="sections">
                    <li className="section"><a href="#Home">Home</a></li>
                    <li className="section"><a href="#About">About</a></li>
                    <li className="section"><a href="#Skills">Skills</a></li>
                    <li className="section"><a href="#Projects">Projects</a></li>
                </ul>
            </nav>
            <div className="header">
                <h1 className="Introduction" id="Name">Hi I'm Harveer</h1>
                <div className="typing-wrapper">
                    <div className="typing-container">
                        <h1 className="Introduction" id="Occupation">A Software Engineer</h1>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header 