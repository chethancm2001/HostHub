import 'bootstrap/dist/css/bootstrap.css';

function Register(){
    return(
        <>
             <div className="login-form">
  <form>
    <h1>Login</h1>
    <div className="content">
    <div className="input-field">
        <input type="Name" placeholder="Name" autoComplete="nope"></input>
      </div>
      <div className="input-field">
        <input type="email" placeholder="Email" autoComplete="nope"></input>
      </div>
      <div className="input-field">
        <input type="password" placeholder="Password" autoComplete="new-password"></input>
      </div>
      <div className="input-field">
        <input type="password" placeholder="confirm Password" autoComplete="new-password"></input>
      </div>
      
    </div>
    <div className="action">
      <button>Register</button>
      
    </div>
  </form>
</div>
        </>
    )
}
export default Register