import { useNavigate } from 'react-router-dom';

import { Button } from '../components/button';
import { Divider } from '../components/divider';

export const Landing = () => {
  const navigate = useNavigate();

  const handleOnClickLogin = () => {
    console.debug('클릭 작동');
    navigate('/login');
  };

  return (
    <div className="mt-69">
      <div className="flex flex-col justify-center items-center gap-4">
        <img src="/logo/waffle.jpeg" width="60px" height="60px" />
        <div className="font-sf-pro text=[21.35px] font-[860] leading-[25.48px] text-center">
          TimeTable
        </div>
      </div>
      <div className="mt-34 flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col items-center justify-center gap-[14px]">
          <Button
            onClick={handleOnClickLogin}
            variant="contained"
            color="orange"
          >
            로그인
          </Button>
          <Button variant="text" color="white">
            회원가입
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-[10px]">
            <Divider className="w-25" />
            <div className="font-pretendard font-[500] text-grey-assistive leading-[16.71px] text-[14px]">
              SNS 계정으로 계속하기
            </div>
            <Divider className="w-25" />
          </div>
          <div className="flex gap-3">
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
  className,
  border,
}: SocialLoginButtonProps) => {
  const additionalClassName = className !== undefined ? className : '';
  const borderClass =
    border !== undefined ? 'border border-grey-assistive border-[0.4px]' : '';

  return (
    <img
      src={src}
      alt={alt}
      className={`w-[44px] h-[44px] rounded-full object-cover cursor-pointer ${borderClass} ${additionalClassName}`}
    />
  );
};
