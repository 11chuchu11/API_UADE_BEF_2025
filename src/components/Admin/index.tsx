// src/app/admin/page.tsx (o donde tengas AdminPage)
import { Dashboard } from '@components/Admin/Dashboard'
import type { Appointment } from '@/components/Admin/Dashboard/types'
import { useData } from '@/Hooks/useData'
import { InsurancesSection } from './Insurances'
import { useUpdateAppointmentState } from '@/Hooks/requests/useUpdateAppointmentState'

export default function AdminPage() {
	const { data, updateData } = useData()
	const items = (data?.appointments as Appointment[]) ?? []
	const { confirmAppointment, cancelAppointment } = useUpdateAppointmentState()

	const handleConfirm = async (appt: Appointment, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
		setLoading(true)
		await confirmAppointment(Number(appt.id), () => {
			updateData({
				appointments: items.map(a => (a.id === appt.id ? { ...a, state: 'confirmed' } : a)),
			})
		})
		setLoading(false)
	}

	const handleCancel = async (appt: Appointment, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
		setLoading(true)
		await cancelAppointment(Number(appt.id), () => {
			updateData({
				appointments: items.filter(a => a.id !== appt.id),
			})
		})
		setLoading(false)
	}

	return (
		<main className="min-h-screen bg-secondary pt-20 pb-16">
			<Dashboard items={items} onConfirm={handleConfirm} onCancel={handleCancel} />
			<InsurancesSection />
		</main>
	)
}

