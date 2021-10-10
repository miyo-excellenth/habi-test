import { Link } from 'react-router-dom';

import { notFoundImage } from '../assets/images';

import '../styles/pages/not-found-page.scss';

export default function NotFoundPage(props) {
  return (
    <div className="not-found-page">
      <img src={notFoundImage} alt="Not Found Image" />

      <Link exact to="/">
        <button>Go to home page</button>
      </Link>
    </div>
  );
}
