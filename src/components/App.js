import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {
    const [videos, search] = useVideos('Climate Change')
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    return (
        <div className='ui container'>
            <SearchBar onSearchSubmit={search} />
            <div className="ui grid">
                <div className="row">
                    <div className="ten wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="six wide column">
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default App