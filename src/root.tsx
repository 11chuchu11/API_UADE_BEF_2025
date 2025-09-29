import '@/styles/app.css'

import * as React from 'react'
import { Links, Meta, Scripts, ScrollRestoration } from 'react-router'
import AppLayout from '@/components/layout/AppLayout'
import { DataProvider } from '@/context/DataProvider'

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<DataProvider>{children}</DataProvider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function Root() {
	return <AppLayout />
}

