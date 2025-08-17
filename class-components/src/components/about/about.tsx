import reactLogo from '../../assets/github-original.svg';
import rollLogo from '../../assets/rs_school_js(1).svg';


function Aboutcomp() {
    return (
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-block">
            <a href="https://github.com/hitman46923">
            <img src={reactLogo} width="50" height="50" alt="React logo" />

            </a>
          </div>
          <h3 className="footer-title">2025</h3>
          <div className="footer-block">
            <a href="https://rs.school/courses/reactjs">
              <img className="rss-img" src={rollLogo} alt="RS School logo" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Aboutcomp;