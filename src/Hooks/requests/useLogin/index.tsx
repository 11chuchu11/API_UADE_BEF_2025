import { API_PATHS, COOKIES } from '@/utils/constants'
import { deleteCookie } from '@/utils/cookies'
import getRequestClient from '@/utils/request'
import { useState } from 'react'

export const useLogin = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	const requestClient = getRequestClient({
		authorizationCallback: () => {
			setError(true)
			setLoading(false)
			deleteCookie(COOKIES.ACCESS_TOKEN.NAME)
		},
	})

	const authUser = async (body: any,successCallback?: (data: any) => void, errorCallback?: (data?: any) => void) => {
		setError(false)
		setLoading(true)
		try {
			const { data } = await requestClient.post(API_PATHS.AUTH, body)

			successCallback?.(data)
		} catch (error) {
			console.log(error)
            console.log('Ocurrion un error.')
            errorCallback?.()
		} finally {
			setLoading(false)
		}
	}

	return { authUser, loading, error }
}

