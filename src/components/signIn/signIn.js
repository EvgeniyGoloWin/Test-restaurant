import React from "react";
import { useForm } from "react-hook-form";
import { userRegister } from "../../Redux/reducers/UsersReducer";
import { routes } from "../AppRoutes/Constants";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux/es/exports';
import './SignIn.css'



const SignIn = (props) => {
   const dispatch = useDispatch();
   const { register, formState: { errors },
      handleSubmit,
      reset,
   } = useForm({
      mode: 'onBlur'
   });
   const onSubmit = (data) => {
      console.log(data);
      dispatch(userRegister(data.email, data.password))
      reset();
   }

   return (
      <div className="form-registration">
         <h1>Registration</h1>
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
            <div>
               {errors?.Email && <p>{errors?.Email?.message || 'Error'}</p>}
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
            {/* <label>
               repeat password:
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
            </label> */}
            <div style={{ height: 40 }}>
               {errors?.password && <p>{errors?.password?.message || 'Error'}</p>}
            </div>
            <Link to={routes.login}>login</Link>
            <><button type="submit" >Submit</button></>
         </form>
      </div>
   )
}

export default SignIn;