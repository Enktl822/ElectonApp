import "../../styles/ subStyle/banner.css"

export default function Banner() {
  return <div className="banner">
    
    <div className="bannerContent">

      <div className="bannerTitle">
        <h1>CANON</h1>
        <p>Camera</p>
      </div>
      
    <form>
      <button className="shopNow">Shop now</button>
      <button className="viewMore">View more</button>
      </form>
    </div>

    <div className="bannePic">
      <div className="bannerPrice">
      <p>only</p>
      <p>$89</p>
      </div>
      
      <img src="../pics/headCam.png" alt="Cam"/>
      </div>

    
  </div>
}
