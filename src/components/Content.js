import './Content.css';
import VideoCard from './VideoCard';

function Content(props) {
  const { videos } = props;

  return (
    <main className='Content'>
      <div className='VideoContainer'>
        {videos.map((video) => (
          <VideoCard key={video.id} id={video.id} title={video.title} author={video.author} />
        ))}
      </div>
    </main>
  );
}

export default Content;
