export default function SignUp() {
    return (
        <div className="w-full h-full max-w-screen">
            <SignUpForm/>
        </div>
    );
}

const SignUpForm = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse w-1/3 h-1/2">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Username</label>
                            <input type="email" className="input" placeholder="Username" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <label className="label">Confirm Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Sign Up</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    )
}