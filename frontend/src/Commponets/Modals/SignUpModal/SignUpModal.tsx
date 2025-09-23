import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import closeImage from '../../../assets/closeImage.svg'
import { handleRegister } from '../../../redux/slices/userReducer'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { SignUpModalProps } from '../../../utils/type'
import st from './SignUpModal.module.scss'

interface FormData {
	firstName: string
	lastName: string
	email: string
	password: string
	repeatPassword: string
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
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			repeatPassword: '',
		},
		validate: values => {
			const errors: Partial<FormData> = {}

			if (!values.firstName) {
				errors.firstName = 'First name is required'
			}

			if (!values.lastName) {
				errors.lastName = 'Last name is required'
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
					fullName: `${values.firstName} ${values.lastName}`,
					email: values.email,
					password: values.password,
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
							{formik.touched.firstName && formik.errors.firstName && (
								<span className={st.error}>{formik.errors.firstName}</span>
							)}
							<input
								type='text'
								name='firstName'
								value={formik.values.firstName}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className={st.input}
								placeholder='First name'
								disabled={formik.isSubmitting}
							/>
						</div>
						<div className={st.fieldContainer}>
							{formik.touched.lastName && formik.errors.lastName && (
								<span className={st.error}>{formik.errors.lastName}</span>
							)}
							<input
								type='text'
								name='lastName'
								value={formik.values.lastName}
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
