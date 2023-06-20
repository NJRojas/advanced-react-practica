import T from 'prop-types';
import useForm from '../../../hooks/useForm';
import '../../layout/container.css';

const validEmail = ({ email }) => email;
const validPassword = ({ password }) => password;

function LoginForm({ onSubmit, isLoading }) {
  const {
    formValue: credentials,
    handleChange,
    handleSubmit,
    validate,
  } = useForm({
    email: '',
    password: '',
    remember: false,
  });
  const { email, password, remember } = credentials;

  return (
    <div className="loginFormContainer">
      <h2>Inicio de sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <br />
        <input name="email" value={email} onChange={handleChange} />
        <br />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="checkbox"
          name="remember"
          checked={remember}
          onChange={handleChange}
        />
        <button
          disabled={!validate(validEmail, validPassword, () => !isLoading)}
        >
          Login
        </button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  isLoading: T.bool,
  onSubmit: T.func.isRequired,
};

export default LoginForm;
