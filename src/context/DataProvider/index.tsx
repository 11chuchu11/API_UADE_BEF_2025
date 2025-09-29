import { createContext, useState } from 'react'
import type { PropsWithChildren } from 'react'

export const DataContext = createContext<any>(null)

export const DataProvider = (props: PropsWithChildren) => {
	const [data, setData] = useState({
		login: {
			user: 'doctor',
			password: '12345'
		}
	})
	return <DataContext.Provider value={{ data, setData }}>{props.children}</DataContext.Provider>
}

