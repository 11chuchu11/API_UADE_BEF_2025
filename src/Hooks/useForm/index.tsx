import { useState } from 'react'
import { useDebouncer } from '../useDebouncer'

interface Config  { 
  debounceTime?: number
}

export const useForm = (config?: Config) => {

	const { debounce } = useDebouncer<string>(config?.debounceTime ?? 400)
	const [formData, setFormData] = useState<any>({})

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		try {
			await debounce(value)
			setFormData((prev: any) => ({ ...prev, [name]: value }))
		} catch (err) {}
	}

	return { handleChange, formData }
}

