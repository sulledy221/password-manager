

export default function Login() {
    // * "this" can only be used for class based components and this is a functional component (which is the better kind for the now times)
    const submitLogin = () => console.log("login!")
    return (
        <div>
            <div className="login">Login</div>
            <label htmlFor="username">UserName</label>
            <input type="text" name="username" className="login-input" placeholder="Username" />
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="password-input" placeholder="Password" />
            </div>
            <button type="button" className="login-btn" onClick={submitLogin}>Login</button>
        </div>
    )
}