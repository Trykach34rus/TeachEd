import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import closeImage from '../../../assets/closeImage.svg'
import { handleLogin } from '../../../redux/slices/userReducer'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { SignInModalProps } from '../../../utils/type'
import st from './SignInModal.module.scss'

export default function SignInModal({
	isOpen,
	onClose,
	onSwitchToSignUp,
}: SignInModalProps) {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { loginError } = useAppSelector(state => state.user)

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
			remember: false,
		},
		onSubmit: values => {
			dispatch(handleLogin(values)).then(action => {
				if (action.meta.requestStatus === 'fulfilled') {
					navigate('/main')
					onClose()
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
						<h2 className={st.title}>Sign In</h2>
						<button type='button' className={st.closeButton} onClick={onClose}>
							Close <img src={closeImage} alt='Close' />
						</button>
					</div>

					<p className={st.subtitle}>
						New user?{' '}
						<button
							type='button'
							className={st.switchButton}
							onClick={onSwitchToSignUp}
						>
							Create an account
						</button>
					</p>

					<div className={st.inputBlock}>
						<input
							className={st.input}
							type='text'
							name='username'
							placeholder='Your login'
							required
							value={formik.values.username}
							onChange={formik.handleChange}
						/>

						<input
							className={st.input}
							type='password'
							name='password'
							placeholder='Your password'
							required
							value={formik.values.password}
							onChange={formik.handleChange}
						/>
					</div>

					{loginError && <div className={st.error}>{loginError}</div>}

					<button
						type='submit'
						className={st.submitBtn}
						disabled={formik.isSubmitting}
					>
						{formik.isSubmitting ? 'SIGNING IN...' : 'SIGN IN'}
					</button>
				</form>
			</div>
		</div>
	)
}
