import React, { useEffect, useRef, useState } from 'react';
import './ComponentsStyles/HamburgerButton.scss';

const HamburgerButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null); // Ссылка на контейнер меню

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={menuRef} className="hamburger-container">
    <button
      className={`hamburger ${isOpen ? 'open' : ''}`}
      onClick={handleClick}
      aria-label="Меню"
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </button>

    {isOpen && (
        <div className="navbarMenu">
            <a href="#">Услуги</a>
            <a href="#">Галерея</a>
            <a href="/about">О нас</a>
            <a href="#">Контакты</a>
        </div>
  )}
  </div>
  );
};

export default HamburgerButton;