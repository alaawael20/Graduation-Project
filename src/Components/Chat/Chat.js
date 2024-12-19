import React from "react";
import myprofile from "../../Images/myprofile.jpg";
import myprofile2 from "../../Images/myprofile2.jpg";
import Logo from "../../Images/Logo.png";

const Chat = () => {
  return (
    <div>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
              <h5 className="font-weight-bold mb-3 text-center text-lg-start">
                Buyers
              </h5>
              <div className="card">
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    <li className="p-2 border-bottom bg-body-tertiary">
                      <a href="#!" className="d-flex justify-content-between">
                        <div className="d-flex flex-row">
                          <img
                            src={myprofile}
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">Alaa Al-faqawi</p>
                            <p className="small text-muted">
                              Hello, Are you there?
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">Just now</p>
                          <span className="badge bg-danger float-end">10</span>
                        </div>
                      </a>
                    </li>
                    <li className="p-2 border-bottom">
                      <a href="#!" className="d-flex justify-content-between">
                        <div className="d-flex flex-row">
                          <img
                            src={myprofile2}
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">Saher Shareef</p>
                            <p className="small text-muted">
                              Lorem ipsum dolor sit.
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">5 mins ago</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-7 col-xl-8">
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between mb-4">
                  <img
                    src={myprofile}
                    alt="avatar"
                    className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                    width="60"
                  />
                  <div className="card w-100">
                    <div className="card-header d-flex justify-content-between p-3">
                      <p className="fw-bold mb-0">Alaa Al-faqawi</p>
                      <p className="text-muted small mb-0">
                        <i className="far fa-clock"></i> 12 mins ago
                      </p>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="d-flex justify-content-between mb-4">
                  <div className="card w-100">
                    <div className="card-header d-flex justify-content-between p-3">
                      <p className="fw-bold mb-0">Auto Deals</p>
                      <p className="text-muted small mb-0">
                        <i className="far fa-clock"></i> 13 mins ago
                      </p>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium.
                      </p>
                    </div>
                  </div>
                  <img
                    src={Logo}
                    alt="avatar"
                    className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                    width="60"
                  />
                </li>
                <li className="bg-white mb-3">
                  <div className="form-outline">
                    <textarea
                      className="form-control bg-body-tertiary"
                      id="textAreaExample2"
                      rows="4"
                    ></textarea>
                    <label className="form-label" htmlFor="textAreaExample2">
                      Message
                    </label>
                  </div>
                </li>
                <button
                  type="button"
                  className="btn btn-info btn-rounded float-end"
                >
                  Send
                </button>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chat;
