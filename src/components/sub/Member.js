import Layout from '../common/Layout';
import { useState, useEffect } from 'react';

function Member() {
	const initVal = {
		userid: '',
		email: '',
		pwd1: '',
		pwd2: '',
		gender: null,
		interests: null,
	};

	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});

	const check = (value) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[\!\@\#\$\%\^\&\*\(\)\_\+]/;

		if (value.userid.length < 5) {
			errs.userid = '아이디를 5글자이상 입력하세요';
		}
		if (
			value.pwd1.length < 5 ||
			!eng.test(value.pwd1) ||
			!num.test(value.pwd1) ||
			!spc.test(value.pwd1)
		) {
			errs.pwd1 = '비밀번호는 다섯글자 이상, 영문, 숫자, 특수문자를 모두 포함하세요';
		}
		if (value.pwd1 !== value.pwd2) {
			errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요.';
		}
		if (value.email.length < 8 || !/@/.test(Val.email)) {
			errs.email = '이메일은 8글자 이상 입력, @를 포함하세요.';
		}
		if (!Val.gender) {
			errs.gender = '성별을 선택하세요.';
		}
		if (!Val.interests) {
			errs.interests = '관심사를 하나이상 선택하세요.';
		}
		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	const handleRadio = (e) => {
		const { name } = e.target;
		const isChecked = e.target.checked;
		setVal({ ...Val, [name]: isChecked });
	};

	const handleCheck = (e) => {
		let isChecked = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');

		inputs.forEach((el) => {
			if (el.checked) isChecked = true;
		});
		setVal({ ...Val, [name]: isChecked });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
	};

	useEffect(() => {
		console.log(Err);
	}, [Err]);

	return (
		<Layout name={'Member'}>
			<form action='' onSubmit={handleSubmit}>
				<fieldset>
					<legend className='h'>회원가입 폼 양식</legend>
					<table border='1'>
						<caption className='h'>회원가입 정보입력</caption>
						<tbody>
							{/* userid */}
							<tr>
								<th scope='row'>
									<label htmlFor='userid'>USER ID</label>
								</th>
								<td>
									<input
										type='text'
										placeholder='아이디를 입력하세요'
										name='userid'
										id='userid'
										value={Val.userid}
										onChange={handleChange}
									/>
									<span className='err'>{Err.userid}</span>
								</td>
							</tr>

							{/* password */}
							<tr>
								<th scope='row'>
									<label htmlFor='pwd1'>PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd1'
										id='pwd1'
										placeholder='비밀번호를 입력하세요'
										onChange={handleChange}
									/>
									<span className='err'>{Err.pwd1}</span>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='pwd2'>RE-PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd2'
										id='pwd2'
										placeholder='비밀번호를 재입력하세요'
										onChange={handleChange}
									/>
									<span className='err'>{Err.pwd2}</span>
								</td>
							</tr>

							{/* email */}
							<tr>
								<th scope='row'>
									<label htmlFor='email'>E-MAIL</label>
								</th>
								<td>
									<input
										type='text'
										id='email'
										name='email'
										placeholder='이메일 주소를 입력하세요.'
										value={Val.email}
										onChange={handleChange}
									/>
									<span className='err'>{Err.email}</span>
								</td>
							</tr>

							{/* gender */}
							<tr>
								<th scope='row'>GENDER</th>
								<td>
									<label htmlFor='male'>Male</label>
									<input type='radio' name='gender' id='mail' onChange={handleRadio} />

									<label htmlFor='female'>FeMale</label>
									<input type='radio' name='gender' id='female' onChange={handleRadio} />

									<span className='err'>{Err.gender}</span>
								</td>
							</tr>

							{/* interests */}
							<tr>
								<th scope='row'>INTERESTS</th>
								<td>
									<label htmlFor='sports'>SPORTS</label>
									<input type='checkbox' name='interests' id='sports' onChange={handleCheck} />

									<label htmlFor='music'>MUSIC</label>
									<input type='checkbox' name='interests' id='music' onChange={handleCheck} />

									<label htmlFor='game'>GAME</label>
									<input type='checkbox' name='interests' id='game' onChange={handleCheck} />

									<span className='err'>{Err.interests}</span>
								</td>
							</tr>

							{/* btn set */}
							<tr>
								<th colSpan='2'>
									<input type='reset' value='reset' />
									<input type='submit' value='submit' />
								</th>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</form>
		</Layout>
	);
}

export default Member;
