import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='py-5'>
      <div className='container mx-auto flex justify-center'>
        <div className='p-5 flex flex-col items-center hero-card bg-light w-3/4'>
          <h1 className='text-center mb-4'>MERN Authentication</h1>
          <p className='text-center mb-4'>
            This is a boilerplate for MERN authentication that stores a JWT in
            an HTTP-Only cookie. It also uses Redux Toolkit and Tailwind css
          </p>
          <div className='flex'>
            <Link to='/login' className='btn-primary me-3'>
              Sign In
            </Link>
            <Link to='/register' className='btn-secondary'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;