import React from 'react'
import arrowLeftIcon from '../assets/icons/arrow-left.svg';
import arrowRightIcon from '../assets/icons/arrow-right.svg';

const Tags = () => {
    let position = 0;

    function toLeft(e){
        e.stopPropagation();
        if(position < 0){
            position += 320;
            document.getElementById('chips').style.transform = `translateX(${position}px)`;
        }
    }

    
    function toRight(e){
        e.stopPropagation();
        if(position >= 0){
            position -= 320;
            document.getElementById('chips').style.transform = `translateX(${position}px)`;
        }
    }

    return (
        <div className="tags">
            <div id="chips">
                <button className="tag active">All</button>
                <button className="tag">Javascript</button>
                <button className="tag">Typescript</button>
                <button className="tag">Python</button>
                <button className="tag">Computer Application</button>
                <button className="tag">Nodejs</button>
                <button className="tag">Angular</button>
                <button className="tag">React</button>
                <button className="tag">MongoBD</button>
                <button className="tag">MySQL</button>
                <button className="tag">Google Workspace</button>
                <button className="tag">User interface design</button>
                <button className="tag">Firebase</button>
            </div>
            <div className="left-arrow" tabIndex="0">
                    <a href="/#" onClick={toLeft} tabIndex="-1" >
                        <img src={arrowLeftIcon} alt="arrowLeft"/>
                    </a>
            </div>
            <div className="right-arrow">
                <a href="/#" onClick={toRight}>
                    <img src={arrowRightIcon} alt="arrowLeft"/>
                </a>
            </div>
        </div>
    )
}

export default Tags
