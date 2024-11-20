import { useNavigate } from 'react-router-dom';

import { Button } from '../components/button';
import { Divider } from '../components/divider';

export const Landing = () => {
  const navigate = useNavigate();

  const handleOnClickLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex h-dvh flex-col justify-center">
      <div className="flex flex-col items-center gap-4">
        <img src="/logo/waffle.jpeg" width="60px" height="60px" />
        <div className="text=[21.35px] text-center font-sf-pro font-[860] leading-[25.48px]">
          TimeTable
        </div>
      </div>
      <div className="mt-34 flex flex-col justify-center gap-10">
        <div className="flex flex-col gap-3.5 px-10">
          <Button
            onClick={handleOnClickLogin}
            variant="contained"
            color="orange"
          >
            로그인
          </Button>
          <div className="flex justify-center">
            <Button variant="text" color="white">
              회원가입
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-[10px] px-5">
            <Divider className="flex-1" />
            <div className="font-pretendard text-[14px] font-[500] leading-[16.71px] text-grey-assistive">
              SNS 계정으로 계속하기
            </div>
            <Divider className="flex-1" />
          </div>
          <div className="flex justify-center gap-3">
            <SocialLoginButton src="/logo/kakao.png" alt="kakaoLogin" />
            <SocialLoginButton
              src="/logo/google.png"
              alt="googleLogin"
              border
            />
            <SocialLoginButton src="/logo/facebook.png" alt="facebookLogin" />
            <SocialLoginButton src="/logo/apple.png" alt="appleLogin" />
          </div>
        </div>
      </div>
    </div>
  );
};

type SocialLoginButtonProps = {
  src: string;
  alt?: string;
  className?: string;
  border?: boolean;
};

const SocialLoginButton = ({
  src,
  alt,
  className = '',
  border,
}: SocialLoginButtonProps) => {
  const borderClass =
    border !== undefined ? 'border border-grey-assistive border-[0.4px]' : '';

  return (
    <img
      src={src}
      alt={alt}
      className={`h-11 w-11 cursor-pointer rounded-full object-cover ${borderClass} ${className}`}
    />
  );
};
