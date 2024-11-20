import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../components/button';
import { Divider } from '../components/divider';
import { IcArrowBack } from '../components/icons/ic-arrow-back';
import { useTokenContext } from '../contexts/tokenContext';
import { useUnauthenticatedServiceContext } from '../contexts/unauthenticatedServiceContext';

export const Login = () => {
  return (
    <div className="flex flex-1 flex-col font-pretendard">
      <ActionBar />
      <Divider />
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
    <div className="grid grid-cols-3 p-2">
      <div
        onClick={handleOnClick}
        className="flex cursor-pointer items-center gap-1"
      >
        <IcArrowBack className="text-black" />
        <div className="font-[500]">뒤로</div>
      </div>
      <div className="text-center font-bold">로그인</div>
    </div>
  );
};

const LoginForm = () => {
  const navigate = useNavigate();
  const { saveToken } = useTokenContext();

  const [loginInput, setLoginInput] = useState({
    id: '',
    password: '',
  });

  const unauthenticatedService = useUnauthenticatedServiceContext();

  const { authService } = unauthenticatedService;

  const disabled = loginInput.id === '' || loginInput.password === '';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authService
      .signIn(loginInput)
      .then((signInResp) => {
        console.debug('token:', signInResp.token);
        saveToken(signInResp.token);
        navigate('/');
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
      className="flex flex-col p-4"
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
      <Divider className="my-2" />
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-dark-grey">
          비밀번호
        </label>
        <input
          className="outline-none"
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
      <Divider className="my-2" />
      <Button color="mint" variant="contained" disabled={disabled}>
        로그인
      </Button>
    </form>
  );
};
