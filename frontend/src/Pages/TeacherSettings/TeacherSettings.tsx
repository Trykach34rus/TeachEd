import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import st from './TeacherSettings.module.scss'

type DayOfWeek =
	| 'monday'
	| 'tuesday'
	| 'wednesday'
	| 'thursday'
	| 'friday'
	| 'saturday'
	| 'sunday'

interface Schedule {
	monday: boolean
	tuesday: boolean
	wednesday: boolean
	thursday: boolean
	friday: boolean
	saturday: boolean
	sunday: boolean
}

interface Language {
	id: string
	language: string
	level: string
}

interface Specialization {
	id: string
	name: string
}

export default function TeacherSettings() {
	const navigate = useNavigate()
	const [languages, setLanguages] = useState<Language[]>([
		{ id: '1', language: 'English', level: 'C2' },
	])
	const [specializations, setSpecializations] = useState<Specialization[]>([
		{ id: '1', name: 'Business English' },
	])
	const [schedule, setSchedule] = useState<Schedule>({
		monday: true,
		tuesday: true,
		wednesday: true,
		thursday: true,
		friday: true,
		saturday: false,
		sunday: false,
	})

	const days: DayOfWeek[] = [
		'monday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
		'saturday',
		'sunday',
	]

	const addLanguage = () => {
		setLanguages([
			...languages,
			{ id: Date.now().toString(), language: '', level: '' },
		])
	}

	const removeLanguage = (id: string) => {
		setLanguages(languages.filter(lang => lang.id !== id))
	}

	const updateLanguage = (id: string, field: string, value: string) => {
		setLanguages(
			languages.map(lang =>
				lang.id === id ? { ...lang, [field]: value } : lang
			)
		)
	}

	const addSpecialization = () => {
		setSpecializations([
			...specializations,
			{ id: Date.now().toString(), name: '' },
		])
	}

	const removeSpecialization = (id: string) => {
		setSpecializations(specializations.filter(spec => spec.id !== id))
	}

	const updateSpecialization = (id: string, value: string) => {
		setSpecializations(
			specializations.map(spec =>
				spec.id === id ? { ...spec, name: value } : spec
			)
		)
	}

	const toggleDay = (day: DayOfWeek) => {
		setSchedule(prev => ({ ...prev, [day]: !prev[day] }))
	}

	const handleCancel = () => {
		navigate('/new-board')
	}

	return (
		<div className={st.root}>
			<div className={st.header}>
				<h1 className={st.pageTitle}>Teacher Profile Settings</h1>
				<p className={st.subtitle}>
					Manage your teaching profile and preferences
				</p>
			</div>

			<div className={st.content}>
				<div className={st.column}>
					<section className={st.card}>
						<div className={st.cardHeader}>
							<h2>Account & Security</h2>
							<span className={st.cardBadge}>Essential</span>
						</div>
						<div className={st.fieldsGrid}>
							<div className={st.field}>
								<label>Email Address</label>
								<input type='email' placeholder='your.email@example.com' />
								<span className={st.fieldHint}>
									Used for notifications and login
								</span>
							</div>
							<div className={st.field}>
								<label>Phone Number</label>
								<input type='tel' placeholder='+1 (555) 000-0000' />
								<span className={st.fieldHint}>For emergency contact</span>
							</div>
						</div>
						<div className={st.actions}>
							<button className={st.btnPrimary}>Change Password</button>
							<button className={st.btnSecondary}>
								Enable Two-Factor Authentication
							</button>
						</div>
					</section>
					<section className={st.card}>
						<div className={st.cardHeader}>
							<h2>Privacy & Visibility</h2>
							<span className={st.cardBadge}>Visibility</span>
						</div>
						<div className={st.field}>
							<label>Profile Visibility</label>
							<select>
								<option>Everyone - Visible to all platform users</option>
								<option>
									Only students - Visible only to potential students
								</option>
								<option>
									Only my students - Visible only to your current students
								</option>
							</select>
						</div>
						<div className={st.checkboxGroup}>
							<div className={st.checkbox}>
								<input type='checkbox' id='online' defaultChecked />
								<label htmlFor='online'>Show online status to students</label>
							</div>
							<div className={st.checkbox}>
								<input type='checkbox' id='searchable' defaultChecked />
								<label htmlFor='searchable'>Appear in search results</label>
							</div>
							<div className={st.checkbox}>
								<input type='checkbox' id='reviews' defaultChecked />
								<label htmlFor='reviews'>Allow students to leave reviews</label>
							</div>
						</div>
					</section>
				</div>
				<div className={st.column}>
					<section className={st.card}>
						<div className={st.cardHeader}>
							<h2>Teaching Profile</h2>
							<span className={st.cardBadge}>Public</span>
						</div>
						<div className={st.field}>
							<label>Profile Photo & Video Introduction</label>
							<div className={st.mediaUpload}>
								<div className={st.uploadArea}>
									<span>📷</span>
									<p>Upload professional photo</p>
									<input type='file' accept='image/*' />
								</div>
								<div className={st.uploadArea}>
									<span>🎥</span>
									<p>Add video introduction</p>
									<input type='file' accept='video/*' />
								</div>
							</div>
						</div>
						<div className={st.fieldsGrid}>
							<div className={st.field}>
								<label>Professional Tagline</label>
								<input
									type='text'
									placeholder='E.g. Certified English teacher with 5+ years experience'
									maxLength={80}
								/>
								<span className={st.fieldHint}>
									Brief description that appears in search results
								</span>
							</div>
							<div className={st.field}>
								<label>Hourly Rate (USD)</label>
								<div className={st.priceInput}>
									<span className={st.currency}>$</span>
									<input type='number' placeholder='25' min='5' max='200' />
									<span className={st.perHour}>/hour</span>
								</div>
							</div>
						</div>
						<div className={st.field}>
							<label>Languages You Teach</label>
							<div className={st.dynamicList}>
								{languages.map(lang => (
									<div key={lang.id} className={st.listItem}>
										<select
											value={lang.language}
											onChange={e =>
												updateLanguage(lang.id, 'language', e.target.value)
											}
										>
											<option value=''>Select language</option>
											<option value='English'>English</option>
											<option value='Spanish'>Spanish</option>
											<option value='French'>French</option>
											<option value='German'>German</option>
											<option value='Chinese'>Chinese</option>
											<option value='Japanese'>Japanese</option>
										</select>
										<select
											value={lang.level}
											onChange={e =>
												updateLanguage(lang.id, 'level', e.target.value)
											}
										>
											<option value=''>Level</option>
											<option value='A1'>A1 (Beginner)</option>
											<option value='A2'>A2 (Elementary)</option>
											<option value='B1'>B1 (Intermediate)</option>
											<option value='B2'>B2 (Upper Intermediate)</option>
											<option value='C1'>C1 (Advanced)</option>
											<option value='C2'>C2 (Proficient)</option>
											<option value='Native'>Native Speaker</option>
										</select>
										<button
											className={st.removeBtn}
											onClick={() => removeLanguage(lang.id)}
										>
											×
										</button>
									</div>
								))}
								<button className={st.addBtn} onClick={addLanguage}>
									+ Add Language
								</button>
							</div>
						</div>
						<div className={st.field}>
							<label>Teaching Specializations</label>
							<div className={st.dynamicList}>
								{specializations.map(spec => (
									<div key={spec.id} className={st.listItem}>
										<select
											value={spec.name}
											onChange={e =>
												updateSpecialization(spec.id, e.target.value)
											}
										>
											<option value=''>Select specialization</option>
											<option value='Business English'>Business English</option>
											<option value='Exam Preparation'>
												Exam Preparation (IELTS, TOEFL)
											</option>
											<option value='Conversational Practice'>
												Conversational Practice
											</option>
											<option value='Academic English'>Academic English</option>
											<option value='Kids & Teens'>Kids & Teens</option>
											<option value='Professional Development'>
												Professional Development
											</option>
											<option value='Travel English'>Travel English</option>
										</select>
										<button
											className={st.removeBtn}
											onClick={() => removeSpecialization(spec.id)}
										>
											×
										</button>
									</div>
								))}
								<button className={st.addBtn} onClick={addSpecialization}>
									+ Add Specialization
								</button>
							</div>
						</div>
						<div className={st.field}>
							<label>About Me & Teaching Style</label>
							<textarea
								placeholder='Describe your teaching experience, methodology, and what students can expect from your lessons...'
								rows={5}
							/>
							<span className={st.fieldHint}>
								This is your chance to attract students - be detailed and
								authentic!
							</span>
						</div>
						<div className={st.field}>
							<label>Weekly Availability</label>
							<div className={st.availability}>
								{days.map(day => (
									<button
										key={day}
										className={`${st.dayToggle} ${
											schedule[day] ? st.active : ''
										}`}
										onClick={() => toggleDay(day)}
									>
										{day.charAt(0).toUpperCase() + day.slice(1)}
									</button>
								))}
							</div>
						</div>
						<div className={st.field}>
							<label>Certificates & Qualifications</label>
							<div className={st.certificates}>
								<div className={st.certificateUpload}>
									<span>📄</span>
									<p>
										Upload teaching certificates, diplomas, or qualifications
									</p>
									<input type='file' multiple accept='.pdf,.jpg,.png' />
									<span className={st.fieldHint}>Max 5 files, 10MB each</span>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div className={st.footerActions}>
				<button className={st.btnCancel} onClick={handleCancel}>
					Cancel
				</button>
				<button className={st.btnSave}>Save All Changes</button>
			</div>
		</div>
	)
}
