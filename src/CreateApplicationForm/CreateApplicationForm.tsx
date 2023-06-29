import * as React from "react";
import {
  FormProvider,
  RegisterOptions,
  useForm,
  useFormContext,
  UseFormRegister,
  UseFormReturn,
} from "react-hook-form";
import { Button } from "../ui/Button/Button";
import styles from "./CreateApplicationForm.module.css";

const ERROR_REQUIRED = "Required";
const ERROR_MIN_AMOUNT = "Min. Amount >= 1000";
const ERROR_MAX_AMOUNT = "Max. Amount <= 150000";

type TFormValues = {
  first_name: string;
  last_name: string;
  loan_amount: number;
  loan_type: string;
};

export const CreateApplicationForm = () => {
  const methods = useForm<TFormValues>();
  const onSubmit = (values: TFormValues) => console.log("SUBMIT", values);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
        <Input
          id="first_name"
          label="First Name"
          validation={{
            required: { value: true, message: ERROR_REQUIRED },
          }}
        />
        <Input
          id="last_name"
          label="Last Name"
          validation={{
            required: { value: true, message: ERROR_REQUIRED },
          }}
        />
        <Input
          id="loan_amount"
          label="Amount"
          type="number"
          validation={{
            required: { value: true, message: ERROR_REQUIRED },
            min: { value: 1000, message: ERROR_MIN_AMOUNT },
            max: { value: 150000, message: ERROR_MAX_AMOUNT },
          }}
        />
        <SelectInput
          id="loan_type"
          label="Loan Type"
          options={[
            ["Flexi-Loan", "Flexi-Loan"],
            ["Business Loan", "Business Loan"],
            ["Cash Advance", "Cash Advance"],
            ["RLS", "RLS"],
            ["CBILS", "CBILS"],
          ]}
        />
        <Button className={styles.submitButton}>Create new application</Button>
      </form>
    </FormProvider>
  );
};

const Input = ({ id, label, type = "text", validation = {} }) => {
  const { showError, error, register } = useFormField(id);

  return (
    <span className={styles.inputContainer}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        type={type}
        {...register(validation)}
      />
      {showError ? <span className={styles.error}>{error}</span> : null}
    </span>
  );
};

const SelectInput = ({ id, label, options }) => {
  const { showError, error, register } = useFormField(id);

  return (
    <span className={styles.inputContainer}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select
        id={id}
        className={styles.input}
        {...register({
          required: { value: true, message: ERROR_REQUIRED },
        })}
        defaultValue=""
      >
        <option value="" disabled>
          Please select a type
        </option>
        {options.map(([value, label]) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
      {showError ? <span className={styles.error}>{error}</span> : null}
    </span>
  );
};

const useFormField = (id: string) => {
  const { formState, register } = useFormContext();

  const hasSubmitted = formState.submitCount > 0;
  const error = castErrorToString(formState.errors[id]);
  const showError = Boolean(
    (hasSubmitted || formState.touchedFields[id]) && error
  );

  return {
    showError,
    error,
    register: (validation: RegisterOptions) => register(id, validation),
  };
};

type THookFormError = UseFormReturn["formState"]["errors"][string];
export function castErrorToString(error: THookFormError): string | undefined {
  if (typeof error === "string") {
    return error;
  }

  if (typeof error?.message === "string") {
    return error.message;
  }

  return;
}
