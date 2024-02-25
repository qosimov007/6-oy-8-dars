import React, { useState, useEffect } from 'react';
import './App.css';





function App() {


 
  

  
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const getTranslatedText = () => {
    switch (selectedLanguage) {
      case 'uz':
        return {
          aboutMe: 'Men haqimda',
          skills: 'Bilimlar',
          projects: 'Loyihalar',
          contact: 'Aloqa',
          hi: 'Salom',
          name: 'Charles',
          role: 'Front-end Developer',
          experience: 'Web va Mobile ilovalar orqali odamlarning hayotini sodda qiladigan tajribalarni dizayn qilaman va rivojlantiraman. Figma, HTML5, CSS3, JavaScript, React, ReactNative va Flutter bilan ishlashni o\'rganganman.',
          hireButton: 'Mening xizmatimni sotib oling',
          projectsButton: 'Loyihalarimni ko\'ring'
        };
      case 'ru':
        return {
          aboutMe: 'Обо мне',
          skills: 'Навыки',
          projects: 'Проекты',
          contact: 'Контакт',
          hi: 'Привет',
          name: 'Чарльз',
          role: 'Фронтенд Разработчик',
          experience: 'Я дизайнирую и разрабатываю опыты, которые упрощают жизнь людей через веб- и мобильные приложения. Я работаю с Figma, HTML5, CSS3, JavaScript, React, ReactNative и Flutter.',
          hireButton: 'Нанять меня',
          projectsButton: 'Посмотреть мои проекты'
        };
      default: // 'en' or any other case
        return {
          aboutMe: 'About Me',
          skills: 'Skills',
          projects: 'Projects',
          contact: 'Contact',
          hi: 'Hi',
          name: 'Charles',
          role: 'Front-end Developer',
          experience: 'I design and develop experiences that make people’s lives simpler through Web and Mobile apps. I work with Figma, HTML5, CSS3, JavaScript, React, ReactNative, and Flutter.',
          hireButton: 'HIRE ME',
          projectsButton: 'SEE MY PROJECTS'
        };
    }
  };

  const translatedText = getTranslatedText();








  return (

    <>

    
      <div className="portfolio">

      

        <div className="container">
          <nav className='nav'>
            <ul>
              <li>{translatedText.aboutMe}</li>
              <li>{translatedText.skills}</li>
              <li>{translatedText.projects}</li>
              <li>{translatedText.contact}</li>
            </ul>
            <div className="language-select">
        <select className='select' id="language" value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="uz">O'zbekcha</option>
        </select>
      </div>
          </nav>

          <div className="main">
            <div className="text-container">
              <h1>{translatedText.hi} <img className='img' src="src/img/Emoji.png" alt=""/> , <br /> I’m {translatedText.name}, <br /> {translatedText.role}</h1>
              <p>{translatedText.experience}</p>

              <div className="button-group">
                <button className='btn1'>{translatedText.hireButton}</button>
                <button className='btn2'>{translatedText.projectsButton}</button>
              </div>
            </div>

            <img className='Group' src="src/img/Group 1.png" alt="" />
          </div>
        </div>
      </div>
    
     
    </>
  );
}

export default App;