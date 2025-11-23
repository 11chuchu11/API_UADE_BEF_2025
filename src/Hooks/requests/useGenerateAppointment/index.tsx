import { useData } from '@/Hooks/useData'
import { API_PATHS, COOKIES } from '@/utils/constants'
import { deleteCookie } from '@/utils/cookies'
import getRequestClient from '@/utils/request'
import { useState } from 'react'

export const useGenerateAppointment = (successCallback?: () => void) => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const { updateData, data } = useData()

	const requestClient = getRequestClient({
		authorizationCallback: () => {
			setError(true)
			setLoading(false)
			deleteCookie(COOKIES.ACCESS_TOKEN.NAME)
		},
	})

	const generateAppointment = async (body: any) => {
		setError(false)
		setLoading(true)
		try {
			const { data: appointmentsData } = await requestClient.post(API_PATHS.APPOINTMENTS.CREATE, body)

			const prevAppointments = data.appointments ?? []
			updateData({ appointments: [...prevAppointments, appointmentsData] })
			successCallback?.()
        } catch (error) {
            console.log(error)
			console.log('Ocurrion un error.')
		} finally {
			setLoading(false)
		}
	}

	return {  generateAppointment, loading, error }
}

