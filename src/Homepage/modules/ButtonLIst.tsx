import React, { useState } from 'react';

interface ButtonItem {
  text: string;
  imageUrl: string;
}

interface ButtonListProps {
  buttonItems: ButtonItem[];
}

const ButtonList: React.FC<ButtonListProps> = ({ buttonItems }) => {
  const [selectedItem, setSelectedItem] = useState<ButtonItem>(buttonItems[0]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleButtonClick = (index: number, item: ButtonItem) => {
    setActiveIndex(index);
    setSelectedItem(item);
  };

  return (
    <>
    <div className='upperCont'>
      {buttonItems.map((item, index) => (
        <button key={index} className='service'
        onClick={() => handleButtonClick(index, item)}
        style={{backgroundColor: activeIndex === index ? '#e0e0e0' : '#EFEFEF'}}
        >
          {item.text}
        </button>
      ))}
    </div>
    <div className="contSecond">
      <div className="leftCont">
          {selectedItem.text}
        <img src={selectedItem?.imageUrl} alt={selectedItem?.text} />
      </div>
      <div className="rightCont">
        <div className="contInfo">
          Lorem ipsum dolor sit amet.
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam dolores nulla, veniam exercitationem beatae sunt.</p>
        </div>
        <div className="contSlim">
          <a href="#" className="moreInfo">Узнать больше о процедурах</a>
          <a href='#' className="takeService">Записаться</a>
        </div>
      </div>
    </div>
            </>
  );
};

export default ButtonList;