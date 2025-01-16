import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.webp" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4550/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/webdev.png" width={200} />
            <div>
              <h5> CS4550 Web Dev </h5>
              <p className="wd-dashboard-course-title">
                Website Development  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4400/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/pl.png" width={200} />
            <div>
              <h5> CS4400 PL </h5>
              <p className="wd-dashboard-course-title">
                Programming Languages  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2110/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/sportscomm.png" width={200} />
            <div>
              <h5> COMM2110 Sports Comm </h5>
              <p className="wd-dashboard-course-title">
                Sports Communications  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3500/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/ood.png" width={200} />
            <div>
              <h5> CS3500 OOD </h5>
              <p className="wd-dashboard-course-title">
                Object Oriented Design  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3650/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/systems.png" width={200} />
            <div>
              <h5> CS3650 Systems </h5>
              <p className="wd-dashboard-course-title">
                Computer Systems  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2800/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/logic.png" width={200} />
            <div>
              <h5> CS2800 Logic </h5>
              <p className="wd-dashboard-course-title">
                Logic and Computation  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1210/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/coop.png" width={200} />
            <div>
              <h5> CS1210 Co-op </h5>
              <p className="wd-dashboard-course-title">
                Professional Development Co-op  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2310/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/digdes.png" width={200} />
            <div>
              <h5> EECE2310 Digital Design </h5>
              <p className="wd-dashboard-course-title">
                Introduction to Digital Design and Computer Architecture  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2500/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/fundies.png" width={200} />
            <div>
              <h5> CS2500 Fundies 1 </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Computer Science I  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
