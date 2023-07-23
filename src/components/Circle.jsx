import React from "react";

const Circle = ({ className, color }) => {
  return (
    <svg
      className={className}
      width="520"
      height="520"
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M499.857 260C499.857 392.469 392.469 499.857 260 499.857C127.531 499.857 20.1435 392.469 20.1435 260C20.1435 127.531 127.531 20.1435 260 20.1435C392.469 20.1435 499.857 127.531 499.857 260ZM520 260C520 403.594 403.594 520 260 520C116.406 520 0 403.594 0 260C0 116.406 116.406 0 260 0C403.594 0 520 116.406 520 260ZM260 116.473C277.474 116.473 291.64 102.307 291.64 84.8325C291.64 67.3581 277.474 53.1923 260 53.1923C242.526 53.1923 228.36 67.3581 228.36 84.8325C228.36 102.307 242.526 116.473 260 116.473ZM304.48 260C304.48 284.565 284.565 304.48 260 304.48C235.435 304.48 215.52 284.565 215.52 260C215.52 235.435 235.435 215.52 260 215.52C284.565 215.52 304.48 235.435 304.48 260ZM291.64 435.168C291.64 452.642 277.474 466.808 260 466.808C242.526 466.808 228.36 452.642 228.36 435.168C228.36 417.693 242.526 403.527 260 403.527C277.474 403.527 291.64 417.693 291.64 435.168ZM84.8325 291.64C67.358 291.64 53.1922 277.474 53.1922 260C53.1922 242.526 67.3581 228.36 84.8325 228.36C102.307 228.36 116.473 242.526 116.473 260C116.473 277.474 102.307 291.64 84.8325 291.64ZM403.527 260C403.527 277.474 417.693 291.64 435.168 291.64C452.642 291.64 466.808 277.474 466.808 260C466.808 242.526 452.642 228.36 435.168 228.36C417.693 228.36 403.527 242.526 403.527 260ZM113.765 158.511C101.409 146.155 101.409 126.121 113.765 113.765C126.121 101.409 146.155 101.409 158.511 113.765C170.867 126.121 170.867 146.155 158.511 158.511C146.155 170.867 126.121 170.867 113.765 158.511ZM361.489 361.489C349.133 373.845 349.133 393.879 361.489 406.235C373.845 418.591 393.879 418.591 406.235 406.235C418.591 393.879 418.591 373.845 406.235 361.489C393.879 349.133 373.845 349.133 361.489 361.489ZM158.511 406.235C146.155 418.591 126.121 418.591 113.765 406.235C101.409 393.879 101.409 373.845 113.765 361.489C126.121 349.133 146.155 349.133 158.511 361.489C170.867 373.845 170.867 393.879 158.511 406.235ZM361.489 158.511C373.845 170.867 393.879 170.867 406.235 158.511C418.592 146.155 418.592 126.121 406.235 113.765C393.879 101.409 373.845 101.409 361.489 113.765C349.133 126.121 349.133 146.155 361.489 158.511ZM260 346.7C307.883 346.7 346.7 307.883 346.7 260C346.7 212.117 307.883 173.3 260 173.3C212.117 173.3 173.301 212.117 173.301 260C173.301 307.883 212.117 346.7 260 346.7ZM260 366.843C319.008 366.843 366.843 319.008 366.843 260C366.843 200.992 319.008 153.157 260 153.157C200.992 153.157 153.157 200.992 153.157 260C153.157 319.008 200.992 366.843 260 366.843Z"
        fill={color}
      />
    </svg>
  );
};

export default Circle;