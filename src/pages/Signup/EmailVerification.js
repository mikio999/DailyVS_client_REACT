import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmailVerification = ({ user, code, onClose }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleCodeChange = e => {
    e.preventDefault();
    setVerificationCode(e.target.value); // verificationCode 상태 업데이트
  };

  const submitVerificationCode = async () => {
    if (!verificationCode) {
      setError('인증 코드를 입력하세요.');
      return;
    }

    // 서버로 전송할 데이터 준비
    const requestData = {
      code: verificationCode,
    };

    try {
      // 서버 URL 설정
      const serverUrl = 'http://127.0.0.1:8000/account/email_verification/';

      // POST 요청 보내기
      const response = await fetch(serverUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      // 서버 응답 확인
      if (response.ok) {
        // 인증 성공 시
        setVerificationResult('success');
        alert('이메일 인증 성공! DailyVS에 오신걸 환영합니다!');
        navigate('/login'); // Use navigate for redirection
      } else {
        // 인증 실패 시
        const responseData = await response.json();
        setVerificationResult('failure');
        setError(`인증 실패: ${responseData.message}`);
      }
    } catch (error) {
      console.error('인증 요청 에러:', error);
      setVerificationResult('error');
      setError('인증 요청 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    if (verificationCode) {
      submitVerificationCode();
    }
  }, [verificationCode]);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(verificationCode);
    if (verificationCode) {
      submitVerificationCode();
    }
  };

  return (
    <div className="signup-box">
      <div className="login-box">
        <div className="login-nav">
          <div className="login-name">이메일 인증</div>
        </div>
        <div className="email-container">
          <div className="email-name-row">
            <span style={{ fontFamily: 'GongGothicMedium' }}>
              {user ? user.username : 'Guest'}
            </span>
            <span>님,</span>
          </div>
          이메일 주소를 확인하고 <br />
          아래의 인증 코드를 입력하세요.
        </div>
        <div className="change-pw-container">
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="code" value={code} />
            <div className="form-group">
              <label htmlFor="token">인증 코드</label>
              <input
                type="text"
                id="token"
                name="token"
                className="form-control"
                value={verificationCode}
                onChange={handleCodeChange}
                style={{ height: '50px' }}
              />
            </div>
            <button type="submit">인증하기</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
