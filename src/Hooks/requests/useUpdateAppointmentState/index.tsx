import { API_PATHS, COOKIES } from '@/utils/constants'
import { deleteCookie } from '@/utils/cookies'
import getRequestClient from '@/utils/request'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export const useUpdateAppointmentState = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const navigate = useNavigate()

	const requestClient = getRequestClient({
		authorizationCallback: () => {
			setError(true)
			setLoading(false)
			deleteCookie(COOKIES.ACCESS_TOKEN.NAME)
			navigate('/')
		},
	})

	const confirmAppointment = async (id: number, successCallback?: (data?: any) => void, errorCallback?: (data?: any) => void) => {
		setError(false)
		setLoading(true)
		try {
			await requestClient.patch(API_PATHS.APPOINTMENTS.CONFIRM(id))

			successCallback?.()
		} catch (error) {
			console.log(error)
			console.log('Ocurrion un error.')
			errorCallback?.()
		} finally {
			setLoading(false)
		}
	}
	const cancelAppointment = async (id: number, successCallback?: (data?: any) => void, errorCallback?: (data?: any) => void) => {
		setError(false)
		setLoading(true)
		try {
			await requestClient.patch(API_PATHS.APPOINTMENTS.CANCEL(id))

			successCallback?.()
		} catch (error) {
			console.log(error)
			console.log('Ocurrion un error.')
			errorCallback?.()
		} finally {
			setLoading(false)
		}
	}

	return { confirmAppointment, cancelAppointment, loading, error }
}

