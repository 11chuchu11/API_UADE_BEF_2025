import * as React from 'react'
import { Card } from '@components/ui/card'
import { cn } from '@/lib/utils'
import { useData } from '@/Hooks/useData'
import { InsuranceRow } from './InsuranceRow'
import { AddInsuranceBar } from './AddInsuranceBar'
import type { Insurance } from './types'
import { useUpdateActiveInsurance } from '@/Hooks/requests/useUpdateActiveIsurance'
import { useDeleteInsurance } from '@/Hooks/requests/useDeleteInsurance'
import { useAddInsurance } from '@/Hooks/requests/useAddInsurance'
import { useUpdateInsurance } from '@/Hooks/requests/useUpdateInsurance'
import { SuccessModal } from '@/components/Home/forms/ScheduleForm/SuccessModal'

type Props = { className?: string }

export const InsurancesSection: React.FC<Props> = ({ className }) => {
	const { data, updateData } = useData()
	const items: Insurance[] = (data?.insurances as Insurance[]) ?? []
	const { activateInsurance, deactivateInsurance } = useUpdateActiveInsurance()
	const { deleteInsurance } = useDeleteInsurance()
	const { addInsurance } = useAddInsurance()
	const { udpateInsurance } = useUpdateInsurance()
	const [errorOnDelete, setErrorOnDelete] = React.useState(false)

	const upsert = (next: Insurance[]) => updateData({ insurances: next })

	const handleToggle = async (it: Insurance, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
		const onToggleSuccess = () => {
			upsert(items.map(x => (x.id === it.id ? { ...x, active: !x.active } : x)))
		}

		setLoading(true)
		if (!it.active) await activateInsurance(Number(it.id), onToggleSuccess)
		else await deactivateInsurance(Number(it.id), onToggleSuccess)
		setLoading(false)
	}

	const handleDelete = async (it: Insurance, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
		setLoading(true)
		await deleteInsurance(
			Number(it.id),
			() => {
				upsert(items.filter(x => x.id !== it.id))
			},
			() => {
				setErrorOnDelete(true)
			}
		)
		setLoading(false)
	}

	const handleSave = async (it: Insurance, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
		setLoading(true)
		await udpateInsurance(Number(it.id), it, (insuranceData: any) => {
			upsert(items.map(x => (x.id === it.id ? insuranceData : x)))
		})
		setLoading(false)
	}

	const handleAdd = async (it: Insurance, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
		setLoading(true)
		await addInsurance(it)
		setLoading(false)
	}

	return (
		<section className={cn('mx-auto max-w-6xl px-4 sm:px-6 lg:px-8', className)}>
			<div className="mb-6 mt-8 sm:mt-10">
				<h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-foreground">
					Obras Sociales disponibles
				</h2>
				<p className="mt-2 text-xs sm:text-sm text-primary font-bold">Agregá, editá o desactivá las obras sociales con las que trabajás</p>
			</div>

			<Card className="rounded-2xl bg-background ring-1 ring-violet-200/60 shadow-sm">
				<div className="px-4 sm:px-5 py-4">
					<p className="text-sm sm:text-md font-semibold text-primary/100">Configuración de las Obras Sociales</p>
				</div>

				<div className="px-4 sm:px-5 pb-2 divide-y divide-secondary overflow-y-scroll max-h-[400px]">
					{items.map(it => (
						<InsuranceRow key={it.id} item={it} onToggle={handleToggle} onDelete={handleDelete} onSave={handleSave} />
					))}
				</div>

				<AddInsuranceBar onAdd={handleAdd} />
			</Card>
			<SuccessModal
				open={errorOnDelete}
				onClose={() => {
					setErrorOnDelete(false)
				}}
				title="Ocurrio un error"
				message="Chequeé no tener citas pendientes con esta obra social"
			/>
		</section>
	)
}

