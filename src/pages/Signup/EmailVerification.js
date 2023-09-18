import React, { useState, useEffect } from 'react';

const EmailVerification = ({ user, code, onClose }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const handleCodeChange = e => {
    setVerificationCode(e.target.value);
  };

  useEffect(() => {
    const submitVerificationCode = async () => {
      // 서버로 전송할 데이터 준비
      const requestData = {
        code: verificationCode,
      };

      try {
        // 서버 URL 설정
        const serverUrl = 'YOUR_SERVER_ENDPOINT'; // 백엔드 서버의 엔드포인트 URL로 바꾸세요

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
        } else {
          // 인증 실패 시
          const responseData = await response.json();
          setVerificationResult('failure');
          alert(`인증 실패: ${responseData.message}`);
        }
      } catch (error) {
        console.error('인증 요청 에러:', error);
        // 에러 처리 로직 추가
        setVerificationResult('error');
        alert('인증 요청 중 오류가 발생했습니다.');
      }
    };

    if (verificationCode) {
      submitVerificationCode();
    }
  }, [verificationCode]);
  const handleSubmit = e => {
    e.preventDefault();
    // handleSubmit에서 아무런 작업을 하지 않아도 됩니다.
    // 대신, useEffect 내부에서 작업이 처리됩니다.
  };

  return (
    <div className="signup-box">
      <div className="login-box">
        <div className="login-nav">
          <span>
            <a href="/">
              <img
                src="/static/img/icon/left_page.png"
                style={{ width: '30px' }}
              />
            </a>
          </span>
          <div className="login-name">이메일 인증</div>
        </div>
        <div className="email-container">
          <div className="email-name-row">
            <span style={{ fontFamily: 'GongGothicMedium' }}>
              {user.username}
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
                style={{ height: '50px' }}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              인증하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
