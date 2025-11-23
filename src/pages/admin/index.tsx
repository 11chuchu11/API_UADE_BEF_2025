// Components
import AdminPage from '@/components/Admin'
import { useGetAllAppointments } from '@/Hooks/requests/useGetAllAppointments'

// Utils
import { COOKIES } from '@/utils/constants'
import { getCookie } from '@/utils/cookies'

// Hooks
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function Admin() {
	let isLogged = false
	const navigate = useNavigate()
	const { fetchAllAppointments } = useGetAllAppointments()

	useEffect(() => {
		isLogged = Boolean(getCookie(COOKIES.ACCESS_TOKEN.NAME))
		if (!isLogged) navigate('/')
		fetchAllAppointments()
	}, [])

	return <AdminPage />
}

