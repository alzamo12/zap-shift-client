import { Link } from "react-router";
import SocialLogin from "../../../components/Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const {signIn} = useAuth();

    const onSubmit = data => {
        // console.log(data)
        const {email, password} = data;
        signIn(email, password)
        .then(() => {
            alert("User Login Successfully")
        })
    }


    return (
        <div className="card-body w-3/4 mx-auto space-y-5">
            <div className="space-y-2 md:space-y-4">
                <h2 className="card-title text-2xl md:text-5xl font-bold">Welcome Back</h2>
                <h4 className="card-title">Login with Zap Shift</h4>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <fieldset className="fieldset">
                    {/* email */}
                    <label className="label">Email</label>
                    <input {...register("email", { required: true })} type="email" className="input w-full" placeholder="Email" />
                    {/* password */}
                    <label className="label">Password</label>
                    <input {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20
                    })} type="password" className="input w-full" placeholder="Password" />
                    {/* forgot password */}
                    <div><a className="link link-hover">Forgot password?</a></div>
                    {/* submit button */}
                    <button className="btn btn-neutral mt-4 bg-primary text-black border-0">Login</button>
                </fieldset>
                <p className="text-base font-light mt-2">Don't Have an Account? <Link className="text-[#8FA748] font-bold" to="/register">Register</Link></p>
            </form>
            <SocialLogin />
        </div>
    );
};

export default Login;