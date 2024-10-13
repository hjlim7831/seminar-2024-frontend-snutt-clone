export const Landing = () => {
  return (
    <div className="mt-69">
      <div className="flex flex-col justify-center items-center gap-4">
        <img src="/logo/waffle.jpeg" width="60px" height="60px" />
        <div className="font-sf-pro text=[21.35px] font-[860] leading-[25.48px] text-center">
          TimeTable
        </div>
      </div>
      <div className="mt-34 flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col items-center justify-center gap-[14px]  font-pretendard text-[14px] font-bold leading-[16.71px] text-left">
          <button className="w-[311px] h-[41px] p-3 rounded-[6px] gap-1 text-white bg-snutt-orange flex items-center justify-center">
            로그인
          </button>
          <button className="">회원가입</button>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-[10px]">
            <Divider />
            <div className="font-pretendard font-[500] text-grey-assistive leading-[16.71px] text-[14px]">
              SNS 계정으로 계속하기
            </div>
            <Divider />
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

const Divider = () => {
  return <div className="w-[100px] bg-grey-assistive h-[0.75px]" />;
};
