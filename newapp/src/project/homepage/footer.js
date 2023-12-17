import React from 'react';

const Footer = () => {
  return (
    <div  style={{
        marginBottom:"0px",
        width: '100vw'
    }}>
    <div className="container my-" style={{
        margin:"0px"
    }}>
      <footer className="text-center text-lg-start bg-primary w-100" style={{
        marginBottom:"0px",
        width: '100vw'
    }}> {/* Adjusted mt-xl-3 to mt-xl-2 and pt-3 to pt-2 */}
        <div className="container p-1"> {/* Adjusted p-2 to p-1 */}
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-1 mb-lg-0"> {/* Adjusted mb-2 to mb-1 */}
              <h5 className="text-uppercase mb-1">OUR WORLD</h5> {/* Adjusted mb-2 to mb-1 */}
              <ul className="list-unstyled mb-1"> {/* Adjusted mb-2 to mb-1 */}
                <li>
                  <a href="#!" className="text-white">About us</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Collections</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Environmental philosophy</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Artist collaborations</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-1 mb-lg-0"> {/* Adjusted mb-2 to mb-1 */}
              <h5 className="text-uppercase mb-1">Assistance</h5> {/* Adjusted mb-2 to mb-1 */}
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white">Contact us</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Size Guide</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Shipping Information</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Returns & Exchanges</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Payment</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-1 mb-lg-0"> {/* Adjusted mb-2 to mb-1 */}
              <h5 className="text-uppercase mb-1">Careers</h5> {/* Adjusted mb-2 to mb-1 */}
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white">Jobs</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-1 mb-lg-0"> {/* Adjusted mb-2 to mb-1 */}
              <h5 className="text-uppercase mb-1">Sign up to our newsletter</h5> {/* Adjusted mb-2 to mb-1 */}
              <div className="form-outline form-white mb-1"> {/* Adjusted mb-2 to mb-1 */}
                <input type="email" id="form5Example2" className="form-control" />
                <label className="form-label" htmlFor="form5Example2">Email address</label>
              </div>
              <button type="submit" className="btn btn-outline-white btn-block">Subscribe</button>
            </div>
          </div>
        </div>

       
      </footer>
    </div>
    </div>
  );
}

export default Footer;
