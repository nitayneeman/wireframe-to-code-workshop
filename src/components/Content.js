import './Content.css';

function Content(props) {
  const { videos } = props;

  return (
    <main className='Content'>
      {videos.map((video) => (
        <div key={video.id}>{video.title}</div>
      ))}
    </main>
  );
}

export default Content;
