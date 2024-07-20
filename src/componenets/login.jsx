import React from 'react';
import image from '../../public/file.png';
import googleLogo from '../../public/file (2).png';
import githubLogo from '../../public/file (1).png';
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from 'mdb-react-ui-kit';

function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen py-2 bg-gray-100">
      <div className="flex flex-wrap justify-center w-full max-w-4xl p-4 bg-white shadow-md rounded-md">
        <div className="w-full md:w-1/2 p-4">
          <img
            src={image}
            className="img-fluid w-full"
            alt="Phone"
          />
        </div>

        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-center">Login to WeatherApp</h2>

          <MDBBtn
            className="mb-4 w-full text-white flex items-center justify-center"
            size="lg"
            style={{ backgroundColor: '#DB4437' }}
          >
            <img src={googleLogo} alt="Google" className="w-6 h-6 mr-2" />
            <span className="font-bold">Continue with Google</span>
          </MDBBtn>

          <MDBBtn
            className="mb-4 w-full text-white flex items-center justify-center"
            size="lg"
            style={{ backgroundColor: '#333' }}
          >
            <img src={githubLogo} alt="GitHub" className="w-6 h-6 mr-2" />
            <span className="font-bold">Continue with GitHub</span>
          </MDBBtn>

        
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
