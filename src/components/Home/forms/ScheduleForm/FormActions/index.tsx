import * as React from 'react'
import { Button } from '@components/ui/button'
import { Spinner } from '@/components/ui/spinner'

type Props = {
	onCancel?: () => void
	showCancel?: boolean
	submitting?: boolean
	disabled?: boolean
}

export const FormActions: React.FC<Props> = ({ onCancel, showCancel, submitting, disabled }) => {
	return (
		<div className="md:col-span-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
			{showCancel && onCancel && (
				<Button type="button" variant="brandOutline" size="pill" className="uppercase tracking-wide w-full sm:w-auto" onClick={onCancel}>
					Cancelar
				</Button>
			)}
			<Button
				type="submit"
				variant="brand"
				size="pill"
				disabled={!!submitting || !!disabled}
				className="uppercase tracking-wide w-full sm:w-auto">
				{!submitting && 'Solicitar Reserva'}
				{submitting && (
					<>
						<Spinner />
						Solicitando Reserva
					</>
				)}
			</Button>
		</div>
	)
}

