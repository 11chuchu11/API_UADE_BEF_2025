import { useData } from '@/Hooks/useData'
import { API_PATHS, COOKIES } from '@/utils/constants'
import { deleteCookie } from '@/utils/cookies'
import getRequestClient from '@/utils/request'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export const useUpdateInsurance = () => {
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

	const udpateInsurance = async (id: number, body: any, successCallback?: (data?: any) => void) => {
		setError(false)
		setLoading(true)
		try {
			const { data: insuranceData } = await requestClient.put(API_PATHS.INSURANCES.UPDATE(id), body)

			successCallback?.(insuranceData)
		} catch (error) {
			console.log(error)
			console.log('Ocurrion un error.')
		} finally {
			setLoading(false)
		}
	}

	return { udpateInsurance, loading, error }
}

