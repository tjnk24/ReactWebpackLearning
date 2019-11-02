import React from 'react';

function Resume(props) {
    if(props.data) {
        var education = props.data.education.map(function(edu) {
           return  <div key={edu.school} className="row item">
                       <div className="twelve columns">
                           <h3>{edu.school}</h3>
                           <p className="info">{edu.degree} <span>&bull;</span> <em className="date">{edu.graduated}</em></p>
                           <p>{edu.description}</p>
                       </div>
                    </div>
        });

        var work = props.data.work.map(function(wrk) {
            return  <div key={wrk.company} className="row item">
                        <div className="twelve columns">
                            <h3>{wrk.company}</h3>
                            <p className="info">{wrk.title} <span>&bull;</span> <em className="date">{wrk.years}</em></p>
                            <p>{wrk.description}</p>
                        </div>
                    </div>
        });

        var skills = props.data.skills.map(function(skill) {
            var className = 'bar-expand ' + skill.name.toLowerCase();
            return <li key={skill.name}><span style={{width:skill.level}} className={className}></span><em>{skill.name}</em></li>
        });
    }
    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">
                    {education}
                </div>
            </div>
            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    {work}
                </div>
            </div>
            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>
                <div className="nine columns main-col">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione
                        voluptatem sequi nesciunt.
                    </p>
                    <div className="bars">
                        <ul className="skills">
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
