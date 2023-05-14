import { ComponentProps, FunctionComponent } from "react";

type TIcon = FunctionComponent<ComponentProps<"svg">>;

export const TrashIcon: TIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 7H20" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M10 11V17" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M14 11V17" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    <path
      d="M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7"
      stroke="#888888"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7"
      stroke="#888888"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export const LoadingCircular: TIcon = ({ className = "", ...svgProps }) => {
  return (
    <svg
      className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...svgProps}
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export const WarningIcon: TIcon = (props) => {
  return (
    <svg viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M31 38.75V38.7758M31 23.25V28.4167V23.25Z"
        stroke="#ED4C5C"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12.9168 49.0843H49.0834C49.9264 49.0783 50.7551 48.8663 51.4973 48.4665C52.2394 48.0668 52.8725 47.4915 53.3413 46.7909C53.8101 46.0903 54.1003 45.2856 54.1867 44.447C54.273 43.6085 54.1529 42.7616 53.8368 41.9801L35.4951 10.3343C35.0483 9.52671 34.3933 8.85358 33.5983 8.38485C32.8032 7.91612 31.8972 7.6689 30.9742 7.6689C30.0513 7.6689 29.1453 7.91612 28.3502 8.38485C27.5552 8.85358 26.9002 9.52671 26.4534 10.3343L8.11175 41.9801C7.8016 42.7437 7.67861 43.5704 7.75306 44.3911C7.8275 45.2119 8.09721 46.003 8.53968 46.6983C8.98215 47.3936 9.58454 47.973 10.2965 48.3881C11.0086 48.8031 11.8095 49.0418 12.6326 49.0843"
        stroke="#ED4C5C"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const NotionIcon: TIcon = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="#00A790"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path d="M12 8V12" stroke="#00A790" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M12 16H12.01" stroke="#00A790" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
};

export const SortIconButton: TIcon = (props) => {
  return (
    <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18 24L22 20M22 20L26 24M22 20V34" stroke="#888888" strokeWidth="1.5" strokeLinecap="square"></path>
      <path d="M36 30L32 34M32 34L28 30M32 34V20" stroke="#888888" strokeWidth="1.5" strokeLinecap="square"></path>
      <rect x="0.5" y="0.5" width="53" height="53" rx="26.5" stroke="#E5E5E5"></rect>
    </svg>
  );
};

export const EditIcon: TIcon = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4 19.9998H8L18.5 9.49981C19.0304 8.96938 19.3284 8.24996 19.3284 7.49981C19.3284 6.74967 19.0304 6.03025 18.5 5.49981C17.9696 4.96938 17.2501 4.67139 16.5 4.67139C15.7499 4.67139 15.0304 4.96938 14.5 5.49981L4 15.9998V19.9998Z"
        stroke="#A4A4A4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path d="M13.5 6.49982L17.5 10.4998" stroke="#A4A4A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
};

export const BackIcon: TIcon = (props) => {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6.66675 16L14.6667 24" stroke="#111111" strokeWidth="5" strokeLinecap="square"></path>
      <path d="M6.66675 16L14.6667 8" stroke="#111111" strokeWidth="5" strokeLinecap="square"></path>
    </svg>
  );
};

export const AscDateSort: TIcon = (props) => {
  return (
    <svg viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3.104 4.11398H8.47699" stroke="#16ABF8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M3.104 7.69598H7.283" stroke="#16ABF8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M3.104 11.278H7.283" stroke="#16ABF8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path
        d="M9.6709 9.48697L11.4619 11.278L13.2529 9.48697"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path d="M11.4619 4.11398V11.278" stroke="#16ABF8" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
};

export const DescDateSort: TIcon = (props) => {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3.104 4.50589H7.283" stroke="#16ABF8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M3.104 8.08789H7.283" stroke="#16ABF8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M3.104 11.6699H8.47699" stroke="#16ABF8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path
        d="M9.6709 6.29689L11.4619 4.50589L13.2529 6.29689"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path d="M11.4619 4.50589V11.6699" stroke="#16ABF8" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
};

export const AscIcon: TIcon = (props) => {
  return (
    <svg viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.6709 6.2858V3.30081C9.6709 2.47695 10.041 2.10681 10.8649 2.10681C11.6888 2.10681 12.0589 2.47695 12.0589 3.30081V6.2858M12.0589 4.49481H9.6709"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12.0589 12.8528H9.6709L12.0589 8.6738H9.6709"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path d="M3.104 9.27081L4.895 11.0618L6.686 9.27081" stroke="#16ABF8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M4.89502 3.8978V11.0618" stroke="#16ABF8" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
};

export const DescIcon: TIcon = (props) => {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.6709 13.2447V10.2597C9.6709 9.43586 10.041 9.06572 10.8649 9.06572C11.6888 9.06572 12.0589 9.43586 12.0589 10.2597V13.2447M12.0589 11.4537H9.6709"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12.0589 6.67773H9.6709L12.0589 2.49873H9.6709"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path d="M3.104 9.66272L4.895 11.4537L6.686 9.66272" stroke="#16ABF8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M4.89502 4.28973V11.4537" stroke="#16ABF8" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
};

export const SwapIcon: TIcon = (props) => {
  return (
    <svg viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2.50684 5.47264L4.89483 3.08464M4.89483 3.08464L7.28283 5.47264M4.89483 3.08464V11.4426"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M13.253 9.05463L10.865 11.4426M10.865 11.4426L8.47705 9.05463M10.865 11.4426V3.08464"
        stroke="#16ABF8"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const CheckIcon: TIcon = (props) => {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3.75 9L7.5 12.75L15 5.25" stroke="#4A4A4A" strokeLinecap="square"></path>
    </svg>
  );
};

export const PlusIcon: TIcon = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 4.99988V18.9999" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"></path>
      <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"></path>
    </svg>
  );
};

export const DotPriority: TIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};

export const CloseIcon: TIcon = (props) => {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13.5 4.5L4.5 13.5" stroke="#A4A4A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M4.5 4.5L13.5 13.5" stroke="#A4A4A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  );
};
