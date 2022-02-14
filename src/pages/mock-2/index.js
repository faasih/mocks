import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import AppNavbar from "../../components/navbar";
import dummyData from "../../constants/dummyData";
import Assets from "../../constants/images";
import MockOneFooter from "../mock-1/footer";
import "./styles.css";
export default function SecondMock() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="bg-image-mock-two">
        <AppNavbar bgLogo="true" />
        <div className="container-fluid line-height">
          <div className="row ">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 d-flex justify-content-center">
              <div className="section-title-light">
                <p>Find Your Secure Future In</p>
              </div>
            </div>

            <div className="col-lg-4"></div>
          </div>
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 d-flex justify-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="409.021"
                height="21.8"
                viewBox="0 0 409.021 21.8"
              >
                <g
                  id="Group_839"
                  data-name="Group 839"
                  transform="translate(-752.979 -299.1)"
                >
                  <path
                    id="Polygon_61"
                    data-name="Polygon 61"
                    d="M15.76,0a1,1,0,0,1,.875.516l4.9,8.857a1,1,0,0,1,0,.968l-4.9,8.857a1,1,0,0,1-.875.516H6.04a1,1,0,0,1-.875-.516l-4.9-8.857a1,1,0,0,1,0-.968L5.165.516A1,1,0,0,1,6.04,0Z"
                    transform="translate(967.346 299.1) rotate(90)"
                    fill="#fff"
                  />
                  <line
                    id="Line_9"
                    data-name="Line 9"
                    x1="184.521"
                    transform="translate(977.479 310.5)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <line
                    id="Line_10"
                    data-name="Line 10"
                    x1="184.521"
                    transform="translate(752.979 310.5)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div className="row my-4">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 d-flex justify-content-center">
              <div className="section-heading">
                <p>Salaam Takaful</p>
              </div>
            </div>

            <div className="col-lg-4"></div>
          </div>
          <div className="row my-4">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 d-flex justify-content-center">
              <div className="section-content">
                <p>
                  Salaam Takaful Limited has the expertise and engagements with
                  overseas Re-Takaful operators & assistance companies, enabling
                  it to offer comprehensive coverage for large infrastructure
                  projects
                </p>
              </div>
            </div>

            <div className="col-lg-4"></div>
          </div>
          <div className="row my-4">
            <div className="col-lg-5"></div>
            <div className="col-lg-2 d-flex justify-content-center">
              <div className="slider-button">
                <button className="btn online-takaful-btn">
                  Takaful Online
                </button>
              </div>
            </div>

            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="container-fluid line-height mb-5 "
        id="help"
      >
        <div className="row py-4">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="section-title-bold">
              <p>How may we help you</p>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
        <div className="row py-4">
          <div className="col-lg-3 d-flex justify-content-center">
            <input type="text" className="form-input" placeholder="Name" />
          </div>
          <div className="col-lg-3 d-flex justify-content-center">
            <input type="text" className="form-input" placeholder="Phone" />
          </div>
          <div className="col-lg-3 d-flex justify-content-center">
            <input type="text" className="form-input" placeholder="Email" />
          </div>
          <div className="col-lg-3 d-flex justify-content-center">
            <input type="text" className="form-input" placeholder="Product" />
          </div>
        </div>
        <div className="row py-4 mt-4">
          <div className="col-lg-4 d-flex justify-content-center"></div>
          <div className="col-lg-4 d-flex justify-content-center">
            <button className="btn submit-btn">Submit</button>
          </div>
          <div className="col-lg-4 d-flex justify-content-center"></div>
        </div>
      </div>

      <div className="container-fluid line-height mb-5" id="services">
        <div className="row " data-aos="fade-left">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="section-title-light">
              <p>Find Your Secure Future In</p>
            </div>
          </div>

          <div className="col-lg-4"></div>
        </div>
        <div className="row" data-aos="fade-left">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 d-flex justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="409.021"
              height="21.8"
              viewBox="0 0 409.021 21.8"
            >
              <g
                id="Group_839"
                data-name="Group 839"
                transform="translate(-752.979 -299.1)"
              >
                <path
                  id="Polygon_61"
                  data-name="Polygon 61"
                  d="M15.76,0a1,1,0,0,1,.875.516l4.9,8.857a1,1,0,0,1,0,.968l-4.9,8.857a1,1,0,0,1-.875.516H6.04a1,1,0,0,1-.875-.516l-4.9-8.857a1,1,0,0,1,0-.968L5.165.516A1,1,0,0,1,6.04,0Z"
                  transform="translate(967.346 299.1) rotate(90)"
                  fill="#fff"
                />
                <line
                  id="Line_9"
                  data-name="Line 9"
                  x1="184.521"
                  transform="translate(977.479 310.5)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                />
                <line
                  id="Line_10"
                  data-name="Line 10"
                  x1="184.521"
                  transform="translate(752.979 310.5)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                />
              </g>
            </svg>
          </div>
          <div className="col-lg-4"></div>
        </div>
        <div className="row my-4" data-aos="fade-left">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="section-heading">
              <p>All The Services Rendered By Our Company</p>
            </div>
          </div>
        </div>
        <div className="row py-4 mt-4" data-aos="fade-right">
          {dummyData.servicesData.map((item, index) => {
            return (
              <div
                className="col-lg-4 service-card d-flex justify-content-center"
                key={index}
              >
                <div className="card">
                  <div className="card-image d-flex justify-content-center">
                    <div className="hexagon double"></div>
                    <div className="visible-div">
                      <img src={item.icon} alt={item.title} />
                    </div>
                  </div>
                  <div className="card-title d-flex justify-content-center my-2">
                    <p>{item.title}</p>
                  </div>
                  <div className="card-content my-4 pt-2">
                    <p>{item.details} </p>
                  </div>
                  <div className="d-flex justify-content-center view-detail">
                    <button className="btn submit-btn">view details</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container-fluid line-height mb-5" id="accomplishment">
        <div className="row ">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="section-title-light">
              <p>Accomplishments</p>
            </div>
          </div>

          <div className="col-lg-4"></div>
        </div>
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 d-flex justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="409.021"
              height="21.8"
              viewBox="0 0 409.021 21.8"
            >
              <g
                id="Group_839"
                data-name="Group 839"
                transform="translate(-752.979 -299.1)"
              >
                <path
                  id="Polygon_61"
                  data-name="Polygon 61"
                  d="M15.76,0a1,1,0,0,1,.875.516l4.9,8.857a1,1,0,0,1,0,.968l-4.9,8.857a1,1,0,0,1-.875.516H6.04a1,1,0,0,1-.875-.516l-4.9-8.857a1,1,0,0,1,0-.968L5.165.516A1,1,0,0,1,6.04,0Z"
                  transform="translate(967.346 299.1) rotate(90)"
                  fill="#fff"
                />
                <line
                  id="Line_9"
                  data-name="Line 9"
                  x1="184.521"
                  transform="translate(977.479 310.5)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                />
                <line
                  id="Line_10"
                  data-name="Line 10"
                  x1="184.521"
                  transform="translate(752.979 310.5)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                />
              </g>
            </svg>
          </div>
          <div className="col-lg-4"></div>
        </div>
        <div className="row my-4">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="section-heading">
              <p>Our Achievements</p>
            </div>
          </div>
        </div>

        <div className="row py-4 mt-4">
          <div className="col-lg-5" data-aos="flip-left">
            <div className="row d-flex flex-column">
              {dummyData.accomplishLeftData.map((item, index) => {
                return (
                  <div className="col-lg-12 d-flex flex-row" key={index}>
                    <div className="col-lg-6 d-flex justify-content-center trophy">
                      <div className="hexagon double"></div>
                      <div className="visible-div">
                        <img src={item.icon} alt={item.title} />
                      </div>
                    </div>
                    <div className="col-lg-6 my-4 py-4 d-flex flex-column">
                      <h6 className="py-2">{item.title}</h6>
                      <p className="py-4">{item.details} </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-5" data-aos="flip-right">
            <div className="row d-flex flex-column">
              {dummyData.accomplishRightData.map((item, index) => {
                return (
                  <div className="col-lg-12 d-flex flex-row" key={index}>
                    <div className="col-lg-6 my-4 py-4 d-flex flex-column">
                      <h6 className="py-2">{item.title}</h6>
                      <p className="py-4">{item.details} </p>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center trophy">
                      <div className="hexagon double"></div>
                      <div className="visible-div">
                        <img src={item.icon} alt={item.title} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="image-div mb-5" data-aos="flip-up">
        <div className="container-fluid line-height image-text">
          <div className="row ">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 d-flex justify-content-center">
              <div className="section-title-light">
                <p>Our Blogs</p>
              </div>
            </div>

            <div className="col-lg-4"></div>
          </div>
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 d-flex justify-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="409.021"
                height="21.8"
                viewBox="0 0 409.021 21.8"
              >
                <g
                  id="Group_839"
                  data-name="Group 839"
                  transform="translate(-752.979 -299.1)"
                >
                  <path
                    id="Polygon_61"
                    data-name="Polygon 61"
                    d="M15.76,0a1,1,0,0,1,.875.516l4.9,8.857a1,1,0,0,1,0,.968l-4.9,8.857a1,1,0,0,1-.875.516H6.04a1,1,0,0,1-.875-.516l-4.9-8.857a1,1,0,0,1,0-.968L5.165.516A1,1,0,0,1,6.04,0Z"
                    transform="translate(967.346 299.1) rotate(90)"
                    fill="#fff"
                  />
                  <line
                    id="Line_9"
                    data-name="Line 9"
                    x1="184.521"
                    transform="translate(977.479 310.5)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <line
                    id="Line_10"
                    data-name="Line 10"
                    x1="184.521"
                    transform="translate(752.979 310.5)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div className="row my-4">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="section-heading">
                <p>Latest News Are On Top All Times</p>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 d-flex justify-content-center">
              <div className="section-content">
                <p>
                  Read our fresh blogs and get to know more about Salaam Takaful
                  Limited.
                </p>
              </div>
            </div>

            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>

      <div className="container-fluid line-height" id="blogs">
        <div className="row py-5">
          {dummyData.blogsData.map((item, index) => {
            return (
              <div
                className="col-lg-4 blog-card-main"
                data-aos="flip-up"
                key={index}
              >
                <div className="card d-flex flex-column">
                  <div className="service-card-img">
                    <img src={Assets.secondMockBlog} />
                  </div>
                  <div className="blog-polygon">
                    <img src={Assets.blogPolygon} />
                  </div>
                  <div className="blog-main">
                    <div className="blog-title mt-4">
                      <span>{item.title}</span>
                    </div>
                    <div className="blog-details-view">
                      <button className="btn submit-btn">View Details</button>
                    </div>
                    <div className="blog-description">
                      <span>{item.description}</span>
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container-fluid line-height mb-5 pb-5" id="contact-us">
        <div className="row">
          <div className="col-lg-4 bg-hexagon-div moveArrow">
            {/* <div className=""></div> */}
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center">
            <div className="row ">
              <div className="col-lg-4"></div>
              <div className="col-lg-4 d-flex justify-content-center">
                <div className="section-title-light">
                  <p>Contact Us</p>
                </div>
              </div>

              <div className="col-lg-4"></div>
            </div>
            <div className="row">
              <div className="col-lg-4 "></div>
              <div className="col-lg-4 d-flex justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="409.021"
                  height="21.8"
                  viewBox="0 0 409.021 21.8"
                >
                  <g
                    id="Group_839"
                    data-name="Group 839"
                    transform="translate(-752.979 -299.1)"
                  >
                    <path
                      id="Polygon_61"
                      data-name="Polygon 61"
                      d="M15.76,0a1,1,0,0,1,.875.516l4.9,8.857a1,1,0,0,1,0,.968l-4.9,8.857a1,1,0,0,1-.875.516H6.04a1,1,0,0,1-.875-.516l-4.9-8.857a1,1,0,0,1,0-.968L5.165.516A1,1,0,0,1,6.04,0Z"
                      transform="translate(967.346 299.1) rotate(90)"
                      fill="#fff"
                    />
                    <line
                      id="Line_9"
                      data-name="Line 9"
                      x1="184.521"
                      transform="translate(977.479 310.5)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <line
                      id="Line_10"
                      data-name="Line 10"
                      x1="184.521"
                      transform="translate(752.979 310.5)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1"
                    />
                  </g>
                </svg>
              </div>
              <div className="col-lg-4"></div>
            </div>
            <div className="row my-4">
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="section-heading">
                  <p>Drop Us A Line</p>
                </div>
              </div>
            </div>
            <div className="row line-height" data-aos="fade-right">
              <div className="col-lg-12 d-flex justify-content-center">
                <input type="text" className="form-input" placeholder="Name" />
              </div>
            </div>
            <div className="row my-4" data-aos="fade-right">
              <div className="col-lg-12 d-flex justify-content-center">
                <input type="text" className="form-input" placeholder="Phone" />
              </div>
            </div>
            <div className="row my-4" data-aos="fade-right">
              <div className="col-lg-12 d-flex justify-content-center">
                <input type="text" className="form-input" placeholder="Email" />
              </div>
            </div>
            <div className="row my-4" data-aos="fade-right">
              <div className="col-lg-12 d-flex justify-content-center">
                <textarea
                  type="text"
                  className="form-input"
                  placeholder="Message"
                />
              </div>
            </div>
            <div className="row py-4 mt-4" data-aos="fade-up">
              <div className="col-lg-12 d-flex justify-content-center">
                <button className="btn submit-btn">Submit</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
      <MockOneFooter />
    </div>
  );
}
