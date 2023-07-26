import React from 'react'

const Hero = () => {
  return (
    
<section className="hero">
  <img className="hero-video" src="https://w.wallhaven.cc/full/yj/wallhaven-yjmlo7.png" alt="" />
  <div className="container">
    <div className="hero-content">
      <p className="hero-subtitle">PPLUS</p>
      <h1 className="h1 hero-title">
        Unlimited <strong>Movie</strong>, TV Shows, &amp; More.
      </h1>
      <div className="meta-wrapper">
        <div className="badge-wrapper">
          <div className="badge badge-fill">FUN IN</div>
          <div className="badge badge-outline">HD</div>
        </div>
        <div className="ganre-wrapper">
          <a href="#">MOVIES,</a>
          <a href="#">TV SHOWS</a>
        </div>
      </div>
      {/* <button className="btn btn-primary">
        <ion-icon name="play" />
        <span>Watch now</span>
      </button> */}
    </div>
  </div>
</section>
  )
}

export default Hero