import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import AppNavbar from "../../components/navbar";
import dummyData from "../../constants/dummyData";
import Assets from "../../constants/images";
import MockOneFooter from "./footer";
import "./styles.css";

export default function FirstMock(props) {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <div className="bg-image">
        <AppNavbar />
        <div className="container-fluid">
          {/* Slider Starts */}
          <div className="row d-flex flex-row slider">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 d-flex justify-content-center">
              <h2>Find your secure</h2>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-2"></div>
            <div className="col-lg-8 d-flex justify-content-center">
              <h2>Future in Salaam Takaful</h2>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-2"></div>
            <div className="col-lg-8 d-flex justify-content-center">
              <p>
                Salaam Takaful Limited has the expertise and engagements with
                overseas Re-Takaful operators & assistance companies enabling it
                to offer comprehensive coverage for the large infrastructure
                projects
              </p>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5"></div>
            <div className="col-lg-2 d-flex justify-content-center">
              <button className="btn takaful-online-btn">Takaful Online</button>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        {/* Slider Ends */}
        {/* Form Starts */}
        <div className="row form mt-5 mb-4" data-aos="fade-up">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 d-flex justify-content-center">
            <p>How may we help you</p>
          </div>
          <div className="col-lg-4"></div>

          <div className="col-lg-3 d-flex justify-content-center py-4 mt-4">
            <input type="text" placeholder="Name" />
          </div>
          <div className="col-lg-3 d-flex justify-content-center py-4 mt-4">
            <input type="text" placeholder="Phone" />
          </div>
          <div className="col-lg-3 d-flex justify-content-center py-4 mt-4">
            <input type="text" placeholder="Product" />
          </div>
          <div className="col-lg-3 d-flex justify-content-center py-4 mt-4">
            <input type="text" placeholder="Email" />
          </div>

          <div className="col-lg-5 my-5"></div>
          <div className="col-lg-2 my-5 d-flex justify-content-center">
            <button className="btn takaful-online-btn">Submit</button>
          </div>
          <div className="col-lg-5 my-5"></div>
        </div>
      </div>
      {/* Form Ends */}

      {/* Services Starts */}
      <div className="container-fluid">
        <div className="row services my-5 py-2">
          <div className="col-lg-4 py-4"></div>
          <div className="col-lg-4 py-4 d-flex justify-content-center">
            <div className="d-flex flex-row">
              <span className="circle"></span>
              <p className="text-uppercase px-3 section-main-title">
                our services
              </p>
              <span className="circle"></span>
            </div>
          </div>
          <div className="col-lg-4 py-4"></div>

          <div className="col-lg-1 py-2"></div>
          <div className="col-lg-10 py-2 d-flex justify-content-center">
            <span className="section-heading-bold">
              All the services rendered by our company
            </span>
          </div>
          <div className="col-lg-1 py-2"></div>
        </div>
        <div className="row">
          <div className="col-lg-9"></div>
          <div className="col-lg-2 d-flex flex-row">
            <img src={Assets.expandLeft} />
            <img src={Assets.expandRight} />
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div className="row py-5">
          {dummyData.servicesData.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  data-aos="fade-up"
                  className="col-lg-4 my-4 px-2 d-flex justify-content-center"
                >
                  <div className="card services-card ">
                    <div className="card-header">
                      <img src={item.icon} />
                    </div>
                    <div className="card-body d-flex flex-column mb-4 ">
                      <div className="service-heading">
                        <span>{item.title}</span>
                      </div>
                      <div className="service-detail">
                        <span>{item.details}</span>
                      </div>
                      <div className="view-detail">
                        <span>View Details</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* Services End */}

      {/* Accomplishments Start */}
      <div className="container-fluid accomplishment">
        <div className="row my-5 ">
          <div className="col-lg-4 py-4"></div>
          <div className="col-lg-4 py-4 d-flex justify-content-center">
            <div className="d-flex flex-row">
              <span className="circle"></span>
              <p className="text-uppercase px-3 mt-2 section-main-title">
                Accomplishments
              </p>
              <span className="circle"></span>
            </div>
          </div>
          <div className="col-lg-4 py-4"></div>
          <div className="col-lg-3 py-2"></div>
          <div className="col-lg-6 py-2 d-flex justify-content-center">
            <span className="section-heading-bold">our achievements</span>
          </div>
          <div className="col-lg-3 py-2"></div>
        </div>
        <div className="row">
          <div className="col-lg-9"></div>
          <div className="col-lg-2 d-flex flex-row">
            <img src={Assets.expandLeft} />
            <img src={Assets.expandRight} />
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div className="row my-5" data-aos="slide-left">
          <div className="col-lg-3 mt-4">
            <div className="card accomplishment-card">
              <div className="card-body d-flex flex-column">
                <div className="accomplishment-img d-flex justify-content-center">
                  <img src={Assets.achievement2} />
                </div>
                <div className="accomplishment-card-title">
                  <span>Best sustainablity & corporate reports award</span>
                </div>
                <div className="accomplishment-card-view">
                  <span>view details</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4">
            <div className="card accomplishment-card">
              <div className="card-body d-flex flex-column">
                <div className="accomplishment-img d-flex justify-content-center">
                  <img src={Assets.achievement2} />
                </div>
                <div className="accomplishment-card-title">
                  <span>Best sustainablity & corporate reports award</span>
                </div>
                <div className="accomplishment-card-view">
                  <span>view details</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 mt-4">
            <div className="card accomplishment-card">
              <div className="card-body d-flex flex-column">
                <div className="accomplishment-img d-flex justify-content-center">
                  <img src={Assets.achievement2} />
                </div>
                <div className="accomplishment-card-title">
                  <span>Best sustainablity & corporate reports award</span>
                </div>
                <div className="accomplishment-card-view">
                  <span>view details</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 mt-4">
            <div className="card accomplishment-card">
              <div className="card-body d-flex flex-column">
                <div className="accomplishment-img d-flex justify-content-center">
                  <img src={Assets.achievement2} />
                </div>
                <div className="accomplishment-card-title">
                  <span>Best sustainablity & corporate reports award</span>
                </div>
                <div className="accomplishment-card-view">
                  <span>view details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accomplishments End */}
      <div className="blue-img-thick" data-aos="slide-right"></div>
      {/* Blogs Start */}

      <div className="container-fluid">
        <div className="row my-5 blogs">
          <div className="col-lg-4 py-4"></div>
          <div className="col-lg-4 py-4 d-flex justify-content-center">
            <div className="d-flex flex-row">
              <span className="circle"></span>
              <p className="text-uppercase px-3 section-main-title">
                Our blogs
              </p>
              <span className="circle"></span>
            </div>
          </div>
          <div className="col-lg-4 py-4"></div>

          <div className="col-lg-2 py-2"></div>
          <div className="col-lg-8 py-2 d-flex justify-content-center">
            <span className="section-heading-bold">
              latest news are on top all times
            </span>
          </div>
          <div className="col-lg-2 py-2"></div>
          <div className="col-lg-2 py-2"></div>
          <div className="col-lg-8 py-2 d-flex justify-content-center">
            <span className="section-sub-heading">
              Read our fresh blogs and get to know more about Salaam Takaful
              Limited
            </span>
          </div>
          <div className="col-lg-2 py-2"></div>
        </div>

        <div className="row py-5">
          <div className="col-lg-4 blog-card-main" data-aos="flip-up">
            <div className="card d-flex flex-column">
              <div className="service-card-img">
                <img src={Assets.secondMockBlog} />
              </div>
              <div className="service-kpi d-flex flex-row">
                <div className="details d-flex flex-row my-2 mx-2">
                  <i className="far fa-clock"></i>
                  <span className="date-span px-1">09 January</span>
                </div>
                <div className="details d-flex flex-row my-2 mx-2">
                  <i className="far fa-user"></i>
                  <span className="date-span px-1">January</span>
                </div>
                <div className="details d-flex flex-row my-2 mx-2">
                  <i className="far fa-comment-alt"></i>
                  <span className="date-span px-1">09</span>
                </div>
                <div className="details d-flex flex-row my-2 mx-2">
                  <i className="far fa-heart"></i>
                  <span className="date-span px-1">02</span>
                </div>
              </div>
              <div className="blog-title">
                <span>1st Shariah Board Meeting at Salaam Takaful Limited</span>
              </div>
              <div className="blog-view">
                <span>View Details</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 blog-card-main" data-aos="flip-up">
            <div className="card d-flex flex-column">
              <div className="service-card-img">
                <img src={Assets.secondMockBlog} />
              </div>
              <div className="service-kpi d-flex flex-row">
                <div className="details d-flex flex-row my-2 mx-2">
                  <i className="far fa-clock"></i>
                  <span className="date-span px-1">09 January</span>
                </div>
                <div className="details d-flex flex-row my-2 mx-2">
                  <i className="far fa-user"></i>
                  <span className="date-span px-1">January</span>
                </div>
                <div className="details d-flex flex-row my-2 mx-2">
                  <i className="far fa-comment-alt"></i>
                  <span className="date-span px-1">09</span>
                </div>
                <div className="details d-flex flex-row my-2 mx-2">
                  <i className="far fa-heart"></i>
                  <span className="date-span px-1">02</span>
                </div>
              </div>
              <div className="blog-title">
                <span>
                  MOU Signing Between Salaam Takaful Limited & Narejo Human
                  Resources
                </span>
              </div>
              <div className="blog-view">
                <span>View Details</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 blog-card-main" data-aos="flip-up">
            <div className="card d-flex flex-column">
              <div className="service-card-img">
                <img src={Assets.secondMockBlog} />
              </div>
              <div className="service-kpi d-flex flex-row">
                <div className="details d-flex flex-row my-2 mx-2">
                  <i className="far fa-clock"></i>
                  <span className="date-span px-1">09 January</span>
                </div>
                <div className="details d-flex flex-row my-2 mx-2">
                  <i className="far fa-user"></i>
                  <span className="date-span px-1">January</span>
                </div>
                <div className="details d-flex flex-row my-2 mx-2">
                  <i className="far fa-comment-alt"></i>
                  <span className="date-span px-1">09</span>
                </div>
                <div className="details d-flex flex-row my-2 mx-2">
                  <i className="far fa-heart"></i>
                  <span className="date-span px-1">02</span>
                </div>
              </div>
              <div className="blog-title">
                <span>1st Shariah Board Meeting at Salaam Takaful Limited</span>
              </div>
              <div className="blog-view">
                <span>View Details</span>
              </div>
            </div>
          </div>

          <div className="row blog-button mt-5" data-aos="fade-right">
            <div className="col-lg-5"></div>
            <div className="col-lg-2 d-flex justify-content-center">
              <button className="btn takaful-online-btn">All News</button>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>

      {/* Blogs End */}

      <MockOneFooter />
    </div>
  );
}
