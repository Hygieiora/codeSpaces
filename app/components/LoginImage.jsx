import React from 'react';
import Image from 'next/image'

const LoginImage = () => {
  return (
    <div className=" min-h-screen items-center justify-center">
      <img
        src="/images/classic-blue.png"
        alt="Description of the image"
        width={350}
        // height={1000}
        className="ml-auto absolute top-0 right-0"
      />
    </div>
  );
};

export default LoginImage;
