import React, { useState } from 'react'
import Modal from '../../components/Modal'
import ShowPassword from '@/components/ShowPassword';
import HidePassword from '@/components/HidePassword';
import Input from '@/components/Input';
import Button, { ButtonType } from '@/components/Button';

const LoginModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [formValues, setFormValues] = useState({username: "", password: ""});
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleRegisterClick = () => {
    
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      title="WELCOME BACK"
      subTitle="Log into your account">
      <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={formValues.username}
            placeholder="Enter your email or username"
            label="Email or Username"
            required
            onChange={(e) => setFormValues({...formValues, username: e.target.value})}
          />
          <Input
            type={showPassword ? "text" : "password"}
            value={formValues.password}
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
            onChange={(e) => setFormValues({...formValues, password: e.target.value})}
          />
          <Button
            type="submit"
            btnType={ButtonType.PRIMARY}
            className="w-full"
            onClick={handleSubmit}
          >
            Login Now
          </Button>
        <div>
          <span className="text-gray-500">Not registered yet?</span>
          <Button
            type="button"
            btnType={ButtonType.TEXT}
            className="text-white"
            onClick={handleRegisterClick}
          >
            Register &rarr;
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default LoginModal;