import React, { useContext, useState } from 'react'
import Modal from '@/components/Modal'
import ShowPassword from '@/components/ShowPassword';
import HidePassword from '@/components/HidePassword';
import Input from '@/components/Input';
import Button, { ButtonType } from '@/components/Button';
import ModalContext from '@/context/ModalContext';
import { ModalId } from '@/interfaces/modal.type';
import UserContext from '@/context/UserContext';

const SignupModal = () => {
    const [formValues, setFormValues] = useState({ email: "", username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const { logIn } = useContext(UserContext);
    const { openModal, closeModal } = useContext(ModalContext);


    // Handle login logic here
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        logIn(formValues.username || formValues.email);
        closeModal();
    };

    const handleLoginClick = () => {
        openModal(ModalId.LOGIN);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Modal
            title="SIGN UP"
            subTitle="Create an account to continue">
            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    value={formValues.email}
                    placeholder="Enter your email"
                    label="Email"
                    required
                    onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                />
                <Input
                    type="text"
                    value={formValues.username}
                    placeholder="Choose a preferred username"
                    label="Username"
                    required
                    onChange={(e) => setFormValues({ ...formValues, username: e.target.value })}
                />
                <Input
                    type={showPassword ? "text" : "password"}
                    value={formValues.password}
                    placeholder="Choose a strong password"
                    label="Password"
                    required
                    labelClass="flex justify-between"
                    inputAddonAfter={(<div
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500 leading-5 cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <ShowPassword /> : <HidePassword />}
                    </div>)}
                    onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                />
                <Button
                    type="submit"
                    btnType={ButtonType.PRIMARY}
                    className="w-full"
                    onClick={handleSubmit}
                    disabled={!(formValues.email || formValues.username)}
                >
                    Continue
                </Button>
                <div>
                    <span className="text-gray-500">Already have an account?</span>
                    <Button
                        type="button"
                        btnType={ButtonType.TEXT}
                        className="text-white"
                        onClick={handleLoginClick}
                    >
                        Login &rarr;
                    </Button>
                </div>
            </form>
        </Modal>
    )
}

export default SignupModal;
