import * as React from 'react'
import { Card } from '@components/ui/card'

import { useScheduleForm } from '@/Hooks/useScheduleForm'
import { PersonalFields } from './PersonalFields'
import { BookingCalendar } from './BookingCalendar'
import { InsuranceSelect } from './InsuranceSelect'
import { TimeSelect } from './TimeSelect'
import { FormActions } from './FormActions'
import { SuccessModal } from './SuccessModal'

type Props = { onCancel?: () => void; onSuccess?: (data: any) => void; showCancel?: boolean }

export const ScheduleForm: React.FC<Props> = ({ onCancel, onSuccess, showCancel }) => {
	const [successOpen, setSuccessOpen] = React.useState(false)
	const [successData, setSuccessData] = React.useState<any>(null)

	const autoCloseRef = React.useRef<number | null>(null)

	const {
		handleChange,
		onSubmit,
		date,
		setDate,
		insurance,
		setInsurance,
		time,
		setTime,
		errors,
		setFieldError,
		submitting,
		activeInsurances,
		availableSlots,
		noSlotsForSelectedDay,
	} = useScheduleForm()
	const handleFormSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
		const result = await onSubmit(ev)

		if (result?.success && result.status === 201) {
			const data = result?.data ?? null
			setSuccessData(data)
			setSuccessOpen(true)
			// onSuccess?.(data);
			setDate(undefined)
			setInsurance('')
			setTime('')

			if (autoCloseRef.current) {
				window.clearTimeout(autoCloseRef.current)
			}

			autoCloseRef.current = window.setTimeout(() => {
				setSuccessOpen(false)
				autoCloseRef.current = null
			}, 60000)
		} else {
			console.error('Error al enviar la reserva:', result?.error ?? result?.status)
		}
	}

	React.useEffect(() => {
		return () => {
			if (autoCloseRef.current) {
				window.clearTimeout(autoCloseRef.current)
				autoCloseRef.current = null
			}
		}
	}, [])

	return (
		<>
			<form onSubmit={handleFormSubmit} className="grid gap-6 md:[grid-template-columns:1.5fr_1fr] items-stretch content-start h-max">
				<Card className="h-full rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm">
					<PersonalFields errors={errors} handleChange={handleChange} setFieldError={setFieldError} />
					<div className="mt-4">
						<InsuranceSelect
							value={insurance}
							onChange={v => {
								setInsurance(v)
								setFieldError('insurance')
							}}
							error={errors.insurance}
							items={activeInsurances}
						/>
					</div>
            <FormActions onCancel={onCancel} showCancel={showCancel} submitting={submitting} disabled={noSlotsForSelectedDay} />
				</Card>

				<Card className="h-full rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm">
					<div className="flex h-full flex-col">
						<BookingCalendar
							mode="single"
							selected={date}
							onSelect={d => {
								setDate(d)
								setFieldError('date')
							}}
							showOutsideDays
							fixedWeeks
							error={errors.date}
						/>
						<TimeSelect
							value={time}
							onChange={v => {
								setTime(v)
								setFieldError('time')
							}}
							options={availableSlots}
							disabled={noSlotsForSelectedDay}
							error={errors.time}
						/>
					</div>
				</Card>

			</form>

			<SuccessModal
				open={successOpen}
				onClose={() => {
					setSuccessOpen(false)
					onCancel?.()
				}}
				message="Se envió correctamente la solicitud, nos comunicaremos en breves con usted vía mail."
			/>
		</>
	)
}

