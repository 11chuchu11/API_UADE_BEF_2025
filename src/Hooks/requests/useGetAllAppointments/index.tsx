import { useData } from '@/Hooks/useData'
import { API_PATHS, COOKIES } from '@/utils/constants'
import { deleteCookie } from '@/utils/cookies'
import getRequestClient from '@/utils/request'
import { useState } from 'react'

export const useGetAllAppointments = (successCallback?: () => void) => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const { updateData } = useData()

	const requestClient = getRequestClient({
		authorizationCallback: () => {
			setError(true)
			setLoading(false)
			deleteCookie(COOKIES.ACCESS_TOKEN.NAME)
		},
	})

	const fetchAllAppointments = async () => {
		setError(false)
		setLoading(true)
		try {
			const { data: appointmentsData } = await requestClient.get(API_PATHS.APPOINTMENTS.NEXT)
			const { data: insurancesData } = await requestClient.get(API_PATHS.INSURANCES.ALL)
			updateData({ appointments: appointmentsData, insurances: insurancesData })
			successCallback?.()
		} catch (error) {
			console.log('Ocurrion un error.')
		} finally {
			setLoading(false)
		}
	}

	return { fetchAllAppointments, loading, error }
}

