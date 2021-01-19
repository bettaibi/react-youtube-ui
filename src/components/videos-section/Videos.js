import React from 'react'
import Video from './Video';

const Videos = () => {

    const sections = [
        {sectionId: 178, videos : [
            {id: 1, url: ''},
            {id: 2, url: ''},
            {id: 3, url: ''},
            {id: 4, url: ''},
            {id: 5, url: ''},
            {id: 6, url: ''},
            {id: 7, url: ''},
            {id: 9, url: ''},
            {id: 10, url: ''},
            {id: 11, url: ''},
            {id: 8, url: ''}
        ]},
        {sectionId: 789, videos : [
            {id: 9, url: ''},
            {id: 10, url: ''},
            {id: 11, url: ''},
            {id: 12, url: ''}
        ]},
        {sectionId: 79, videos : [
            {id: 13, url: ''},
            {id: 14, url: ''},
            {id: 15, url: ''},
            {id: 16, url: ''},
            {id: 17, url: ''},
            {id: 18, url: ''},
            {id: 19, url: ''},
            {id: 20, url: ''}
        ]},
    ]

    return (
        <main className="videos">
            {sections.map(item =>(
                <section key={item.sectionId} className="video-sections">
                    {item.videos.map(videoItem =>(
                        <Video key={videoItem.id} /> 
                    ))}
               </section>
            ))}
        </main>
    )
}

export default Videos;
