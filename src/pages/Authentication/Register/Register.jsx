import { useForm } from 'react-hook-form';
import SocialLogin from '../../../components/Shared/SocialLogin/SocialLogin';
import { Link } from 'react-router';
import { TbUserUp } from 'react-icons/tb';

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div className="card-body w-3/4 mx-auto space-y-5">
            <div className="space-y-2 md:space-y-4">
                <h2 className="card-title text-2xl md:text-5xl font-bold">Create An Account</h2>
                <h4 className="card-title">Register with Zap Shift</h4>
                <div className=' rounded-full bg-gray-100 w-10 h-10 grid items-center justify-center'>
                    <TbUserUp className='text-2xl' />
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <fieldset className="fieldset">
                    {/* name */}
                    <label className="label">Name</label>
                    <input {...register("name", { required: true })} type="text" className="input w-full" placeholder="Name" />
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
                <p className="text-base font-light mt-2">Don't Have an Account? <Link className="text-[#8FA748] font-bold" to="/login">Login</Link></p>
            </form>
            <SocialLogin />
        </div>
    );
};

export default Register;