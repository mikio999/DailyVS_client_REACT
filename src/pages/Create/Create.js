import React, { useEffect, useState } from 'react';
import { useAuth } from '../../AuthContext';
import styled from 'styled-components';
import CreateTTC from './CreateTTC';
import Carousel from 'react-multi-carousel';
import { MintButton } from '../../components/Atoms/Buttons';
import CreateChoice from './CreateChoice';
import CreateCat from './CreateCat';
import { checkAuthenticated, load_user } from '../../actions/auth';
// 자기가 만든 detail로 redirect
// {
//   "owner": {
//       "nickname": "한소리임당",
//       "age": "20_1",
//       "gender": "W",
//       "mbti": "INFP"
//   },
//   "choice": [
//       {
//           "choice_text": "부먹"
//       },
//       {
//           "choice_text": "찍먹"
//       }
//   ],
//   "category": [
//       {
//           "id": 1,
//       },
//       {
//           "id": 2,
//       },
//       {
//           "id": 3,
//       }
//   ],
//   "title": "test제목",
//   "content": "test내용",
//   "thumbnail": "",
// }
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
  },
};

function Create() {
  const [userInfo, setUserInfo] = useState('');
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

    fetch(`http://127.0.0.1:8000/accounts/user_info/`, {
      headers: config.headers,
    })
      .then(response => response.json())
      .then(result => {
        // const transformedArray = Object.keys(result).map(key => {
        //   const newObj = {};
        //   newObj[key] = result[key];
        //   return newObj;
        // });
        setUserInfo(result);
      });
  }, []);
  console.log('uiuiuiui', userInfo);

  // 넘겨줄 데이터: title, content, thumbnail, category, choice, owner
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

    const sendData = new FormData();

    sendData.append('owner', JSON.stringify(userInfo));

    sendData.append('title', formData.title);
    sendData.append('content', formData.content);
    sendData.append('thumbnail', formData.thumbnail);
    for (let i = 0; i < formData.category.length; i++) {
      sendData.append('category', JSON.stringify(formData.category[i]));
    }
    for (let j = 0; j < formData.choice.length; j++) {
      sendData.append('choice', JSON.stringify(formData.choice[j]));
    }

    sendData.forEach((value, key) => {
      console.log(key, value);
    });

    fetch(`http://localhost:8000/create`, {
      method: 'POST',
      body: sendData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('데이터 받기 성공:', data);
      })
      .catch(error => {
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
          <MintButton
            as="button"
            content={'제출하기'}
            type="submit"
            onClick={handleSubmit}
          />
        ) : (
          <MintButton content={'다음으로'} onClick={() => next()} />
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
export default Create;
