import * as yup from 'yup';

const passwordRules = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const basicSchema = yup.object().shape({

  username: yup
    .string()
    .required('Kullanıcı adı girmek zorunludur.')
    .label('Kullanıcı Adı')
    .min(3, '0 ile beraber Geçerli bir kullanıcı adı giriniz.')
    .test('username', 'Geçerli bir telefon veya e-posta adresi giriniz.', (value) => {
      if (!value) return true; // İsteğe bağlı alan olduğu için boşsa geçerli kabul ediyoruz

      const phoneRegex = /^\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

      return phoneRegex.test(value) || emailRegex.test(value);
    }),

    name: yup
    .string()
    .required('Adınızı giriniz.')
    .min(3, 'Geçerli bir ad giriniz.'),
  usersurname: yup
    .string()
    .required('Soyadınızı giriniz.')
    .min(3, 'Geçerli bir soyad giriniz.'),

  email: yup
    .string()
    .required('Eposta girmek zorunludur')
    .email('Geçerli bir eposta giriniz.'),

  password: yup
    .string()
    .required('Şifre Girmek zorunludur')
    .min(8, 'Lütfen minimum 8 karakter giriniz.')
    .matches(
      passwordRules,
      'Lütfen en az bir büyük bir küçük harf ve 1 sayı giriniz'
    ),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Şifreler Eşleşmiyor')
    .required('Tekrar Şifre Girmek zorunludur'),
});