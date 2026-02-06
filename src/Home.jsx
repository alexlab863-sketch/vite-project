import { Link } from "react-router-dom";
import "./Home.css"

export default function Home() {
  function handleForm(e) {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!email || !password) {
      alert("Iltimos, barcha maydonlarni toldiring!");
      return;
    }

    alert("Muvaffaqiyatli yuborildi ");
  }

  return (
    <>
      <h1>Home</h1>
      <Link to="/about">About</Link>

      <form onSubmit={handleForm} className="login-form">
        <h2 className="login-title">Login</h2>

        <div className="form-group">
          <input type="email" name="email" id="email" />
          <label htmlFor="email">Email kiriting</label>
        </div>

        <div className="form-group">
          <input type="password" name="password" id="password" />
          <label htmlFor="password">Parol kiriting</label>
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
