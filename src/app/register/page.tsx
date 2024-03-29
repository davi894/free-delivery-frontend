"use client";
import { useState } from "react";
import Link from "next/link";
import { SvgPasswordPadlockHidden, SvgPasswordPadlockShow } from "@/components/svg/svg";
import registerValidation from "@/library/yup/validations/register";
import { TypeRegisterValidation } from "../global/interfaces/globals";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function Register() {
    const [isHiddenPassword, setIsHiddenPassword] = useState(true);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TypeRegisterValidation>({
        resolver: yupResolver(registerValidation)
    });
    const handlePasswordVisibility = () => {
        setIsHiddenPassword(!isHiddenPassword);
    };
    const onSubmitRegister = (data: TypeRegisterValidation) => {
        reset()
    }
    return (
        <main className="h-3/4">
            <section className="h-full p-2 flex justify-center items-center">
                <form onSubmit={handleSubmit(onSubmitRegister)} className="bg-slate-100 mt-28 p-3 shadow-2xl space-y-5 h-auto">
                    <fieldset className="p-1">
                        <legend className={`font-bold flex items-center ${errors.name && 'text-red-500'}`}>
                            NAME
                        </legend>
                        <input type="text" className={`border h-full w-full p-2 bg-transparent ${errors.name && 'border-red-500'} `} {...register('name')} />
                    </fieldset>
                    {errors.name && <span className="text-xs m-0 ms-1 font-bold text-red-500">{errors.name.message}</span>}
                    <fieldset className="p-1">
                        <legend className={`font-bold flex items-center ${errors.email && 'text-red-500'}`}>
                            EMAIL
                        </legend>
                        <input type="text" className={`border h-full w-full p-2 bg-transparent ${errors.email && 'border-red-500'}`} {...register('email')} />
                    </fieldset>
                    {errors.email && <span className="text-xs m-0 ms-1 font-bold text-red-500">{errors.email.message}</span>}
                    {
                        isHiddenPassword && (
                            <>
                                <fieldset className="p-1">
                                    <legend className={`font-bold flex items-center`}>
                                        PASSWORD
                                    </legend>
                                    <input type="password" className={`border h-full w-full p-2 bg-transparent ${errors.password && 'border-red-500'}`} {...register('password')} />
                                </fieldset>
                                {errors.password && <span className="text-xs m-0 ms-1 font-bold text-red-500">{errors.password.message}</span>}
                                <fieldset className="p-1">
                                    <legend className={`font-bold flex items-center`}>
                                        CONFIRM PASSWORD
                                    </legend>
                                    <input type="password" className={`border h-full w-full p-2 bg-transparent ${errors.confirmPassword && 'border-red-500'}`} {...register('confirmPassword')} />
                                </fieldset>
                                {errors.confirmPassword && <span className="text-xs m-0 ms-1 font-bold text-red-500">{errors.confirmPassword.message}</span>}
                            </>
                        )
                    }
                    {
                        !isHiddenPassword && (
                            <>
                                <fieldset className="p-1">
                                    <legend className={`font-bold flex items-center`}>
                                        PASSWORD
                                    </legend>
                                    <input type="text" className={`border h-full w-full p-2 bg-transparent ${errors.password && 'border-red-500'}`} {...register('password')} />
                                </fieldset>
                                {errors.password && <span className="text-xs m-0 ms-1 font-bold text-red-500">{errors.password.message}</span>}
                                <fieldset className="p-1">
                                    <legend className={`font-bold flex items-center`}>
                                        CONFIRM PASSWORD
                                    </legend>
                                    <input type="text" className={`border h-full w-full p-2 bg-transparent ${errors.confirmPassword && 'border-red-500'}`} {...register('confirmPassword')} />
                                </fieldset>
                                {errors.confirmPassword && <span className="text-xs m-0 ms-1 font-bold text-red-500">{errors.confirmPassword.message}</span>}
                            </>
                        )
                    }
                    <div className="relative p-1">
                        {
                            isHiddenPassword && (
                                <span className={`absolute top-0 left-0 cursor-pointer`} onClick={handlePasswordVisibility}>
                                    <SvgPasswordPadlockHidden />
                                </span>
                            )
                        }
                        {
                            !isHiddenPassword && (
                                <span className={`absolute top-0 left-0 cursor-pointer`} onClick={handlePasswordVisibility}>
                                    <SvgPasswordPadlockShow />
                                </span>
                            )
                        }
                    </div>
                    <button className="p-1 font-bold text-2xl w-full h-full flex justify-center bg-emerald-500">
                        REGISTER
                    </button>
                    <div className="text-center font-bold justify-center mt-0.5 w-full">
                        <Link href="/" prefetch={false} >Login</Link>
                    </div>
                </form>
            </section >
        </main>
    );
};