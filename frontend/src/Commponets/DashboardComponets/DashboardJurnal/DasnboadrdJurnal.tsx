import { Avatar, Chip, Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

interface StudentRow {
	id: number
	firstName: string
	lastName: string
	level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1'
	access: boolean
}

const columns: GridColDef<StudentRow>[] = [
	{
		field: 'student',
		headerName: 'Student',
		flex: 1,
		minWidth: 250,
		align: 'center',
		headerAlign: 'center',
		renderCell: params => (
			<Stack
				direction='row'
				spacing={2}
				alignItems='center'
				justifyContent='flex-start'
				sx={{ width: '100%' }}
			>
				<Avatar
					sx={{
						width: 42,
						height: 42,
						bgcolor: '#ff4785',
						fontSize: '14px',
						fontWeight: 'bold',
					}}
				>
					{params.row.firstName[0]}
					{params.row.lastName[0]}
				</Avatar>
				<Stack alignItems='flex-start'>
					<Typography variant='body1' fontWeight='600'>
						{params.row.firstName} {params.row.lastName}
					</Typography>
					<Typography variant='caption' color='text.secondary'>
						ID: {params.row.id}
					</Typography>
				</Stack>
			</Stack>
		),
	},
	{
		field: 'level',
		headerName: 'Level',
		flex: 1,
		minWidth: 150,
		align: 'center',
		headerAlign: 'center',
		renderCell: params => (
			<Box display='flex' justifyContent='center' width='100%'>
				<Chip
					label={params.value}
					size='small'
					color={
						params.value === 'C1'
							? 'success'
							: params.value === 'B2'
							? 'primary'
							: params.value === 'B1'
							? 'info'
							: params.value === 'A2'
							? 'warning'
							: 'default'
					}
					variant='filled'
					sx={{
						fontWeight: '600',
						minWidth: 60,
					}}
				/>
			</Box>
		),
	},
	{
		field: 'access',
		headerName: 'Access',
		flex: 1,
		minWidth: 150,
		align: 'center',
		headerAlign: 'center',
		renderCell: params => (
			<Box
				sx={{
					width: 32,
					height: 32,
					borderRadius: '50%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					bgcolor: params.value ? '#4caf50' : '#FF4785',
					color: '#ffffff',
					fontWeight: 'bold',
					fontSize: '16px',
				}}
			>
				{params.value ? '+' : '-'}
			</Box>
		),
	},
]

const rows: StudentRow[] = [
	{ id: 1, firstName: 'Jon', lastName: 'Snow', level: 'B2', access: true },
	{
		id: 2,
		firstName: 'Cersei',
		lastName: 'Lannister',
		level: 'C1',
		access: true,
	},
	{
		id: 3,
		firstName: 'Jaime',
		lastName: 'Lannister',
		level: 'A2',
		access: false,
	},
	{ id: 4, firstName: 'Arya', lastName: 'Stark', level: 'B1', access: true },
	{
		id: 5,
		firstName: 'Daenerys',
		lastName: 'Targaryen',
		level: 'C1',
		access: true,
	},
	{
		id: 6,
		firstName: 'Melisandre',
		lastName: 'Unknown',
		level: 'A1',
		access: false,
	},
	{
		id: 7,
		firstName: 'Ferrara',
		lastName: 'Clifford',
		level: 'B2',
		access: true,
	},
	{
		id: 8,
		firstName: 'Rossini',
		lastName: 'Frances',
		level: 'A2',
		access: false,
	},
	{ id: 9, firstName: 'Harvey', lastName: 'Roxie', level: 'B1', access: true },
	{
		id: 10,
		firstName: 'Michael',
		lastName: 'Jordan',
		level: 'C1',
		access: true,
	},
	{
		id: 11,
		firstName: 'Sarah',
		lastName: 'Connor',
		level: 'B2',
		access: false,
	},
	{ id: 12, firstName: 'John', lastName: 'Wick', level: 'A1', access: true },
]

export default function DashboardJournal() {
	return (
		<Box
			sx={{
				flex: 1,
				width: '100%',
				height: '100%',
				minHeight: 0,
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Box
				sx={{
					p: 3,
					backgroundColor: 'white',
					borderRadius: 2,
					boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					minWidth: 0,
				}}
			>
				<Typography
					variant='h5'
					fontWeight='700'
					gutterBottom
					sx={{ color: '#333', mb: 3 }}
				>
					Student Journal
				</Typography>

				<Box sx={{ flex: 1, minHeight: 0, width: '100%', minWidth: 0 }}>
					<DataGrid
						rows={rows}
						columns={columns}
						initialState={{
							pagination: {
								paginationModel: { pageSize: 10 },
							},
						}}
						pageSizeOptions={[5, 10, 25]}
						disableRowSelectionOnClick
						disableColumnMenu
						hideFooterSelectedRowCount
						sx={{
							height: '100%',
							width: '100%',
							border: 'none',
							'& .MuiDataGrid-cell': {
								borderBottom: '1px solid #f0f0f0',
								py: 1,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							},
							'& .MuiDataGrid-columnHeaders': {
								backgroundColor: '#f8f9fa',
								borderBottom: '2px solid #e0e0e0',
								fontWeight: '700',
								fontSize: '14px',
								color: '#333',
							},
							'& .MuiDataGrid-columnHeader': {
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							},
							'& .MuiDataGrid-columnHeaderTitleContainer': {
								width: '100%',
								justifyContent: 'center',
							},
							'& .MuiDataGrid-virtualScroller': {
								backgroundColor: 'white',
							},
							'& .MuiDataGrid-footerContainer': {
								borderTop: '1px solid #e0e0e0',
								backgroundColor: '#f8f9fa',
							},
							'& .MuiDataGrid-row:hover': {
								backgroundColor: 'rgba(255, 71, 133, 0.04)',
							},
							'& .MuiDataGrid-cell:focus': {
								outline: 'none',
							},
							'& .MuiDataGrid-columnHeader:focus': {
								outline: 'none',
							},
							'& .MuiDataGrid-cell--textCenter': {
								justifyContent: 'center',
							},
						}}
						slotProps={{
							pagination: {
								showFirstButton: true,
								showLastButton: true,
							},
						}}
					/>
				</Box>
			</Box>
		</Box>
	)
}
