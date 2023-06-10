import {Alert, FormRow, Logo} from "../components";
import { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import {useAppContext} from "../context/appContext";

const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
}

const Register = () => {
	const [values, setValues] = useState(initialState);
  //
	const handleChange = (e) => {
		setValues({...values, [e.target.name]: e.target.value})
	}

	const {isLoading, showAlert, displayAlert} = useAppContext();

	const onSubmit = (e) => {
		e.preventDefault();
		const {name, email, password, isMember} = values;
		if (!email || !password || (!isMember && !name)) {
			displayAlert()
			return
		}
		console.log(values)
	}

	const toggleMember = () => {
		setValues({...values, isMember: !values.isMember})
	}

	return (
		<Wrapper className="full-page">
			<form className="form" onSubmit={onSubmit}>
				<Logo/>
				<h3>{ values.isMember ? 'Login' : 'Register' }</h3>
				{ showAlert && <Alert/> }

				{!values.isMember && (
					<FormRow type='text' value={values.name} name='name' labelText='name' handleChange={handleChange}/>
				)}

				<FormRow type='email' value={values.email} name='email' labelText='e-mail' handleChange={handleChange}/>
				<FormRow type='password' value={values.password} name='password' labelText='password' handleChange={handleChange}/>

				<button type="submit" className="btn btn-block">
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
