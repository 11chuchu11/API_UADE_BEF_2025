import { useData } from '@/Hooks/useData'
import { API_PATHS, COOKIES } from '@/utils/constants'
import { deleteCookie } from '@/utils/cookies'
import getRequestClient from '@/utils/request'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export const useAddInsurance = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const { updateData, data } = useData()
	const navigate = useNavigate()

	const requestClient = getRequestClient({
		authorizationCallback: () => {
			setError(true)
			setLoading(false)
			deleteCookie(COOKIES.ACCESS_TOKEN.NAME)
			navigate('/')
		},
	})

	const addInsurance = async (body: any,successCallback?: (data?:any) => void) => {
		setError(false)
		setLoading(true)
		try {
			const { data: insuranceData } = await requestClient.post(API_PATHS.INSURANCES.CREATE, body)

			const prevInsurances = data.insurances ?? []
			updateData({ insurances: [...prevInsurances, insuranceData] })
			successCallback?.()
		} catch (error) {
			console.log(error)
			console.log('Ocurrion un error.')
		} finally {
			setLoading(false)
		}
	}

	return { addInsurance, loading, error }
}

