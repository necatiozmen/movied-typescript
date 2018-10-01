import * as React from 'react';
import './PosterCard.css';

interface Props {
  src: string,
  title: string
}

const PosterCard = ({ src, title }: Props) => {
  return (
    <div className="box-main" >
      <div>
        <img className="box-image" src={src} alt="posters" />
      </div>
      <div className="box-title">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default PosterCard;
