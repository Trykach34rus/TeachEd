export enum ActiveBlock {
	TRADITIONAL = 'traditional',
	TEACH_ED = 'teachEd',
}

export type FeatureItem = {
	name: string
	classes: boolean | string
	courses: boolean | string
	school: boolean | string
}
export type BenefitItem = {
	title: string
	description: string
}
export type JourneyItem = {
	img: string
	title: string
	id: string
	description: string
}
export type SignUpModalProps = {
	isOpen: boolean
	onClose: () => void
	onSwitchToSignIn: () => void
}
export type SignInModalProps = {
	isOpen: boolean
	onClose: () => void
	onSwitchToSignUp: () => void
}
export type HeroProps = {
	onSwitchToSignUp: () => void
}
export type ToolItem = {
	id: number
	title: string
	description: string
	icon: string
}
export type LatestItem = {
	img: string
	category: string
	title: string
	description: string
	userAvatar: string
	userName: string
	createdDate: string
	link: string
}
export type Reaction = {
	likes: number
	dislikes: number
}
export type PostT = {
	id: number
	title: string
	body: string
	tags: string[]
	reactions: Reaction
	views: number
	userId: number
}

type AddressCoordinates = {
	lat: number
	lng: number
}
type Address = {
	address: string
	city: string
	state: string
	stateCode: string
	postalCode: string
	coordinates: AddressCoordinates
	country: string
}
type Hair = {
	color: string
	type: string
}
type Bank = {
	cardExpire: string
	cardNumber: string
	cardType: string
	currency: string
	iban: string
}
type CompanyAddress = {
	address: string
	city: string
	state: string
	stateCode: string
	postalCode: string
	coordinates: AddressCoordinates
	country: string
}
type Company = {
	department: string
	name: string
	title: string
	address: CompanyAddress
}
type Crypto = {
	coin: string
	wallet: string
	network: string
}
export type blogPosts = {
	id: number
}
export type UserT = {
	id: number
	first_name: string
	last_name: string
	maidenName: string
	age: number
	gender: string
	email: string
	avatar: string
	phone: string
	username: string
	password: string
	birthDate: string
	image: string
	bloodGroup: string
	height: number
	weight: number
	eyeColor: string
	hair: Hair
	ip: string
	address: Address
	macAddress: string
	university: string
	bank: Bank
	company: Company
	ein: string
	ssn: string
	userAgent: string
	crypto: Crypto
	role: 'admin' | 'moderator' | 'user'
}

interface CommentUser {
	id: number
	username: string
	fullName: string
}
export interface Comment {
	id: number
	body: string
	postId: number
	likes: number
	user: CommentUser
}

export type Sort = {
	sortBy: string
	order: 'asc' | 'desc'
	id: number
	name: string
}
export type FormData = {
	title: string
	body: string
	tags: string[]
}
export type StepsItem = {
	id: string
	title: string
	text: string
}
