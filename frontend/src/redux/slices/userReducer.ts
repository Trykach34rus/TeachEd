import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/axiosInstance'
import { PostT, UserT } from '../../utils/type'
import { RootState } from '../store'

type HandleRegister = {
	username: string
	password: string | number
	email: string
	first_name: string
	last_name: string
	is_teacher: boolean
}

type HandleLogin = {
	username: string
	password: string
}

interface UserState {
	userInfo: UserT | null
	accessToken: string | null
	loginError: string | null
	registerError: string | null
	userId: number | null
	profile: UserT | null
	profilePosts: PostT[]
	profileLoading: boolean
	profilePostsLoading: boolean
	isMobile: boolean
}

const initialState: UserState = {
	accessToken: null,
	userInfo: null,
	loginError: null,
	registerError: null,
	userId: null,
	profile: null,
	profilePosts: [],
	profileLoading: false,
	profilePostsLoading: false,
	isMobile: false,
}

const handleRegister = createAsyncThunk(
	'user/handleRegister',
	async (data: HandleRegister) => {
		console.log('🔄 handleRegister: отправка запроса на регистрацию', { data })
		try {
			const response = await axiosInstance.post('auth/users/', data)
			console.log('✅ handleRegister: успешная регистрация', response.data)
			return response.data
		} catch (error: any) {
			console.error(
				'❌ handleRegister: ошибка',
				error.response?.data || error.message
			)
			throw error
		}
	}
)

const handleLogin = createAsyncThunk(
	'user/handleLogin',
	async (data: HandleLogin) => {
		console.log('🔄 handleLogin: отправка запроса на вход', { data })
		try {
			const response = await axiosInstance.post('auth/jwt/create/', data)
			console.log('✅ handleLogin: успешный вход', response.data)
			return response.data
		} catch (error: any) {
			console.error(
				'❌ handleLogin: ошибка',
				error.response?.data || error.message
			)
			throw error
		}
	}
)

const getCurrentUser = createAsyncThunk(
	'user/getCurrentUser',
	async (_, { getState }) => {
		const state = getState() as RootState
		console.log('🔄 getCurrentUser: получение текущего пользователя', {
			accessToken: state.user.accessToken,
		})

		try {
			const response = await axiosInstance.get('auth/users/me/', {
				headers: {
					Authorization: `Bearer ${state.user.accessToken}`,
				},
			})
			console.log(
				'✅ getCurrentUser: данные пользователя получены',
				response.data
			)
			return response.data
		} catch (error: any) {
			console.error(
				'❌ getCurrentUser: ошибка',
				error.response?.data || error.message
			)
			throw error
		}
	}
)

const getUserById = createAsyncThunk('user/getUserById', async (id: number) => {
	console.log('🔄 getUserById: получение пользователя по ID', { id })
	try {
		const response = await axiosInstance.get(`auth/users/${id}/`)
		console.log('✅ getUserById: данные пользователя получены', response.data)
		return response.data
	} catch (error: any) {
		console.error(
			'❌ getUserById: ошибка',
			error.response?.data || error.message
		)
		throw error
	}
})

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserT>) => {
			state.userInfo = action.payload
		},
		clearToken: state => {
			state.accessToken = null
		},
		setMobile: (state, action: PayloadAction<boolean>) => {
			state.isMobile = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(handleRegister.fulfilled, state => {
				console.log('✅ handleRegister: состояние обновлено')
				state.registerError = null
			})
			.addCase(handleRegister.rejected, (state, action) => {
				console.log('❌ handleRegister: ошибка в состоянии', action.error)
				state.registerError = action.error.message || 'Registration failed'
			})
			.addCase(handleLogin.fulfilled, (state, action) => {
				console.log('✅ handleLogin: состояние обновлено', action.payload)
				state.accessToken = action.payload.accessToken
				state.userInfo = action.payload
				state.loginError = null
			})
			.addCase(handleLogin.rejected, (state, action) => {
				console.log('❌ handleLogin: ошибка в состоянии', action.error)
				state.loginError =
					action.error.message || 'Incorrect username or password'
			})
			.addCase(getCurrentUser.fulfilled, (state, action) => {
				console.log('✅ getCurrentUser: состояние обновлено', action.payload)
				state.userId = action.payload.id
			})
			.addCase(getCurrentUser.rejected, state => {
				console.log('❌ getCurrentUser: ошибка в состоянии - токен очищен')
				state.accessToken = null
			})
			.addCase(getUserById.pending, state => {
				console.log('🔄 getUserById: начало загрузки')
				state.profileLoading = true
			})
			.addCase(getUserById.fulfilled, (state, action) => {
				console.log('✅ getUserById: состояние обновлено', action.payload)
				state.profile = action.payload
				state.profileLoading = false
			})
			.addCase(getUserById.rejected, (state, action) => {
				console.log('❌ getUserById: ошибка в состоянии', action.error)
				state.profileLoading = false
			})
	},
})

export const { setUser, clearToken, setMobile } = userSlice.actions
export { getCurrentUser, getUserById, handleLogin, handleRegister }
export default userSlice.reducer
