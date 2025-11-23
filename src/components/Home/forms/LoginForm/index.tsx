import * as React from 'react'
import { useState } from 'react'

//components
import { Label } from '@components/ui/label'
import { Input } from '@components/ui/input'
import { Button } from '@components/ui/button'
import { setCookie } from '@/utils/cookies'
import { COOKIES } from '@/utils/constants'
import { useLogin } from '@/Hooks/requests/useLogin'
import { Spinner } from '@/components/ui/spinner'

type LoginFormProps = {
	onSuccess: () => void
	onCancel?: () => void
}

export function LoginForm({ onSuccess, onCancel }: LoginFormProps) {
	const [user, setUser] = useState('')
	const [pass, setPass] = useState('')
	const [error, setError] = useState<string | null>(null)
	const { authUser, loading } = useLogin()

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		const { NAME, EXPIRATION } = COOKIES.ACCESS_TOKEN
		await authUser(
			{ username: user, password: pass },
			data => {
				setError(null)
				setCookie(NAME, data.token, EXPIRATION)
				onSuccess()
			},
			() => {
				setError('Usuario o contraseña incorrectos.')
			}
		)
	}

	return (
		<form onSubmit={handleSubmit} className="mx-auto mt-6 w-full space-y-5">
			<div>
				<Label htmlFor="usuario">Usuario</Label>
				<Input id="usuario" placeholder="Ingrese su cuenta" value={user} onChange={e => setUser(e.target.value)} className="mt-2" />
			</div>

			<div>
				<Label htmlFor="password">Contraseña</Label>
				<Input
					id="password"
					type="password"
					placeholder="Ingrese su Contraseña"
					value={pass}
					onChange={e => setPass(e.target.value)}
					className="mt-2"
				/>
				<div className="mt-2 text-sm text-primary underline underline-offset-4 cursor-default">¿Olvidó su contraseña?</div>
			</div>

			{error && <p className="text-sm text-rose-600">{error}</p>}

			<div className="mt-4 flex items-center justify-center gap-6">
				<Button type="button" variant="brandOutline" size="pill" className="uppercase tracking-wide" onClick={onCancel} disabled={loading}>
					Cancelar
				</Button>

				<Button type="submit" variant="brand" size="pill" className="uppercase tracking-wide" disabled={loading}>
					{!loading && 'Ingresar'}
					{loading && <Spinner />}
				</Button>
			</div>
		</form>
	)
}

