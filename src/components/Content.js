import React, { useState } from 'react';

import './Content.css';
import VideoCard from './VideoCard';

function Content(props) {
  const { tags, videos } = props;

  // Creates a state to hold the selected tag
  const [selectedTag, setSelectedTag] = useState('All');

  // Filters the videos by the current selected tag (in case it's not "All")
  const selectTag = (tag) => setSelectedTag(tag);
  const filteredVideos =
    selectedTag !== 'All' ? videos.filter((video) => video.tag === selectedTag) : videos;

  return (
    <main className='Content'>
      <>
        <div className='TagContainer'>
          {tags.map((tag) => (
            <button key={tag} className='Tag' onClick={() => selectTag(tag)}>
              {tag}
            </button>
          ))}
        </div>
        <div className='VideoContainer'>
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} id={video.id} title={video.title} author={video.author} />
          ))}
        </div>
      </>
    </main>
  );
}

export default Content;
