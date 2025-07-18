import googlePlay from '../assets/googlePlayBadge.svg';
import appStore from "../assets/appstoreBadge.svg";

export default function Left({ imageURL, productName, productDescription, tryDemo, learnMore, googleplay, appstore }) {
    return (
        <div className="container mt-5">
            <div className="row align-items-center gy-4">
                {/* Image Section */}
                <div className="col-12 col-md-6 text-center text-md-start">
                    <img src={imageURL} alt={`${productName} visual`} className="img-fluid" />
                </div>

                {/* Text & Links Section */}
                <div className="col-12 col-md-6 px-md-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>

                    <div className="d-flex flex-wrap align-items-center gap-4 mb-4 mt-3">
                        <a href={tryDemo} style={{ textDecoration: 'none' }}>
                            Try Demo <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href={learnMore} style={{ textDecoration: 'none' }}>
                            Learn More <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>

                    <div className="d-flex gap-3">
                        {googleplay && (
                            <a href={googleplay}>
                                <img src={googlePlay} alt="Get it on Google Play" height="40" />
                            </a>
                        )}
                        {appstore && (
                            <a href={appstore}>
                                <img src={appStore} alt="Download on the App Store" height="40" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
