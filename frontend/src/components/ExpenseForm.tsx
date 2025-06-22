import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { FormField } from "./FormField";
import { SubmitButton } from "./SubmitButton";
import { postExpense } from "../api/expense";

export type ExpenseFormData = {
  title: string;
  detail: string;
  amount: number;
  paymentDate: string;
  ratio: number;
  payerId: string;
};

export default function FormExpense() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>();

  const onSubmit: SubmitHandler<ExpenseFormData> = (formInput) => {
    postExpense(formInput);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md mx-auto bg-white p-6 rounded-md shadow-md space-y-4"
    >
      <FormField
        label="タイトル"
        name="title"
        register={register}
        isRequired={true}
        type="text"
        error={errors.title?.message}
      />
      <FormField
        label="詳細"
        name="detail"
        register={register}
        isRequired={false}
        type="text"
        error={errors.detail?.message}
      />
      <FormField
        label="合計金額"
        name="amount"
        register={register}
        isRequired={true}
        type="number"
        error={errors.amount?.message}
      />
      <FormField
        label="支払日"
        name="paymentDate"
        register={register}
        isRequired={true}
        type="date"
        error={errors.paymentDate?.message}
      />
      <FormField
        label="比率"
        name="ratio"
        register={register}
        isRequired={true}
        type="number"
        error={errors.ratio?.message}
      />
      <FormField
        label="支払い者"
        name="payerId"
        register={register}
        isRequired={true}
        type="text"
        error={errors.payerId?.message}
      />

      <SubmitButton />
    </form>
  );
}
