import React from 'react';
import './style.css';

function Hello() {
    return(
        <div>
            <div className="invis-box">
                <div className="green-box">
                    <div className="text-group">
                        <div className="hi-group">
                            <h1 className="brandon-text">
                                <span className="name-1">Hi, I'm Brandon.</span>
                                <br />
                                <span className="name-2">Hi, I'm Brandon.</span>
                                <br />
                                <span className="name-3">Hi, I'm Brandon.</span>
                                <br />
                            </h1>
                        </div>
                        <div className="hi-text">
                            <h2 className="description-text">I am a full-stack web developer. I specialize in <span className="technology">Javascript</span>, <span className="technology">Node</span>, <span className="technology">Express</span>, <span className="technology">MySQL</span>, <span className="technology">MongoDB</span> and <span className="technology">React.js</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hello;