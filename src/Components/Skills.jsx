function Skills(){
    return(
        <>
            <h1 className="S-title">Skills</h1>
            <hr></hr>
            <h2 className="Languages">Languages</h2>
            <div className="logos-container">
                <div className="logos" id="python-logo">
                    <img src="/src/assets/python_logo.png" alt="python-logo"></img>
                </div>
                <div className="logos" id="html-logo">
                    <img src="/src/assets/html-logo.png" alt="html-logo"></img>
                </div>
                <div className="logos" id="css-logo">
                    <img src="/src/assets/css_logo.png" alt="css-logo"></img>
                </div>
                <div className="logos" id="js-logo">
                    <img src="/src/assets/JavaScript-logo.png" alt="js-logo"></img>
                </div>
                <div className="logos" id="C++-logo">
                    <img src="/src/assets/C++logo.png" alt="c++-logo"></img>
                </div>
            </div>
            <br></br>
            <hr></hr>
            <h1 className="Frameworks-title">Frameworks/Libraries/Tools</h1>
            <div className="Framework-container">
                <div className="frameworksorlibraries">
                    <img src="/src/assets/react-logo.png" alt="react-logo"></img>
                </div>
                <div className="frameworksorlibraries" id="ROSS">
                    <h1 id="Ross">ROSS</h1>
                </div>
                <div className="frameworksorlibraries">
                    <img src="/src/assets/Git-logo.png" alt="Git-logo"></img>
                </div>
                <div className="frameworksorlibraries">
                    <img src="/src/assets/Figma-logo.png" alt="Figma-logo"></img>
                </div>
            </div>
        </>
    );

}

export default Skills