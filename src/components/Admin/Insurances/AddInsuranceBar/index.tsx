import * as React from 'react'
import { useState } from 'react'
import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'
import type { Insurance } from '../types'
import { Spinner } from '@/components/ui/spinner'

type Props = { onAdd(item: Insurance, setLoading: React.Dispatch<React.SetStateAction<boolean>>): void }

export const AddInsuranceBar: React.FC<Props> = ({ onAdd }) => {
	const [adding, setAdding] = useState(false)
	const [newName, setNewName] = useState('')
	const [newDesc, setNewDesc] = useState('')
	const [loading, setLoading] = useState(false)

	const handleAdd = async () => {
		const name = newName.trim()
		if (!name) return
		await onAdd(
			{
				name,
				description: newDesc.trim() || undefined,
				active: true,
			},
			setLoading
		)
		setNewName('')
		setNewDesc('')
		setAdding(false)
	}

	return (
		<div className="px-4 sm:px-5 py-4 border-t border-secondary flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
			{adding ? (
				<>
					<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:flex-1">
						<Input value={newName} onChange={e => setNewName(e.target.value)} placeholder="Nombre de la obra social" />
						<Input value={newDesc} onChange={e => setNewDesc(e.target.value)} placeholder="Descripción (opcional)" />
					</div>

					<div className="flex w-full sm:w-auto gap-2 sm:justify-end sm:ml-auto">
						<Button variant="brand" onClick={handleAdd} disabled={loading}>
							{loading && <Spinner />}
							{!loading && 'Guardar'}
						</Button>
						<Button
							disabled={loading}
							variant="brandOutline"
							onClick={() => {
								setAdding(false)
								setNewName('')
								setNewDesc('')
							}}>
							Cancelar
						</Button>
					</div>
				</>
			) : (
				<div className="flex w-full">
					<Button variant="brand" onClick={() => setAdding(true)} className="mx-auto sm:mx-0 sm:ml-auto">
						Agregar
					</Button>
				</div>
			)}
		</div>
	)
}

