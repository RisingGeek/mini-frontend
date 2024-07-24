import React, { useState } from 'react'
import Modal from './Modal'
import ShowPassword from '@/components/ShowPassword';
import HidePassword from '@/components/HidePassword';
import Input from '@/components/Input';
import Button, { ButtonType } from '@/components/Button';

const LoginForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', { email, password });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      title="WELCOME BACK"
      subTitle="Log into your account">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Input
            type="email"
            value={email}
            placeholder="Enter your email or username"
            label="Email or Username"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Enter your password"
            label={(<>Password
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Forgot Password?
              </a>
            </>)}
            required
            labelClass="flex justify-between"
            inputAddonAfter={(<div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500 leading-5 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <ShowPassword /> : <HidePassword />}
            </div>)}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">

          <Button
            type="submit"
            btnType={ButtonType.PRIMARY}
            className="w-full"
            onClick={handleSubmit}
          >
            Login Now
          </Button>
        </div>
        <div>
          <span>Not registered yet?</span>
          <button
            type="submit"
            className="hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register &rarr;
          </button>
          <Button type="button" btnType={ButtonType.PRIMARY}>
            Register &rarr;
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default LoginForm
