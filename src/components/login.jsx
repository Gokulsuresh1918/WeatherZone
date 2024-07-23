import React from 'react';
import image from '../public/file.png';
import googleLogo from '../public/google.png';
import githubLogo from '../public/github.png';
import { MDBBtn } from 'mdb-react-ui-kit';

function LoginPage() {
  function googleAuth() {
    console.log('Server URL:'); 
    window.open(`http://localhost:3001/auth/google/callback`, "self");
    // window.open(`https://weatherzoneserver-1.onrender.com/auth/google/callback`, "self");
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen py-2 bg-gray-100">
      <div className="flex flex-wrap justify-center w-full max-w-4xl p-4 bg-white shadow-md rounded-md">
        <div className="w-full md:w-1/2 p-4">
          <img src={image} className="img-fluid w-full" alt="Phone" />
        </div>

        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 text-center">Login to WeatherApp</h2>

          <MDBBtn
            className="mb-4 w-full border rounded-xl shadow-xl text-white bg-slate-200 flex items-center justify-center"
            size="lg"
            onClick={googleAuth}
            
          >
            <img src={githubLogo} alt="Google" className="w-16 h-16 m-2" />
            <span className="font-bold text-black">Continue with Google</span>
          </MDBBtn>
{/* 
          <MDBBtn
            className="mb-4 w-full text-white flex items-center justify-center"
            size="lg"
            style={{ backgroundColor: '#333' }}
          >
            <img src={githubLogo} alt="GitHub" className="w-6 h-6 mr-2" />
            <span className="font-bold">Continue with GitHub</span>
          </MDBBtn> */}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
