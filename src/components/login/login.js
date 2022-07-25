import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import "./Login.css"
import { routes } from "../AppRoutes/Constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux/es/exports';
import { useAppSelector } from '../../Redux/redux';
import { userLogin } from '../../Redux/reducers/UsersReducer';




const Login = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { error, isAuthenticated } = useAppSelector((state) => state.user);
   const { register, formState: { errors, isValid },
      handleSubmit,
      reset,
   } = useForm({
      mode: 'onBlur'
   });

   useEffect(() => {
      isAuthenticated && navigate(routes.home, { replace: true });
   }, [isAuthenticated])

   const onSubmit = ({ email, password }) => {
      dispatch(userLogin({ email, password }));
      reset();
   }

   return (
      <div className="form-login">
         <h1>Login</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label>
               Email :
               <input
                  {...register('email', {
                     required: 'Обезательное поле к заполнению',
                     minLength: {
                        value: 7,
                        message: 'минимум 7 символов'
                     }
                  })}
               />
            </label>
            <div style={{ height: 40 }}>
               {errors?.email && <p>{errors?.email?.message || 'Error'}</p>}
            </div>
            <label>
               Password:
               <input
                  type='password'
                  {...register('password', {
                     required: 'Обезательное поле к заполнению',
                     minLength: {
                        value: 9,
                        message: 'минимум 9 символов'
                     }
                  })}
               />
            </label>
            <div style={{ height: 40 }}>
               {errors?.password && <p>{errors?.password?.message || 'Error'}</p>}
            </div>
            <Link to={routes.signIn}>create account</Link>
            <div><button type="submit">submit</button></div>
         </form>
      </div>
   )
}

export default Login;