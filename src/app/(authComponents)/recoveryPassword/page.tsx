"use client"

import { useRouter } from 'next/navigation';
import React from 'react'  

import { validationRecoberyPassword } from '@/app/lib/validation/validationrecoberyPassword';
import { User } from '@/icons/Icons';

import ButtonNext from '@/components/Next_ui_elements/button/ButtonNext';
import InputEmail from '@/components/Next_ui_elements/inputEmail/InputEmail'
import CustomLink from '@/components/my-components/link/Link';
import ApiRequest from '@/services/ApiRequest';
import ErrorMessage from '../../../messages/ErrorMessage';

const RecoveryPassword = () => {
  const router = useRouter();


  const handleRecoveryPassword =async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { email } = Object.fromEntries(formData);
    const validatedFields = validationRecoberyPassword.safeParse({
      email: email,
    })

    if (!validatedFields.success) {
      const firstError = validatedFields.error.errors[0];
      const messageError = String(firstError.message);
      ErrorMessage(messageError);
    }if (validatedFields.success) {

      try {
        const response = await ApiRequest({
          method: 'POST',
          url: 'https://eclipse-production-cfda.up.railway.app/api/User/ChangePassword',
          body: {
            email: email,            
          },
        });

        if (response?.status === 200) {
          if (typeof email === 'string') {
            localStorage.setItem('email', email);
          } else {
            console.error('El valor del email no es una cadena de texto.');
          }
          router.push('/verifyCode');
        } else {
          ErrorMessage('Credenciales incorrectas');
        }

      } catch (error) {
        console.log(error)
      }

    }

  }





  return (
    <>
      <div className="h-screen w-screen bg-[url('/images/fondo/1.webp')] bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center items-center h-full ">
          <div className="border border-t-small border-solid w-80 h-60 rounded-2xl bg-gradient-to-b from-blue-400 to-blue-700 ">
            <div className="flex justify-center mb-4 mt-4">
              <User className="text-5xl text-white opacity-90" />
            </div>

            <form onSubmit={handleRecoveryPassword}>
              <div className="flex items-center justify-center flex-grow flex-col">
                <div className="mb-4 w-2/3">
                  <InputEmail
                    name="email"                    
                  />
                </div>

                <div className="mt-3 w-2/3">
                  <ButtonNext
                    text="Confirmar"
                    type="submit"
                  />
                </div>

              </div>
            </form>

            <div className="flex justify-between mt-4 mx-2">
              <CustomLink
                href="/"
                text="Cancelar"
                className="text-white"
              />
              <CustomLink
                href="/login"
                text="Login"
                className="text-white"
              />
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default RecoveryPassword;