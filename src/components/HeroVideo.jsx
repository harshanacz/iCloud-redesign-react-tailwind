
const HeroVideo = () => {
  return (
    <div className="flex justify-center items-center">
     <video 
  src="/assets/video.mp4"
  autoPlay 
  muted 
  playsInline
  poster="/assets/poster-image.jpg"
  style={{ height: '300px', width: 'auto' }}
>
  Your browser does not support the video tag.
</video>

    </div>
  )
}

export default HeroVideo
