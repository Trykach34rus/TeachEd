import Konva from 'konva'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import {
	Arrow,
	Circle,
	Group,
	Image as KonvaImage,
	Layer,
	Line,
	Rect,
	Stage,
	Text,
	Transformer,
} from 'react-konva'
import { v4 as uuidv4 } from 'uuid'
import styles from './Whiteboard.module.scss'

interface DrawingTool {
	name: string
	icon: string
	type:
		| 'pen'
		| 'rectangle'
		| 'circle'
		| 'arrow'
		| 'sticky'
		| 'text'
		| 'eraser'
		| 'select'
}

interface WhiteboardElement {
	id: string
	type:
		| 'line'
		| 'rectangle'
		| 'circle'
		| 'arrow'
		| 'sticky'
		| 'text'
		| 'image'
		| 'gif'
		| 'video'
		| 'pdf'
	points?: number[]
	x: number
	y: number
	width?: number
	height?: number
	radius?: number
	text?: string
	color: string
	strokeWidth: number
	fill?: string
	fileUrl?: string
	fileType?: string
	fileName?: string
	rotation?: number
	scaleX?: number
	scaleY?: number
	children?: WhiteboardElement[] // Для sticky (Group)
	isPlaying?: boolean // Для видео
	isMuted?: boolean // Для видео
}

interface LocalWhiteboardProps {
	uploadedFiles?: Array<{
		file: File
		type: string
		url: string
		content?: string
	}>
	width?: number
	height?: number
}

const LocalWhiteboard: React.FC<LocalWhiteboardProps> = ({
	uploadedFiles = [],
	width = 804,
	height = 941,
}) => {
	const [tool, setTool] = useState<
		| 'pen'
		| 'rectangle'
		| 'circle'
		| 'arrow'
		| 'sticky'
		| 'text'
		| 'eraser'
		| 'select'
	>('select')
	const [color, setColor] = useState('#000000')
	const [fillColor, setFillColor] = useState('#ffffff')
	const [strokeWidth, setStrokeWidth] = useState(3)
	const [elements, setElements] = useState<WhiteboardElement[]>([])
	const [isDrawing, setIsDrawing] = useState(false)
	const [selectedId, setSelectedId] = useState<string | null>(null)
	const stageRef = useRef<Konva.Stage>(null)
	const layerRef = useRef<Konva.Layer>(null)
	const trRef = useRef<Konva.Transformer>(null)
	const processedFilesRef = useRef(new Set<string>())

	const tools: DrawingTool[] = [
		{ name: 'Выбрать', icon: '🖱️', type: 'select' },
		{ name: 'Карандаш', icon: '✏️', type: 'pen' },
		{ name: 'Прямоугольник', icon: '⬜', type: 'rectangle' },
		{ name: 'Круг', icon: '⭕', type: 'circle' },
		{ name: 'Стрелка', icon: '➡️', type: 'arrow' },
		{ name: 'Стикер', icon: '📌', type: 'sticky' },
		{ name: 'Текст', icon: '📝', type: 'text' },
		{ name: 'Ластик', icon: '🧹', type: 'eraser' },
	]

	const colors = [
		'#000000',
		'#FF0000',
		'#00FF00',
		'#0000FF',
		'#FFFF00',
		'#FF00FF',
		'#00FFFF',
		'#FFA500',
		'#800080',
		'#FFC0CB',
		'#A52A2A',
		'#FFFFFF',
	]

	const scaleMedia = (
		mediaWidth: number,
		mediaHeight: number,
		maxWidth: number,
		maxHeight: number
	) => {
		const ratio = Math.min(maxWidth / mediaWidth, maxHeight / mediaHeight, 1)
		return { width: mediaWidth * ratio, height: mediaHeight * ratio }
	}

	// Анимация для video/gif
	useEffect(() => {
		let anim: number | null = null
		const hasAnimated = elements.some(
			el => el.type === 'video' || el.type === 'gif'
		)
		if (hasAnimated && layerRef.current) {
			const animate = () => {
				layerRef.current?.batchDraw()
				anim = requestAnimationFrame(animate)
			}
			anim = requestAnimationFrame(animate)
		}
		return () => {
			if (anim) cancelAnimationFrame(anim)
		}
	}, [elements])

	// Добавление uploadedFiles
	useEffect(() => {
		uploadedFiles.forEach(file => {
			if (processedFilesRef.current.has(file.url)) return
			processedFilesRef.current.add(file.url)

			const randomPos = () => ({
				x: Math.random() * (width - 200) + 50,
				y: Math.random() * (height - 200) + 50,
			})

			const addElement = (newEl: WhiteboardElement) => {
				setElements(prev => [
					...prev,
					{
						...newEl,
						scaleX: 1,
						scaleY: 1,
						rotation: 0,
						isPlaying: true,
						isMuted: false,
					},
				])
			}

			if (file.type === 'image' || file.type === 'gif') {
				const img = new window.Image()
				img.src = file.url
				img.onload = () => {
					console.log(
						`Image loaded: ${file.file.name}, width: ${img.width}, height: ${img.height}`
					)
					const scaled = scaleMedia(img.width, img.height, 400, 300)
					addElement({
						id: uuidv4(),
						type: file.type === 'gif' ? 'gif' : 'image',
						x: randomPos().x,
						y: randomPos().y,
						width: scaled.width,
						height: scaled.height,
						color: '',
						strokeWidth: 0,
						fileUrl: file.url,
						fileType: file.file.type,
						fileName: file.file.name,
					})
					if (file.type === 'gif') {
						img
							.decode()
							.catch(() =>
								console.error(`Failed to decode GIF: ${file.file.name}`)
							)
					}
				}
				img.onerror = () =>
					console.error(`Failed to load image: ${file.file.name}`)
			} else if (file.type === 'video') {
				const video = document.createElement('video')
				video.src = file.url
				video.preload = 'auto'
				video.playsInline = true // Для iOS
				video.onloadedmetadata = () => {
					console.log(
						`Video loaded: ${file.file.name}, width: ${video.videoWidth}, height: ${video.videoHeight}`
					)
					const scaled = scaleMedia(
						video.videoWidth,
						video.videoHeight,
						400,
						300
					)
					addElement({
						id: uuidv4(),
						type: 'video',
						x: randomPos().x,
						y: randomPos().y,
						width: scaled.width,
						height: scaled.height,
						color: '',
						strokeWidth: 0,
						fileUrl: file.url,
						fileType: 'video',
						fileName: file.file.name,
					})
					video.play().catch(console.error)
				}
				video.onerror = () =>
					console.error(`Failed to load video: ${file.file.name}`)
			} else if (
				file.type === 'text' ||
				file.type === 'quiz' ||
				file.type === 'material'
			) {
				const content = file.content || `Файл: ${file.file.name}`
				addElement({
					id: uuidv4(),
					type: 'text',
					x: randomPos().x,
					y: randomPos().y,
					text: content,
					color,
					strokeWidth,
				})
			}
		})
	}, [uploadedFiles, width, height, color, strokeWidth])

	// Dropzone для drag&drop
	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			acceptedFiles.forEach(file => {
				const url = URL.createObjectURL(file)
				const randomPos = () => ({
					x: Math.random() * (width - 200) + 50,
					y: Math.random() * (height - 200) + 50,
				})
				const fileType = file.type.split('/')[0] as 'image' | 'video'

				if (fileType === 'image') {
					const img = new window.Image()
					img.src = url
					img.onload = () => {
						console.log(
							`Image loaded: ${file.name}, width: ${img.width}, height: ${img.height}`
						)
						const scaled = scaleMedia(img.width, img.height, 400, 300)
						setElements(prev => [
							...prev,
							{
								id: uuidv4(),
								type: file.type.includes('gif') ? 'gif' : 'image',
								x: randomPos().x,
								y: randomPos().y,
								width: scaled.width,
								height: scaled.height,
								color: '',
								strokeWidth: 0,
								fileUrl: url,
								fileType: file.type,
								fileName: file.name,
								scaleX: 1,
								scaleY: 1,
								rotation: 0,
							},
						])
						if (file.type.includes('gif'))
							img
								.decode()
								.catch(() =>
									console.error(`Failed to decode GIF: ${file.name}`)
								)
					}
					img.onerror = () =>
						console.error(`Failed to load image: ${file.name}`)
				} else if (fileType === 'video') {
					const video = document.createElement('video')
					video.src = url
					video.preload = 'auto'
					video.playsInline = true
					video.onloadedmetadata = () => {
						console.log(
							`Video loaded: ${file.name}, width: ${video.videoWidth}, height: ${video.videoHeight}`
						)
						const scaled = scaleMedia(
							video.videoWidth,
							video.videoHeight,
							400,
							300
						)
						setElements(prev => [
							...prev,
							{
								id: uuidv4(),
								type: 'video',
								x: randomPos().x,
								y: randomPos().y,
								width: scaled.width,
								height: scaled.height,
								color: '',
								strokeWidth: 0,
								fileUrl: url,
								fileType: 'video',
								fileName: file.name,
								scaleX: 1,
								scaleY: 1,
								rotation: 0,
								isPlaying: true,
								isMuted: false,
							},
						])
						video.play().catch(console.error)
					}
					video.onerror = () =>
						console.error(`Failed to load video: ${file.name}`)
				}
			})
		},
		[width, height]
	)

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { 'image/*': [], 'video/*': [] },
	})

	// Нормализация (для negative sizes)
	const normalizeElement = (el: WhiteboardElement): WhiteboardElement => {
		let newEl = { ...el }
		if (el.type === 'line' || el.type === 'arrow') {
			if (!el.points || el.points.length < 2) return newEl
			let minX = Infinity,
				minY = Infinity
			for (let i = 0; i < el.points.length; i += 2) {
				minX = Math.min(minX, el.points[i])
				minY = Math.min(minY, el.points[i + 1])
			}
			const newPoints = el.points.map((p, i) =>
				i % 2 === 0 ? p - minX : p - minY
			)
			newEl = { ...newEl, x: el.x + minX, y: el.y + minY, points: newPoints }
		} else if (['rectangle', 'sticky'].includes(el.type)) {
			let w = el.width || 0,
				h = el.height || 0
			if (w < 0) {
				newEl.x += w
				w = -w
			}
			if (h < 0) {
				newEl.y += h
				h = -h
			}
			newEl = { ...newEl, width: w, height: h }
		} else if (el.type === 'circle') {
			newEl.radius = Math.abs(el.radius || 0)
		}
		return newEl
	}

	const getRelativePointerPosition = () => {
		const stage = stageRef.current
		if (!stage) return { x: 0, y: 0 }
		const pos = stage.getPointerPosition()
		if (!pos) return { x: 0, y: 0 }
		return {
			x: (pos.x - stage.x()) / stage.scaleX(),
			y: (pos.y - stage.y()) / stage.scaleY(),
		}
	}

	const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
		if (tool === 'select') {
			const target = e.target
			const stage = target.getStage()
			if (target === stage || target === layerRef.current) setSelectedId(null)
			return
		}

		const pos = getRelativePointerPosition()

		if (tool === 'text') {
			const newText = prompt('Введите текст:') || 'Текст'
			setElements(prev => [
				...prev,
				{
					id: uuidv4(),
					type: 'text',
					x: pos.x,
					y: pos.y,
					text: newText,
					color,
					strokeWidth,
					width: 200, // Initial for wrap
					height: 50,
					scaleX: 1,
					scaleY: 1,
					rotation: 0,
				},
			])
			return
		}

		if (tool === 'sticky') {
			const stickyId = uuidv4(),
				textId = uuidv4()
			setElements(prev => [
				...prev,
				{
					id: stickyId,
					type: 'sticky',
					x: pos.x,
					y: pos.y,
					width: 200,
					height: 150,
					color,
					fill: fillColor,
					strokeWidth,
					scaleX: 1,
					scaleY: 1,
					rotation: 0,
					children: [
						{
							id: textId,
							type: 'text',
							x: 10,
							y: 10,
							text: 'Sticky Note\nДвойной клик для редактирования',
							color: '#000000',
							strokeWidth: 1,
							width: 180,
							height: 130,
							scaleX: 1,
							scaleY: 1,
							rotation: 0,
						},
					],
				},
			])
			return
		}

		setIsDrawing(true)
		let newElement: WhiteboardElement = {} as WhiteboardElement

		if (tool === 'pen' || tool === 'eraser') {
			newElement = {
				id: uuidv4(),
				type: 'line',
				x: pos.x,
				y: pos.y,
				points: [0, 0],
				color: tool === 'eraser' ? '#FFFFFF' : color,
				strokeWidth: tool === 'eraser' ? 20 : strokeWidth,
				scaleX: 1,
				scaleY: 1,
				rotation: 0,
			}
		} else if (tool === 'arrow') {
			newElement = {
				id: uuidv4(),
				type: 'arrow',
				x: pos.x,
				y: pos.y,
				points: [0, 0, 0, 0], // Relative
				color,
				strokeWidth,
				scaleX: 1,
				scaleY: 1,
				rotation: 0,
			}
		} else if (tool === 'rectangle') {
			newElement = {
				id: uuidv4(),
				type: 'rectangle',
				x: pos.x,
				y: pos.y,
				width: 0,
				height: 0,
				color,
				fill: fillColor,
				strokeWidth,
				scaleX: 1,
				scaleY: 1,
				rotation: 0,
			}
		} else if (tool === 'circle') {
			newElement = {
				id: uuidv4(),
				type: 'circle',
				x: pos.x, // Center
				y: pos.y, // Center
				radius: 0,
				color,
				fill: fillColor,
				strokeWidth,
				scaleX: 1,
				scaleY: 1,
				rotation: 0,
			}
		}
		setElements(prev => [...prev, newElement])
	}

	const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
		if (!isDrawing) return
		const point = getRelativePointerPosition()
		if (elements.length === 0) return

		const lastEl = elements[elements.length - 1]
		let updatedEl = { ...lastEl }

		if (tool === 'pen' || tool === 'eraser') {
			if (lastEl.type === 'line') {
				const relX = point.x - lastEl.x
				const relY = point.y - lastEl.y
				updatedEl.points = [...(lastEl.points || []), relX, relY]
			}
		} else if (tool === 'arrow') {
			if (lastEl.type === 'arrow') {
				const relX = point.x - lastEl.x
				const relY = point.y - lastEl.y
				updatedEl.points = [0, 0, relX, relY]
			}
		} else if (tool === 'rectangle') {
			if (lastEl.type === 'rectangle') {
				updatedEl.width = point.x - lastEl.x
				updatedEl.height = point.y - lastEl.y
			}
		} else if (tool === 'circle') {
			if (lastEl.type === 'circle') {
				const dx = point.x - lastEl.x
				const dy = point.y - lastEl.y
				updatedEl.radius = Math.sqrt(dx * dx + dy * dy)
			}
		}

		setElements(prev => {
			const newPrev = [...prev]
			newPrev[newPrev.length - 1] = updatedEl
			return newPrev
		})
	}

	const handleMouseUp = () => {
		if (isDrawing && elements.length > 0) {
			const lastEl = elements[elements.length - 1]
			const normalized = normalizeElement(lastEl)
			setElements(prev => {
				const newPrev = [...prev]
				newPrev[newPrev.length - 1] = normalized
				return newPrev
			})
		}
		setIsDrawing(false)
	}

	// Common handlers для select/transform
	const onSelect = useCallback((id: string) => {
		setSelectedId(id)
	}, [])

	const onDragEnd = useCallback(
		(e: Konva.KonvaEventObject<DragEvent>, id: string) => {
			const node = e.target
			setElements(prev =>
				prev.map(el =>
					el.id === id ? { ...el, x: node.x(), y: node.y() } : el
				)
			)
		},
		[]
	)

	const onTransformEnd = useCallback(
		(e: Konva.KonvaEventObject<Event>, id: string, el: WhiteboardElement) => {
			const node = e.target
			const stage = stageRef.current
			const scaleX = node.scaleX()
			const scaleY = node.scaleY()

			// Reset scale to 1
			node.scaleX(1)
			node.scaleY(1)

			setElements(prev =>
				prev.map(currentEl => {
					if (currentEl.id !== id) return currentEl

					let updated = {
						...currentEl,
						x: node.x(),
						y: node.y(),
						rotation: node.rotation(),
						scaleX: 1,
						scaleY: 1,
					}

					if (['image', 'gif', 'video'].includes(el.type)) {
						// Для медиа: update width/height
						updated.width = Math.max((el.width || 0) * scaleX, 20)
						updated.height = Math.max((el.height || 0) * scaleY, 20)
						console.log(
							`Transformed media ${el.id}: new width=${updated.width}, new height=${updated.height}`
						)
					} else if (el.type === 'rectangle' || el.type === 'sticky') {
						// Для rect/sticky: update size
						updated.width = Math.max((el.width || 0) * scaleX, 20)
						updated.height = Math.max((el.height || 0) * scaleY, 20)
					} else if (el.type === 'circle') {
						// Для circle: update radius (average scale)
						const scale = (scaleX + scaleY) / 2
						updated.radius = Math.max((el.radius || 0) * scale, 10)
					} else if (el.type === 'text') {
						// Для text: update width и fontSize
						updated.width = Math.max((el.width || 100) * scaleX, 50)
						// Можно добавить fontSize: (el.fontSize || 20) * scaleY, но для простоты width
					} else if (['line', 'arrow'].includes(el.type)) {
						// Для line/arrow: scale points
						if (el.points) {
							const newPoints = el.points.map((p, i) => {
								if (i % 2 === 0) return p * scaleX // x
								return p * scaleY // y
							})
							updated.points = newPoints
						}
					}

					// Для sticky: recursively update children
					if (updated.children) {
						updated.children = updated.children.map(child => {
							let updatedChild = { ...child }
							if (child.type === 'text') {
								updatedChild.width = (child.width || 0) * scaleX
								updatedChild.height = (child.height || 0) * scaleY
							}
							return updatedChild
						})
					}

					return updated
				})
			)
		},
		[]
	)

	// Attach transformer
	useEffect(() => {
		if (selectedId && trRef.current && layerRef.current) {
			const node = layerRef.current.findOne(`#${selectedId}`) as Konva.Node
			if (node) {
				trRef.current.nodes([node])
				trRef.current.getLayer()?.batchDraw()
			}
		} else if (trRef.current) {
			trRef.current.nodes([])
		}
	}, [selectedId])

	const checkDeselect = (
		e: Konva.KonvaEventObject<MouseEvent | TouchEvent>
	) => {
		const stage = e.target.getStage()
		if (e.target === stage) setSelectedId(null)
	}

	// Зум/пан
	const handleWheel = useCallback(
		(e: Konva.KonvaEventObject<WheelEvent>) => {
			if (tool !== 'select') return
			e.evt.preventDefault()
			const stage = stageRef.current
			if (!stage) return
			const scaleBy = 1.05
			const oldScale = stage.scaleX()
			const pointer = stage.getPointerPosition()
			if (!pointer) return
			const mousePointTo = {
				x: (pointer.x - stage.x()) / oldScale,
				y: (pointer.y - stage.y()) / oldScale,
			}
			const newScale =
				e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy
			stage.scale({ x: newScale, y: newScale })
			const newPos = {
				x: pointer.x - mousePointTo.x * newScale,
				y: pointer.y - mousePointTo.y * newScale,
			}
			stage.position(newPos)
			stage.batchDraw()
		},
		[tool]
	)

	// Toggle play/pause/mute for video
	const toggleVideoPlay = (id: string) => {
		setElements(prev =>
			prev.map(el =>
				el.id === id && el.type === 'video'
					? { ...el, isPlaying: !el.isPlaying }
					: el
			)
		)
	}

	const toggleVideoMute = (id: string) => {
		setElements(prev =>
			prev.map(el =>
				el.id === id && el.type === 'video'
					? { ...el, isMuted: !el.isMuted }
					: el
			)
		)
	}

	// MediaElement (memoized, с preload для GIF и controls для video)
	const MediaElement = React.memo(
		({ element }: { element: WhiteboardElement }) => {
			const [media, setMedia] = useState<
				HTMLImageElement | HTMLVideoElement | null
			>(null)
			const mediaRef = useRef<HTMLImageElement | HTMLVideoElement | null>(null)
			const isMounted = useRef(true)

			useEffect(() => {
				isMounted.current = true
				let newMedia: HTMLImageElement | HTMLVideoElement | null = null

				if (element.type === 'image' || element.type === 'gif') {
					newMedia = new window.Image()
					;(newMedia as HTMLImageElement).src = element.fileUrl || ''
					;(newMedia as HTMLImageElement).onload = () => {
						if (isMounted.current) {
							console.log(
								`Media loaded: ${element.fileName}, width: ${newMedia?.width}, height: ${newMedia?.height}`
							)
							setMedia(newMedia)
							mediaRef.current = newMedia
							if (element.type === 'gif') {
								;(newMedia as HTMLImageElement).style.display = 'none'
								;(newMedia as HTMLImageElement).style.display = 'block'
							}
						}
					}
					;(newMedia as HTMLImageElement).onerror = () =>
						console.error(`Failed to load image: ${element.fileName}`)
				} else if (element.type === 'video') {
					newMedia = document.createElement('video')
					;(newMedia as HTMLVideoElement).src = element.fileUrl || ''
					;(newMedia as HTMLVideoElement).loop = true
					;(newMedia as HTMLVideoElement).muted = element.isMuted ?? false
					;(newMedia as HTMLVideoElement).playsInline = true
					;(newMedia as HTMLVideoElement).preload = 'auto'
					;(newMedia as HTMLVideoElement).onloadedmetadata = () => {
						if (isMounted.current) {
							console.log(
								`Video loaded: ${element.fileName}, width: ${newMedia?.width}, height: ${newMedia?.height}`
							)
							setMedia(newMedia)
							mediaRef.current = newMedia
							if (element.isPlaying ?? true) {
								;(newMedia as HTMLVideoElement).play().catch(console.error)
							}
						}
					}
					;(newMedia as HTMLVideoElement).onerror = () =>
						console.error(`Failed to load video: ${element.fileName}`)
				}

				return () => {
					isMounted.current = false
					if (newMedia instanceof HTMLVideoElement) newMedia.pause()
				}
			}, [element.fileUrl, element.type, element.isMuted, element.isPlaying])

			useEffect(() => {
				if (mediaRef.current instanceof HTMLVideoElement) {
					mediaRef.current.muted = element.isMuted ?? false
					if (element.isPlaying) {
						mediaRef.current.play().catch(console.error)
					} else {
						mediaRef.current.pause()
					}
				}
			}, [element.isPlaying, element.isMuted])

			if (!media || !element.width || !element.height) {
				return null
			}

			console.log(
				`Rendering media ${element.id}: width=${element.width}, height=${element.height}`
			)

			return (
				<Group
					id={element.id}
					x={element.x}
					y={element.y}
					rotation={element.rotation}
					scaleX={element.scaleX}
					scaleY={element.scaleY}
					draggable={tool === 'select'}
					onClick={() => {
						onSelect(element.id)
						if (element.type === 'video') toggleVideoPlay(element.id)
					}}
					onTap={() => {
						onSelect(element.id)
						if (element.type === 'video') toggleVideoPlay(element.id)
					}}
					onDblClick={() => {
						if (element.type === 'video') toggleVideoMute(element.id)
					}}
					onDragEnd={e => onDragEnd(e, element.id)}
					onTransformEnd={e => onTransformEnd(e, element.id, element)}
				>
					<KonvaImage
						image={media}
						width={element.width}
						height={element.height}
					/>
					{element.type === 'video' && selectedId === element.id && (
						<Group y={element.height - 40}>
							<Rect width={element.width} height={40} fill='rgba(0,0,0,0.5)' />
							<Text
								text={element.isPlaying ? 'Pause' : 'Play'}
								x={10}
								y={10}
								fontSize={16}
								fill='white'
								onClick={() => toggleVideoPlay(element.id)}
							/>
							<Text
								text={element.isMuted ? 'Unmute' : 'Mute'}
								x={element.width - 60}
								y={10}
								fontSize={16}
								fill='white'
								onClick={() => toggleVideoMute(element.id)}
							/>
						</Group>
					)}
				</Group>
			)
		}
	)

	// Render single element
	const renderElement = (element: WhiteboardElement, isChild = false) => {
		const commonProps = {
			id: element.id,
			x: element.x,
			y: element.y,
			rotation: element.rotation || 0,
			scaleX: element.scaleX || 1,
			scaleY: element.scaleY || 1,
			draggable: tool === 'select' && !isChild,
			onClick: () => !isChild && onSelect(element.id),
			onTap: () => !isChild && onSelect(element.id),
			onDragEnd: (e: any) => onDragEnd(e, element.id),
			onTransformEnd: (e: any) => onTransformEnd(e, element.id, element),
		}

		switch (element.type) {
			case 'line':
				return (
					<Line
						{...commonProps}
						points={element.points}
						stroke={element.color}
						strokeWidth={element.strokeWidth}
						tension={0}
						lineCap='round'
						lineJoin='round'
					/>
				)
			case 'rectangle':
			case 'pdf': // Fallback as rect for materials
				return (
					<Rect
						{...commonProps}
						width={element.width || 100}
						height={element.height || 100}
						stroke={element.color}
						strokeWidth={element.strokeWidth}
						fill={element.fill}
					/>
				)
			case 'circle':
				return (
					<Circle
						{...commonProps}
						radius={element.radius || 50}
						stroke={element.color}
						strokeWidth={element.strokeWidth}
						fill={element.fill}
					/>
				)
			case 'arrow':
				return (
					<Arrow
						{...commonProps}
						points={element.points || [0, 0, 50, 0]}
						stroke={element.color}
						strokeWidth={element.strokeWidth}
						fill={element.color}
						pointerLength={10}
						pointerWidth={10}
					/>
				)
			case 'text':
				return (
					<Text
						{...commonProps}
						text={element.text || ''}
						fontSize={20}
						fill={element.color}
						width={element.width || 200}
						height={element.height || 50}
						padding={5}
						onDblClick={() => {
							const newText = prompt('Редактировать текст:', element.text)
							if (newText !== null) {
								setElements(prev =>
									prev.map(el =>
										el.id === element.id ? { ...el, text: newText } : el
									)
								)
							}
						}}
					/>
				)
			case 'image':
			case 'gif':
			case 'video':
				return <MediaElement key={element.id} element={element} />
			default:
				return null
		}
	}

	// Render all
	const renderElements = () =>
		elements.map(el => {
			if (el.children && el.type === 'sticky') {
				return (
					<Group
						key={el.id}
						{...{
							x: el.x,
							y: el.y,
							rotation: el.rotation || 0,
							scaleX: el.scaleX || 1,
							scaleY: el.scaleY || 1,
							draggable: tool === 'select',
							onClick: () => onSelect(el.id),
							onTap: () => onSelect(el.id),
							onDragEnd: (e: any) => onDragEnd(e, el.id),
							onTransformEnd: (e: any) => onTransformEnd(e, el.id, el),
						}}
					>
						<Rect
							width={el.width || 200}
							height={el.height || 150}
							stroke={el.color}
							strokeWidth={el.strokeWidth}
							fill={el.fill}
							cornerRadius={8}
						/>
						{el.children.map(child => renderElement(child, true))}
					</Group>
				)
			}
			return <React.Fragment key={el.id}>{renderElement(el)}</React.Fragment>
		})

	const clearCanvas = () => {
		setElements([])
		setSelectedId(null)
		processedFilesRef.current.clear()
	}

	const exportAsImage = () => {
		if (stageRef.current) {
			const uri = stageRef.current.toDataURL({ pixelRatio: 2 })
			const link = document.createElement('a')
			link.download = `whiteboard-${Date.now()}.png`
			link.href = uri
			link.click()
		}
	}

	const undo = () => {
		setElements(prev => {
			const newEls = prev.slice(0, -1)
			if (selectedId && !newEls.find(el => el.id === selectedId))
				setSelectedId(null)
			return newEls
		})
	}

	return (
		<div className={styles.whiteboardContainer} style={{ width, height }}>
			<header className={styles.header}>
				<h1>🎨 Whiteboard</h1>
				<div className={styles.controls}>
					<button
						className={styles.button}
						onClick={undo}
						disabled={elements.length === 0}
					>
						↩️ Отменить
					</button>
					<button className={styles.button} onClick={clearCanvas}>
						🗑️ Очистить
					</button>
					<button className={styles.primaryButton} onClick={exportAsImage}>
						💾 Сохранить
					</button>
				</div>
			</header>

			<div className={styles.toolbar}>
				<div className={styles.tools}>
					{tools.map(t => (
						<button
							key={t.type}
							className={`${styles.toolButton} ${
								tool === t.type ? styles.active : ''
							}`}
							onClick={() => setTool(t.type)}
							title={t.name}
						>
							{t.icon}
						</button>
					))}
				</div>

				<div className={styles.colorPicker}>
					<span>Stroke:</span>
					{colors.map(c => (
						<button
							key={c}
							className={styles.colorButton}
							style={{ backgroundColor: c }}
							onClick={() => setColor(c)}
							title={c}
						/>
					))}
				</div>

				<div className={styles.colorPicker}>
					<span>Fill:</span>
					{colors.map(c => (
						<button
							key={c + 'fill'}
							className={styles.colorButton}
							style={{ backgroundColor: c }}
							onClick={() => setFillColor(c)}
							title={c}
						/>
					))}
				</div>

				<div className={styles.brushSize}>
					<label>Кисть:</label>
					<input
						type='range'
						min='1'
						max='50'
						value={strokeWidth}
						onChange={e => setStrokeWidth(Number(e.target.value))}
					/>
					<span>{strokeWidth}px</span>
				</div>

				<div {...getRootProps()} className={styles.uploadArea}>
					<input {...getInputProps()} />
					{isDragActive ? <p>📥 Отпустите...</p> : <p>📎 Drag files</p>}
				</div>
			</div>

			<div className={styles.canvasContainer}>
				<Stage
					width={width} // Full width, no -40
					height={height - 160} // Adjust for header/toolbar/status
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={handleMouseUp}
					onWheel={tool === 'select' ? handleWheel : undefined}
					onClick={checkDeselect}
					onTap={checkDeselect}
					draggable={tool === 'select'}
					ref={stageRef}
				>
					<Layer ref={layerRef}>
						{renderElements()}
						<Transformer
							ref={trRef}
							boundBoxFunc={(oldBox, newBox) => {
								if (newBox.width < 20 || newBox.height < 20) return oldBox
								return newBox
							}}
							rotateEnabled={true}
							resizeEnabled={true}
							anchorSize={8}
							borderStrokeWidth={2}
							borderStroke='blue'
						/>
					</Layer>
				</Stage>
			</div>

			<div className={styles.statusBar}>
				<span>Tool: {tools.find(t => t.type === tool)?.name}</span>
				<span>
					Color: {color} | Fill: {fillColor}
				</span>
				<span>
					Elements: {elements.length} | Selected: {selectedId || 'None'}
				</span>
			</div>
		</div>
	)
}

export default LocalWhiteboard
