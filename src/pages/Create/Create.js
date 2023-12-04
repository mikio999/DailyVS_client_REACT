import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CreateTTC from './CreateTTC';
import Carousel from 'react-multi-carousel';
import { MintButton } from '../../components/Atoms/Buttons';
import CreateChoice from './CreateChoice';
import CreateCat from './CreateCat';
import { checkAuthenticated, load_user } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';
import preventTab from '../../utils/preventTab';
import Sending from '../../components/Atoms/Sending';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    keyBoardControl: false,
    onkeydown: preventTab,
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    keyBoardControl: false,
    onkeydown: preventTab,
  },
  mobile: {
    breakpoint: { max: 767, min: 200 },
    items: 1,
    keyBoardControl: false,
    onkeydown: preventTab,
  },
};

function Create() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState('');
  const [isSending, setIsSending] = useState(false);

  const isFormValid = () => {
    const { title, content, thumbnail, category, choice } = formData;
    return (
      title && content && thumbnail && category.length > 0 && choice.length > 0
    );
  };

  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem('access');
    if (!accessToken) {
      return;
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    };

    fetch(`${process.env.REACT_APP_HOST}/accounts/user_info/`, {
      headers: config.headers,
    })
      .then(response => response.json())
      .then(result => {
        setUserInfo(result);
      });
  }, []);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    thumbnail: '',
    category: [],
    choice: [],
  });

  const dataProps = {
    formData,
    setFormData,
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (!isFormValid()) {
      return alert('필수 항목을 전부 기입해주세요!');
    }
    isSending(true);
    const sendData = new FormData();

    sendData.append('owner', JSON.stringify(userInfo));
    sendData.append('title', formData.title);
    sendData.append('content', formData.content);
    sendData.append('thumbnail', formData.thumbnail);

    const hasDuplicateChoices = choices => {
      const choiceTexts = new Set();

      for (const choice of choices) {
        if (choiceTexts.has(choice.choice_text)) {
          return true;
        }
        choiceTexts.add(choice.choice_text);
      }

      return false;
    };
    const formChoices = formData.choice;

    if (hasDuplicateChoices(formChoices)) {
      alert('선택지의 내용은 다르게 바꿔주세요 :)');
      return;
    }

    for (let i = 0; i < formData.category.length; i++) {
      sendData.append('category', JSON.stringify(formData.category[i]));
    }
    for (let j = 0; j < formData.choice.length; j++) {
      sendData.append('choice', JSON.stringify(formData.choice[j]));
    }

    const accessToken = localStorage.getItem('access');
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${accessToken}`);
    fetch(`${process.env.REACT_APP_HOST}/create`, {
      method: 'POST',
      body: sendData,
      headers: headers,
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          alert(data.error, '필수 정보를 전부 입력하였는지 확인해주세요!!');
        } else {
          isSending(false);
          navigate(`/vote-detail/${data.id}`);
        }
      })
      .catch(error => {
        isSending(false);
        console.error(error);
      });
  };

  const CustomButtonGroup = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <ButtonGroup>
        {currentSlide === 0 ? null : (
          <MintButton content={'이전으로'} onClick={() => previous()} />
        )}
        {currentSlide === 2 ? (
          !isSending ? (
            <>
              <MintButton
                as="button"
                content={'제출하기'}
                type="submit"
                onClick={handleSubmit}
                disabled={!isFormValid()}
                onkeydown={preventTab}
              />
            </>
          ) : (
            <DataSending>
              <Sending />
            </DataSending>
          )
        ) : (
          <MintButton
            content={'다음으로'}
            onClick={() => next()}
            onkeydown={preventTab}
          />
        )}
      </ButtonGroup>
    );
  };
  return (
    <Container onSubmit={handleSubmit}>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={false}
        partialVisible={false}
        arrows={false}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside
        customButtonGroup={<CustomButtonGroup />}
        keyBoardControl={false}
        onkeydown={preventTab}
      >
        <CreateTTC {...dataProps} />
        <CreateChoice {...dataProps} />
        <CreateCat {...dataProps} />
      </Carousel>
    </Container>
  );
}

const Container = styled.form`
  width: min(100%, 1200px);
  margin: 0 auto 100px;
  position: relative;
  padding: 0 20px;
`;

const ButtonGroup = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: min(100%, 400px);
  height: 56px;
  & > div,
  & > button {
    flex: 1;
  }
`;

const DataSending = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Create;
