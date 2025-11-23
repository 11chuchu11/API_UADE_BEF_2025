import { useState } from 'react'
import { ActionButton } from '@components/ui/buttons/ActionButton'
import { ScheduleDialog } from '@/components/Home/feedback/ScheduleDialog'
import { Spinner } from '@/components/ui/spinner'
import { useGetAllAppointments } from '@/Hooks/requests/useGetAllAppointments'

export function ReserveCta() {
	const [open, setOpen] = useState(false)
	const { fetchAllAppointments, loading } = useGetAllAppointments(() => { 
		setOpen(true)
	})

	const onAction = async () => {
		await fetchAllAppointments()
	}

	return (
		<>
			<ActionButton variant="brand" size="lg" onClick={() => onAction()} disabled={loading}>
				{loading && <Spinner />} Reserva de citas
			</ActionButton>

			<ScheduleDialog open={open} onOpenChange={setOpen} />
		</>
	)
}

