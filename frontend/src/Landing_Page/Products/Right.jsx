export default function Right({ productName, productDescription, learnMore, imageURL }) {
    return (
        <div className="container mt-5">
            <div className="row align-items-center gy-4 flex-column-reverse flex-md-row p-3 p-md-5">
                {/* Text Section */}
                <div className="col-12 col-md-6 px-md-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    {learnMore && (
                        <div className="mb-3">
                            <a href={learnMore} style={{ textDecoration: 'none' }}>
                                Learn More <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    )}
                </div>

                {/* Image Section */}
                <div className="col-12 col-md-6 text-center text-md-end">
                    <img src={imageURL} alt={`${productName} visual`} className="img-fluid" />
                </div>
            </div>
        </div>
    );
}
