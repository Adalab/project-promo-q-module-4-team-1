import logo from '../images/logo-git-brunch.png';

import '../styles/App.scss';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SendToApi from '../services/SendToApi';
import localStorage from '../services/localStorage';

import Footer from './Footer';
import Card from './Card';
import Landing from './Landing';

function App () {
  const [isCollapsed, setIsCollapsed] = useState(1);

  const [resultCard, setResultCard] = useState({});
  const [dataCard, setDataCard] = useState(
    localStorage.get('userData', {
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: logo,
    })
  );

  const [avatar, setAvatar] = useState(logo);
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
    setDataCard({ ...dataCard, photo: avatar });
  };

  useEffect(() => {
    localStorage.set('userData', dataCard);
  }, [dataCard]);

  const handleCreatedCard = () => {
    SendToApi(dataCard).then((info) => {
      setResultCard(info);
    });
  };
  const handleInput = (data) => {
    const inputValue = data.value;
    const inputName = data.name;
    setDataCard({
      ...dataCard,
      [inputName]: inputValue,
    });
  };

  const handleReset = (event) => {
    event.preventDefault();
    setAvatar(logo);
    setDataCard({
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: logo,
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/card"
          element={
            <Card
              logo={logo}
              resultCard={resultCard}
              handleCreatedCard={handleCreatedCard}
              handleInput={handleInput}
              dataCard={dataCard}
              handleReset={handleReset}
              avatar={avatar}
              updateAvatar={updateAvatar}
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}

            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
