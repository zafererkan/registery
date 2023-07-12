import React from 'react'
import { useFormik } from 'formik';
import { basicSchema, basicShema } from '../schemas';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import { Link } from 'react-router-dom';

const onSubmit = async(values,actions) => {
 console.log(values);
 console.log(actions);
 await new Promise((resolve) => {
  setTimeout(resolve, 1000)
 })
actions.resetForm()
}

export default 
function GeneralForm() {
  

  const {values, errors, isSubmitting, handleChange, handleSubmit} = useFormik({
    initialValues: {     
      email: '',
      confirmPassword: '',
      password: '',
      username : '',
    },
validationSchema: basicSchema,
onSubmit,
  });
  // console.log(formik);
  
  return (  
    

  <div className='d-flex align-items-center justify-content-center col-sm-8'>
    <div className='box col-12 d-flex align-items-center'>
      <div className='left-slider  col-7'>1</div>
        <div className='right-loding  col-5 d-flex align-items-center justify-content-center '>
        
    <form className='kayit_form col-8 ' onSubmit={handleSubmit}>
    <div className='logo'></div>
      <div className='inputdiv '>       
          <input
            placeholder='Kullanıcı Adı veya Telefon'
            id="username"
            name="username"
            type="username"
            onChange={handleChange}   
            value={values.username}
            className={  errors.username ? 'input-error  usericon' : 'input-okey   usericon'}
            
          />
          {errors.username && <p>{errors.username}</p>}
      </div>
      <div className='inputdiv'>    
          <input
           placeholder='Şifre'
            id="password"
            name="password"
            type="password"
            onChange={handleChange}   
            value={values.password}
            className={errors.password ? 'input-error passwordicon' : 'input-okey passwordicon'}
          />
           {errors.password && <p>{errors.password}</p>}
      </div>
      <p>Şifremi Unuttum</p>
      {/* <div className='inputdiv'> 
          <input
           placeholder='Şifre Tekrar'
            id="confirmPassword"
            name="confirmPassword"
            type="confirmPassword"
            onChange={handleChange}   
            value={values.confirmPassword}
            className={errors.confirmPassword ? 'input-error' : 'input-okey'}
          />
              {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>
      <div className='inputdiv'>      
          <input
           className={errors.email ? 'input-error' : 'input-okey'}
           placeholder='E-Posta'
            id="email"
            name="email"
            type="email"
            onChange={handleChange}   
            value={values.email}
           
          />
        {errors.email && <p>{errors.email}</p>}
      </div> */}


      <button type="submit" className='girisbutton' disabled={isSubmitting}>Giriş Yap</button>
  

     <div className='sosyalgiris align-items-center justify-content-center '>

<div className='inputdiv googlebutton'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.98192 0.650207C10.5748 -0.239936 13.3943 -0.215454 15.9713 0.719582C17.3865 1.24948 18.6832 2.05361 19.7869 3.08583C19.4119 3.48708 19.0163 3.86208 18.6338 4.25208C17.9063 4.97833 17.1794 5.70208 16.4532 6.42333C15.7292 5.73085 14.8534 5.21719 13.8957 4.92333C12.6701 4.55328 11.3663 4.52795 10.1273 4.8501C8.88833 5.17225 7.762 5.82945 6.87192 6.74958C6.09498 7.53996 5.50659 8.49561 5.15067 9.54521L1.26379 6.53583C2.65506 3.77688 5.06395 1.6665 7.98192 0.650207Z" fill="#E33629"/>
<path d="M0.232495 9.51708C0.441256 8.48165 0.788105 7.47894 1.26374 6.53583L5.15062 9.5527C4.64229 11.0501 4.64229 12.6734 5.15062 14.1708C3.85562 15.1708 2.55999 16.1758 1.26374 17.1858C0.0734021 14.8164 -0.289632 12.1168 0.232495 9.51708Z" fill="#F8BD00"/>
<path d="M11.8594 9.63898H23.0194C23.4009 11.7332 23.2976 13.8871 22.7175 15.9352C22.1835 17.8186 21.1464 19.5209 19.7175 20.859C18.4631 19.8802 17.2031 18.909 15.9487 17.9302C16.5706 17.5108 17.1014 16.97 17.5093 16.3405C17.9172 15.7109 18.1938 15.0055 18.3225 14.2665H11.8594C11.8575 12.7252 11.8594 11.1821 11.8594 9.63898Z" fill="#587DBD"/>
<path d="M1.26184 17.1858C2.55809 16.1858 3.85372 15.1808 5.14872 14.1708C5.64973 15.6412 6.6026 16.9156 7.87122 17.8121C8.66237 18.3715 9.56152 18.7598 10.5112 18.9521C11.4469 19.1261 12.4067 19.1261 13.3425 18.9521C14.2755 18.7944 15.1652 18.4431 15.9543 17.9208C17.2087 18.8996 18.4687 19.8708 19.7231 20.8496C18.3504 22.0978 16.677 22.9681 14.8668 23.3752C12.8689 23.8449 10.7867 23.8224 8.79934 23.3096C7.22753 22.8899 5.75936 22.1501 4.48684 21.1365C3.14008 20.067 2.04003 18.7194 1.26184 17.1858Z" fill="#319F43"/>
</svg>
<p>Google ile devam et</p></div>
<div className='inputdiv facebookbutton'> <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.875 12.8073C24.875 6.17989 19.5024 0.807265 12.875 0.807265C6.24762 0.807265 0.875 6.1798 0.875 12.8073C0.875 18.7968 5.26325 23.7613 11 24.6615V16.276H7.95312V12.8073H11V10.1635C11 7.15602 12.7916 5.49477 15.5325 5.49477C16.8455 5.49477 18.2188 5.72914 18.2188 5.72914V8.68227H16.7056C15.2148 8.68227 14.75 9.6073 14.75 10.5563V12.8073H18.0781L17.5461 16.276H14.75V24.6615C20.4868 23.7613 24.875 18.7969 24.875 12.8073Z" fill="#1877F2"/>
</svg>
<p>Facebook ile devam et</p></div>
<div className='inputdiv tiwitterbutton'><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.543 4.85476C21.5576 5.06645 21.5576 5.27795 21.5576 5.49151C21.5576 11.9978 16.6044 19.5015 7.54763 19.5015V19.4978C4.87202 19.5015 2.25186 18.7351 0 17.2901C0.389063 17.337 0.78 17.3604 1.17188 17.3614C3.38946 17.3632 5.54326 16.6194 7.28719 15.2496C6.25968 15.2302 5.26392 14.8901 4.43914 14.277C3.61436 13.664 3.00178 12.8084 2.68706 11.8301C3.42525 11.9726 4.18575 11.9432 4.91025 11.7452C2.613 11.2811 0.960375 9.26288 0.960375 6.91895V6.85651C1.64518 7.23801 2.41163 7.44938 3.19519 7.47282C1.03125 6.02682 0.364688 3.14851 1.67119 0.898322C2.90736 2.41944 4.44967 3.66352 6.19797 4.54975C7.94626 5.43598 9.86142 5.94453 11.8191 6.04238C11.6239 5.20215 11.6528 4.32542 11.9028 3.49985C12.1528 2.67428 12.6152 1.92882 13.2437 1.33801C15.2269 -0.526303 18.3459 -0.430678 20.2101 1.55157C21.3128 1.33383 22.3703 0.929533 23.337 0.356072C22.9694 1.4962 22.2002 2.46401 21.1725 3.07951C22.1486 2.96443 23.1017 2.70306 24 2.3042C23.3392 3.29375 22.5072 4.15747 21.543 4.85476Z" fill="#1D9BF0"/>
</svg>
<p>Tiwitter ile devam et</p></div>
<Link to="/registery"><button type="submit" className='hesapolustur' disabled={isSubmitting}>Hesap Oluştur</button> </Link> 
</div> 


    </form>
    
    
    
    </div>

          </div>         

            
    </div>
    
  
    

  );
};
