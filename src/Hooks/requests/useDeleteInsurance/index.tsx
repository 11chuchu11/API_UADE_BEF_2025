import { API_PATHS, COOKIES } from '@/utils/constants'
import { deleteCookie } from '@/utils/cookies'
import getRequestClient from '@/utils/request'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export const useDeleteInsurance = () => {
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

	const deleteInsurance = async (id: number, successCallback?: (data?: any) => void, errorCallback?: (data?: any) => void) => {
		setError(false)
		setLoading(true)
		try {
			await requestClient.delete(API_PATHS.INSURANCES.DELETE(id))

			successCallback?.()
		} catch (error) {
			console.log(error)
			console.log('Ocurrion un error.')
			errorCallback?.()
		} finally {
			setLoading(false)
		}
	}

	return { deleteInsurance, loading, error }
}

