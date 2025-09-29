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
	avatarUploadLoading: boolean
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
	avatarUploadLoading: false,
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

const uploadAvatar = createAsyncThunk(
	'user/uploadAvatar',
	async (file: File, { getState }) => {
		const state = getState() as RootState
		console.log('🔄 uploadAvatar: загрузка аватара', { file })

		const formData = new FormData()
		formData.append('avatar', file)

		try {
			const response = await axiosInstance.patch(
				`auth/users/${state.user.userInfo?.id}/`,
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${state.user.accessToken}`,
					},
				}
			)
			console.log('✅ uploadAvatar: аватар успешно загружен', response.data)
			return response.data
		} catch (error: any) {
			console.error(
				'❌ uploadAvatar: ошибка',
				error.response?.data || error.message
			)
			throw error
		}
	}
)

const updateProfile = createAsyncThunk(
	'user/updateProfile',
	async (data: { first_name?: string; last_name?: string }, { getState }) => {
		const state = getState() as RootState
		console.log('🔄 updateProfile: обновление профиля', { data })

		try {
			const response = await axiosInstance.patch(
				`auth/users/${state.user.userInfo?.id}/`,
				data,
				{
					headers: {
						Authorization: `Bearer ${state.user.accessToken}`,
					},
				}
			)
			console.log('✅ updateProfile: профиль успешно обновлен', response.data)
			return response.data
		} catch (error: any) {
			console.error(
				'❌ updateProfile: ошибка',
				error.response?.data || error.message
			)
			throw error
		}
	}
)

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserT>) => {
			state.userInfo = action.payload
		},
		clearToken: state => {
			state.accessToken = null
			state.userInfo = null
		},
		setMobile: (state, action: PayloadAction<boolean>) => {
			state.isMobile = action.payload
		},
		updateUserInfo: (state, action: PayloadAction<Partial<UserT>>) => {
			if (state.userInfo) {
				state.userInfo = { ...state.userInfo, ...action.payload }
			}
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
				state.accessToken = action.payload.access
				state.loginError = null
			})
			.addCase(handleLogin.rejected, (state, action) => {
				console.log('❌ handleLogin: ошибка в состоянии', action.error)
				state.loginError =
					action.error.message || 'Incorrect username or password'
			})
			.addCase(getCurrentUser.fulfilled, (state, action) => {
				console.log('✅ getCurrentUser: состояние обновлено', action.payload)
				state.userInfo = action.payload
				state.userId = action.payload.id
			})
			.addCase(getCurrentUser.rejected, state => {
				console.log('❌ getCurrentUser: ошибка в состоянии - токен очищен')
				state.accessToken = null
				state.userInfo = null
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
			.addCase(uploadAvatar.pending, state => {
				console.log('🔄 uploadAvatar: начало загрузки')
				state.avatarUploadLoading = true
			})
			.addCase(uploadAvatar.fulfilled, (state, action) => {
				console.log('✅ uploadAvatar: состояние обновлено', action.payload)
				if (state.userInfo) {
					state.userInfo = { ...state.userInfo, ...action.payload }
				}
				state.avatarUploadLoading = false
			})
			.addCase(uploadAvatar.rejected, (state, action) => {
				console.log('❌ uploadAvatar: ошибка в состоянии', action.error)
				state.avatarUploadLoading = false
			})
			.addCase(updateProfile.fulfilled, (state, action) => {
				console.log('✅ updateProfile: состояние обновлено', action.payload)
				if (state.userInfo) {
					state.userInfo = { ...state.userInfo, ...action.payload }
				}
			})
	},
})

export const { setUser, clearToken, setMobile, updateUserInfo } =
	userSlice.actions
export {
	getCurrentUser,
	getUserById,
	handleLogin,
	handleRegister,
	updateProfile,
	uploadAvatar,
}
export default userSlice.reducer
