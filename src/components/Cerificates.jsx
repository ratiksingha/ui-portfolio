const Certificates = () => {

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Certificates</h1>
                    <p className="text-center">Here are some of my certificates:</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img src="/path/to/certificate1.jpg" alt="Certificate 1" className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <img src="/path/to/certificate2.jpg" alt="Certificate 2" className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <img src="/path/to/certificate3.jpg" alt="Certificate 3" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default Certificates;