import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../components/button';
import { Divider } from '../components/divider';
import { IcArrowBack } from '../components/icons/ic-arrow-back';

export const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center font-pretendard">
      <ActionBar />
      <Divider className="w-[375px]" />
      <LoginForm />
    </div>
  );
};

const ActionBar = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <div className="w-[375px] flex items-center justify-between p-2">
      <div
        onClick={handleOnClick}
        className="flex items-center gap-1 cursor-pointer"
      >
        <IcArrowBack className="text-black" />
        <div className="font-[500]">뒤로</div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 font-bold">
        로그인
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const disabled = username === '' || password === '';

  const handleSubmit = () => {
    console.debug('제출 완료');
  };

  const handleOnChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="text-dark-grey">
          아이디
        </label>
        <input
          className="focus:outline-none"
          type="text"
          id="username"
          value={username}
          onChange={handleOnChangeUsername}
          placeholder="아이디를 입력하세요"
          required
        />
      </div>
      <Divider className="w-[311px] mb-2 mt-2" />
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-dark-grey">
          비밀번호
        </label>
        <input
          className="focus:outline-none"
          type="password"
          id="password"
          value={password}
          onChange={handleOnChangePassword}
          placeholder="비밀번호를 입력하세요"
          required
        />
      </div>
      <Divider className="w-[311px] mb-2 mt-2" />
      <Button color="mint" variant="contained" disabled={disabled}>
        로그인
      </Button>
    </form>
  );
};
