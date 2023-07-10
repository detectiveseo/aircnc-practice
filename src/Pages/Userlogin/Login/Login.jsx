import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { ImSpinner10 } from 'react-icons/im'
import useAuthContext from '../../../components/Shared/Hooks/useAuthContext'
import { toast } from 'react-hot-toast';
import { useRef } from 'react';

const Login = ({ signIn, loading, setLoading, resetPassword, from, handleSingIn, setLogin }) => {
  const navigate = useNavigate();

  // email password login form handle 
  const handleLoginSubmit = (event) => {
    event.preventDefault()
    setLoading(true);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then(res => {
      console.log(res.user);
      setLoading(false)
      navigate(from, {replace: true})
    }).catch(err => {
      setLoading(false);
      toast.error(err.message);
    })
  }

  //handl password reset
  const emailRef = useRef();
  const handlePasswordReset = () => {
    const emailValue = emailRef.current.value;
    if (emailValue === "" || emailValue === NaN || emailValue === undefined || null) {
      toast.error("Please enter your email address")
    } else {
      resetPassword(emailValue).then(res => {
        toast.success("Please check your email for reset password")
        console.log(res);
        setLoading(false);
      }).catch(err => {
        setLoading(false);
        toast.error(err.message);
      })
    }
  }



  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log In</h1>
          <p className='text-sm text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleLoginSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                ref={emailRef}
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >{!loading ? "Continue" : <ImSpinner10 className='m-auto animate-spin' size="24" />}
            </button>
          </div>
        </form>
        <div className='space-y-1'>
          <button
            onClick={handlePasswordReset}
            className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
          onClick={() => handleSingIn()}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don't have an account yet?{' '}
          <span
            onClick={() => setLogin(value => !value)}
            className=' cursor-pointer hover:underline hover:text-rose-500 text-gray-600'
          >
            Sign up
          </span>
          .
        </p>
      </div>
    </div>
  )
}

export default Login