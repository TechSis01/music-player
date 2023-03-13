import { NavLink, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { FiHome } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { FiVoicemail } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiFilm } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import lady from "../assets/image/whitebabe.jpg";
function SideBarLayout() {
  return (
    <Fragment>
      <section className="main-body">
        <aside>
          <nav>
            <div className="three-dots">
              <div id="first-dot" className="circle"></div>
              <div id="second-dot" className="circle"></div>
              <div id="third-dot" className="circle"></div>
            </div>
            <div className="brand-name">
              <h1>
                <span>Bee</span>Music
              </h1>
            </div>
            <div className="sidebar-links">
              <NavLink to="">
                <FiHome className="icons" />
                Home
              </NavLink>
            </div>
            <div className="sidebar-links">
              <NavLink to="trends">
                <FiTrendingUp className="icons" />
                Trends
              </NavLink>
            </div>
            <div className="sidebar-links">
              <NavLink to="feed">
                <FiVoicemail className="icons" />
                Feed
              </NavLink>
            </div>
            <p>Discover</p>
            <div className="sidebar-links">
              <NavLink to="new">
                <FiGrid className="icons" />
                New and Notable
              </NavLink>
            </div>
            <div className="sidebar-links">
              <NavLink to="calendar">
                <FiCalendar className="icons" />
                Release Calendar
              </NavLink>
            </div>
            <div className="sidebar-links">
              <NavLink to="events">
                <FiFilm className="icons" />
                Events
              </NavLink>
            </div>
            <p>Your Collection</p>
            <div className="sidebar-links">
              <NavLink to="favesongs">
                <FiHeart className="icons" />
                Favorite Songs
              </NavLink>
            </div>
            <div className="sidebar-links">
              <NavLink to="artists">
                <FiUsers className="icons" />
                Artist
              </NavLink>
            </div>

            <div className="sidebar-links">
              <NavLink to="albums">
                <FiStar className="icons" />
                Albums
              </NavLink>
            </div>
          </nav>
          <div className="captari-tyers">
            <div className="sidebar-links">
              <img src={lady} alt="image of a lady" className="lady-img"></img>
              <h5>Captari Tyers</h5>
              <FiChevronRight />
            </div>
          </div>
        </aside>
        <main>
          <Outlet />
        </main>
      </section>
    </Fragment>
  );
}

export default SideBarLayout;
