import * as React from "react";
import { Card } from "@components/ui/card";

import { useScheduleForm } from "@/Hooks/useScheduleForm";
import { PersonalFields } from "./PersonalFields";
import { BookingCalendar } from "./BookingCalendar";
import { InsuranceSelect } from "./InsuranceSelect";
import { TimeSelect } from "./TimeSelect";
import { FormActions } from "./FormActions";

type Props = { onCancel?: () => void; onSuccess?: () => void; showCancel?: boolean };

export const ScheduleForm: React.FC<Props> = ({ onCancel, onSuccess, showCancel }) => {
  const {
    handleChange, onSubmit,
    date, setDate,
    insurance, setInsurance,
    time, setTime,
    errors, setFieldError,
    submitting,
    activeInsurances,
    availableSlots,
    noSlotsForSelectedDay,
  } = useScheduleForm(onSuccess);

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-6 md:[grid-template-columns:1.5fr_1fr] items-stretch content-start"
    >
      <Card className="h-full rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm">
        <PersonalFields
          errors={errors}
          handleChange={handleChange}
          setFieldError={setFieldError}
        />
        <div className="mt-4">
          <InsuranceSelect
            value={insurance}
            onChange={(v) => { console.log(v),setInsurance(v); setFieldError("insurance"); }}
            error={errors.insurance}
            items={activeInsurances}
          />
        </div>
      </Card>

      <Card className="h-full rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm">
        <div className="flex h-full flex-col">
          <BookingCalendar
            mode="single"
            selected={date}
            onSelect={(d) => { setDate(d); setFieldError("date"); }}
            showOutsideDays
            fixedWeeks
            error={errors.date}
          />
          <TimeSelect
            value={time}
            onChange={(v) => { setTime(v); setFieldError("time"); }}
            options={availableSlots}
            disabled={noSlotsForSelectedDay}
            error={errors.time}
          />
        </div>
      </Card>

      <FormActions
        onCancel={onCancel}
        showCancel={showCancel}
        submitting={submitting}
        disabled={noSlotsForSelectedDay}
      />
    </form>
  );
};
