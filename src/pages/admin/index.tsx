// Components
import AdminPage from '@/components/Admin'

// Utils
import { COOKIES } from '@/utils/constants'
import { getCookie } from '@/utils/cookies'

// Hooks
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function Admin() {
	let isLogged = false
	const navigate = useNavigate()

	useEffect(() => {
		isLogged = Boolean(getCookie(COOKIES.IS_LOGGED.NAME))

		if (!isLogged) navigate('/')
	}, [])

	return <AdminPage /> 
}



