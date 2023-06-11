import { Alert, FormRow, Logo } from "../components";
import {useEffect, useState} from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
}

const Register = () => {
	const navigate = useNavigate();
	const [values, setValues] = useState(initialState);
	const handleChange = (e) => {
		setValues({...values, [e.target.name]: e.target.value})
	}

	const {user, isLoading, showAlert, displayAlert, registerUser, loginUser, setupUser} = useAppContext();

	const onSubmit = (e) => {
		e.preventDefault();
		const {name, email, password, isMember} = values;
		if (!email || !password || (!isMember && !name)) {
			displayAlert()
			return
		}
		const currentUser = {name, email, password};
		if (isMember) {
			setupUser({ currentUser, endPoint: 'login', alertText: 'Login Successful! Redirecting...' })
		} else {
			setupUser({ currentUser, endPoint: 'register', alertText: 'User Created! Redirecting...' })
		}
	}

	const toggleMember = () => {
		setValues({...values, isMember: !values.isMember})
	}

	useEffect(() => {
		if (user) {
			setTimeout(() => {
				navigate('/')
			}, 3000)
		}
	}, [user, navigate])

	return (
		<Wrapper className="full-page">
			<form className="form" onSubmit={onSubmit}>
				<Logo/>
				<h3>{ values.isMember ? 'Login' : 'Register' }</h3>
				{ showAlert && <Alert/> }

				{!values.isMember && (
					<FormRow type='text' value={values.name} name='name' labelText='name' handleChange={handleChange}/>
				)}

				<FormRow type='email' value={values.email} name='email' labelText='email' handleChange={handleChange}/>
				<FormRow type='password' value={values.password} name='password' labelText='password' handleChange={handleChange}/>

				<button type="submit" className="btn btn-block" disabled={isLoading}>
					submit
				</button>

				<p>
					{values.isMember ?  'Not a member yet?' : 'Already a member?'}
					<button type='button' onClick={toggleMember} className='member-btn'>
						{values.isMember ? 'Register' : 'Login'}
					</button>
				</p>
			</form>
		</Wrapper>
	)
}

export default Register;
