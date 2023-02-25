import './VideoCard.css';

function VideoCard(props) {
  const { id, title, author } = props;

  return (
    <div className='VideoCard'>
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        target='_blank'
        className='Video'
        rel='noreferrer'
      >
        <img src={`https://img.youtube.com/vi/${id}/0.jpg`} className='Thumbnail' />
        <div className='Title'>{title}</div>
      </a>
      <div className='Author'>{author}</div>
    </div>
  );
}

export default VideoCard;
