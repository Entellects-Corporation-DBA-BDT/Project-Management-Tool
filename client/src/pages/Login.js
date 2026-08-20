import { Link, useNavigate } from "react-router-dom";
import "../Components/AppShell/AppShell.css";

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    // Supabase Auth will replace this local preview hop.
    navigate("/app");
  };

  return (
    <div className="login">
      <form className="login__card" onSubmit={onSubmit}>
        <h1>TeamFlow Manager</h1>
        <p>
          Sign-in preview. Supabase Auth, roles, and entitlements are not
          connected yet.
        </p>
        <label htmlFor="email">Work email</label>
        <input id="email" type="email" defaultValue="alex@teamflow.dev" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" defaultValue="preview" />
        <button type="submit">Continue to workspace</button>
        <p>
          <Link to="/">Back to product site</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
