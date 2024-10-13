import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../components/button';
import { Divider } from '../components/divider';
import { IcArrowBack } from '../components/icons/ic-arrow-back';
import { useServiceContext } from '../contexts/serviceContext';
import type { Token } from '../entities/auth';

type LoginProps = {
  saveToken: (t: Token) => void;
};

export const Login = ({ saveToken }: LoginProps) => {
  return (
    <div className="flex flex-col justify-center items-center font-pretendard">
      <ActionBar />
      <Divider className="w-[375px]" />
      <LoginForm saveToken={saveToken} />
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

const LoginForm = ({ saveToken }: LoginProps) => {
  const navigate = useNavigate();

  const [loginInput, setLoginInput] = useState({
    id: '',
    password: '',
  });

  const { authService } = useServiceContext();

  const disabled = loginInput.id === '' || loginInput.password === '';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authService
      .signIn(loginInput)
      .then((signInResp) => {
        saveToken(signInResp.token);
        navigate('/me');
      })
      .catch(() => {
        setLoginInput({ id: '', password: '' });
        alert('틀렸습니당~!');
      });
  };

  const handleInputChange = (
    field: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLoginInput((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <form
      className="p-4"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="id" className="text-dark-grey">
          아이디
        </label>
        <input
          className="focus:outline-none"
          type="text"
          id="id"
          value={loginInput.id}
          onChange={(e) => {
            handleInputChange('id', e);
          }}
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
          value={loginInput.password}
          onChange={(e) => {
            handleInputChange('password', e);
          }}
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
