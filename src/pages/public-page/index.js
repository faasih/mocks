import aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TopBarPublicPage from "../../components/public-top-bar";
import Assets from "../../constants/images";
import "./styles.css";
export default function PublicPage() {
  useEffect(() => {
    aos.init({ duration: 4000 });
  }, []);

  return (
    <>
      <section>
        <TopBarPublicPage />
        <div className="container mt-5 py-5">
          <div className="row">
            <div
              className="col-lg-4 d-flex justify-content-center"
              data-aos="fade-up"
            >
              <div className="card">
                <div className="content">
                  <div className="imgBx">
                    <img src={Assets.mock1preview} />
                  </div>
                  <div className="contentBx">
                    <h3>
                      First Mock
                      <br />
                      <span>Dark theme based Home Page, with transitions.</span>
                    </h3>
                  </div>
                </div>
                <ul className="sci">
                  <Link
                    to="/mock-1"
                    target={"_blank"}
                    style={{ textDecoration: "none" }}
                  >
                    <span>Visit</span>
                  </Link>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-4 d-flex justify-content-center "
              data-aos="flip-up"
            >
              <div className="card">
                <div className="content">
                  <div className="imgBx">
                    <img src={Assets.mock2preview} />
                  </div>
                  <div className="contentBx">
                    <h3>
                      Second Mock
                      <br />
                      <span>Dark theme based Home Page, with transitions.</span>
                    </h3>
                  </div>
                </div>
                <ul className="sci">
                  <Link
                    to="/mock-2"
                    target={"_blank"}
                    style={{ textDecoration: "none" }}
                  >
                    <span>Visit</span>
                  </Link>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-4 d-flex justify-content-center"
              data-aos="flip-up"
            >
              <div className="card">
                <div className="content">
                  <div className="imgBx">
                    <img src={Assets.mock3preview} />
                  </div>
                  <div className="contentBx">
                    <h3>
                      Third Mock
                      <br />
                      <span>
                        Light theme based Home Page, with transitions.
                      </span>
                    </h3>
                  </div>
                </div>
                <ul className="sci">
                  <Link
                    to=""
                    target={"_blank"}
                    style={{ textDecoration: "none" }}
                  >
                    <span>Visit</span>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
