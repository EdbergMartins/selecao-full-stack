import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
import { Formik } from 'formik';
import imgLogin from '../../assets/imgLogin.svg';
import { useStyles } from './styles';

function HomePage() {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <div className={styles.contentBox}>
        <div className={styles.pictureBox}>
          <img style={{ height: '100%', float: 'right' }} src={imgLogin} />
        </div>
        <div className={styles.loginBox}>
          <h1 className={styles.fristText}>
            Olá! Bem vindo de volta.
          </h1>
          <h2 className={styles.secondText}>
            Faça login com seus dados inseridos
            durante o seu registro.
          </h2>

          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                <div className={styles.formik}>
                  <span className={styles.titles}>
                    E-mail
                  </span>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={styles.input}
                    placeholder="Exemplo@email.com"
                  />
                  {errors.email && touched.email && errors.email}
                  <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <span className={styles.titles}>
                      Senha
                    </span>
                    <span className={styles.link}>
                      Esqueceu a senha
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={styles.input}
                    placeholder="Enter password"
                  />
                  {errors.password && touched.password && errors.password}

                  <LoadingButton sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px 8px',
                    gap: '10px',
                    width: '417px',
                    height: '56px',
                    background: '#F4C23B',
                    '& .Mui-focusVisible': { background: 'black' }
                  }}
                    type="submit"
                    disabled={isSubmitting}>
                    Login
                  </LoadingButton>
                </div>
              </form>
            )}
          </Formik>

        </div>
      </div>
    </Box>
  );
}

export default HomePage;
