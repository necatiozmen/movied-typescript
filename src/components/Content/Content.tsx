import * as React from 'react';
import PosterCard from '../PosterCard/PosterCard';
import './Content.css';

interface ParentProps {
  entries: Array<any>
  isReady: boolean,
  isSomethingWrong: boolean,
}

const Content = ({ entries, isReady, isSomethingWrong }: ParentProps) => {
  const listItems = () => {
    if (!isSomethingWrong) {
      return entries.map((item, index) =>
       <PosterCard
         key={index}
         src={item.images['Poster Art'].url}
         title={item.title}
       />
      );
    }

    return <div><p>Oops.. Something went wrong</p></div>;
  };

  let content = !isReady && !isSomethingWrong
    ? <div>Loading...</div>
    : listItems();

  return (
    <div className="content-container">
      <div className="inner-container">
        {content}
      </div>
    </div>
  );
};


export default Content;
