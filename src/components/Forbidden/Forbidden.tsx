import { Link } from 'react-router-dom';
import './Forbidden.css';

const Forbidden = () => {
  return (
    <div className="forbidden-page">
      <div className="forbidden-content">
        <h1 className="forbidden-title">403</h1>
        <h2 className="forbidden-subtitle">Access Forbidden</h2>
        <p className="forbidden-message">
          You don’t have permission to access this page. If you believe this is an error, please contact your administrator.
        </p>
        <Link to="/" className="forbidden-home-link">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
