import React from "react";
import { useFormik } from "formik";
import { basicSchema, basicShem} from "../schemas";
import "bootstrap/dist/css/bootstrap.css";
import "jquery";
import { Link } from "react-router-dom";


const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

export default function Registery({Registery}) {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        confirmPassword: "",
        password: "",
        username: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  // console.log(formik);
  const handleFormSubmit = (event) =>{
    event.preventDefault();
    debugger;
    Registery('zafer');
    

  }

  return (
    <div className="d-flex align-items-center justify-content-center col-7">
      <div className="box col-12 d-flex align-items-center">
        <div className="left-slider  col-7">1</div>
        <div className="right-loding  col-5 d-flex align-items-center justify-content-center ">
          <form className="kayit_form col-8 "  onSubmit={handleFormSubmit}>
            <div className="logo"></div>
            <div className={errors.username ? "input-error" : "input-okey"}>
              <input
                autoComplete="off"
                placeholder="Telefon veya E-Posta Adresiniz"
                id="username"
                name="username"
                type="text"
                onChange={handleChange}
                value={values.username}
                className={errors.username ? "input-error" : "input-okey"}
              />
              {errors.username && <p>{errors.username}</p>}
            </div>

            <div
              className={`inputdiv ${
                errors.name ? "input-error" : "input-okey"
              }`}
            >
              <input
                autoComplete="off"
                placeholder="Adınız"
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={values.name}
                className={errors.name ? "input-error" : "input-okey"}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div
              className={`inputdiv ${
                errors.usersurname ? "input-error" : "input-okey"
              }`}
            >
              <input
                autoComplete="off"
                placeholder="Soyadınız"
                id="usersurname"
                name="usersurname"
                type="text"
                onChange={handleChange}
                value={values.usersurname}
                className={errors.usersurname ? "input-error" : "input-okey"}
              />
              {errors.usersurname && <p>{errors.usersurname}</p>}
            </div>

            <div
              className={`inputdiv ${
                errors.password ? "input-error" : "input-okey"
              }`}
            >
              <input
                autoComplete="off"
                placeholder="Şifre"
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                value={values.password}
                className={errors.password ? "input-error" : "input-okey"}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div
              className={`inputdiv ${
                errors.password ? "input-error" : "input-okey"
              }`}
            >
              <input
                autoComplete="off"
                placeholder="Şifre Tekrar"
                id="confirmPassword"
                name="confirmPassword"
                type="confirmPassword"
                onChange={handleChange}
                value={values.confirmPassword}
                className={
                  errors.confirmPassword ? "input-error" : "input-okey"
                }
              />
              {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            </div>

            <div
              className={`inputdiv ${
                errors.dateofbirth ? "input-error" : "input-okey"
              }`}
            >
              <input
                autoComplete="off"
                placeholder="Doğum Tarihiniz"
                id="dateofbirth"
                name="dateofbirth"
                type="date"
                onChange={handleChange}
                value={values.dateofbirth}
                className={errors.dateofbirth ? "input-error" : "input-okey"}
              />
              {errors.dateofbirth && <p>{errors.dateofbirth}</p>}
            </div>

            <div
              className={`inputdiv ${
                errors.gender ? "input-error" : "input-okey"
              }`}
            >
              <select
                autoComplete="off"
                id="gender"
                name="gender"
                onChange={handleChange}
                value={values.gender}
                className="form-select"
              >
                <option value="">Cinsiyet Seçin</option>
                <option value="Erkek">Erkek</option>
                <option value="Kadın">Kadın</option>
              </select>
              {errors.gender && <p>{errors.gender}</p>}
            </div>
            <button
              type="submit"
              className="hesapolustur"
              disabled={isSubmitting}
            >
              Hesap Oluştur
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
