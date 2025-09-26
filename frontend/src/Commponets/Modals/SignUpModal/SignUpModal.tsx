import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import closeImage from '../../../assets/closeImage.svg'
import { handleRegister } from '../../../redux/slices/userReducer'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { SignUpModalProps } from '../../../utils/type'
import st from './SignUpModal.module.scss'

interface FormData {
	username: string
	email: string
	first_name: string
	last_name: string
	password: string
	repeatPassword: string
	is_teacher: boolean
}

export default function SignUpModal({
	isOpen,
	onClose,
	onSwitchToSignIn,
}: SignUpModalProps) {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { registerError } = useAppSelector(state => state.user)

	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			first_name: '',
			last_name: '',
			password: '',
			repeatPassword: '',
			is_teacher: false,
		},
		validate: values => {
			const errors: Partial<FormData> = {}

			if (!values.first_name) {
				errors.first_name = 'First name is required'
			}

			if (!values.last_name) {
				errors.last_name = 'Last name is required'
			}

			if (!values.email) {
				errors.email = 'Email is required'
			} else if (!/\S+@\S+\.\S+/.test(values.email)) {
				errors.email = 'Email is invalid'
			}

			if (!values.password) {
				errors.password = 'Password is required'
			} else if (values.password.length < 6) {
				errors.password = 'Password must be at least 6 characters'
			}

			if (!values.repeatPassword) {
				errors.repeatPassword = 'Please repeat your password'
			} else if (values.password !== values.repeatPassword) {
				errors.repeatPassword = 'Passwords do not match'
			}

			return errors
		},
		onSubmit: values => {
			dispatch(
				handleRegister({
					username: `${values.first_name}_${values.last_name}`,
					first_name: values.first_name,
					last_name: values.last_name,
					email: values.email,
					password: values.password,
					is_teacher: values.is_teacher,
				})
			).then(action => {
				if (action.meta.requestStatus === 'fulfilled') {
					onClose()
					navigate('/dashboard')
				}
			})
		},
	})

	if (!isOpen) return null

	return (
		<div className={st.root} onClick={onClose}>
			<div className={st.modalContent} onClick={e => e.stopPropagation()}>
				<form onSubmit={formik.handleSubmit} className={st.form}>
					<div className={st.headerBlock}>
						<h2 className={st.title}>Sign Up</h2>
						<button type='button' className={st.closeButton} onClick={onClose}>
							Close <img src={closeImage} alt='Close' />
						</button>
					</div>

					<p className={st.subtitle}>
						Already have an account?{' '}
						<button
							type='button'
							className={st.switchButton}
							onClick={onSwitchToSignIn}
						>
							Sign in
						</button>
					</p>

					<div className={st.inputBlock}>
						<div className={st.fieldContainer}>
							{formik.touched.first_name && formik.errors.first_name && (
								<span className={st.error}>{formik.errors.first_name}</span>
							)}
							<input
								type='text'
								name='first_name'
								value={formik.values.first_name}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className={st.input}
								placeholder='First name'
								disabled={formik.isSubmitting}
							/>
						</div>
						<div className={st.fieldContainer}>
							{formik.touched.last_name && formik.errors.last_name && (
								<span className={st.error}>{formik.errors.last_name}</span>
							)}
							<input
								type='text'
								name='last_name'
								value={formik.values.last_name}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className={st.input}
								placeholder='Last name'
								disabled={formik.isSubmitting}
							/>
						</div>
						<div className={st.fieldContainer}>
							{formik.touched.email && formik.errors.email && (
								<span className={st.error}>{formik.errors.email}</span>
							)}
							<input
								type='email'
								name='email'
								value={formik.values.email}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className={st.input}
								placeholder='E-mail'
								disabled={formik.isSubmitting}
							/>
						</div>

						<div className={st.fieldContainer}>
							{formik.touched.password && formik.errors.password && (
								<span className={st.error}>{formik.errors.password}</span>
							)}
							<input
								type='password'
								name='password'
								value={formik.values.password}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className={st.input}
								placeholder='Password'
								disabled={formik.isSubmitting}
							/>
						</div>
						<div className={st.fieldContainer}>
							{formik.touched.repeatPassword &&
								formik.errors.repeatPassword && (
									<span className={st.error}>
										{formik.errors.repeatPassword}
									</span>
								)}
							<input
								type='password'
								name='repeatPassword'
								value={formik.values.repeatPassword}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className={st.input}
								placeholder='Repeat Password'
								disabled={formik.isSubmitting}
							/>
						</div>
					</div>

					{registerError && <div className={st.error}>{registerError}</div>}

					<button
						type='submit'
						disabled={formik.isSubmitting}
						className={st.submitBtn}
					>
						{formik.isSubmitting ? (
							<>
								<div className={st.spinner}></div>
								SIGN UP
							</>
						) : (
							'SIGN UP'
						)}
					</button>
				</form>
			</div>
		</div>
	)
}
