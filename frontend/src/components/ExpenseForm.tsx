import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { FormField } from "./FormField";
import { SubmitButton } from "./SubmitButton";
import { postExpense } from "../api/expense";
import type { CreateExpenseRequest } from "../types";
import { SelectField } from "./SelectField";
import { getUsers } from "../api/user";
import { useEffect, useState } from "react";

export default function FormExpense() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateExpenseRequest>();

  const [userOptions, setUserOptions] = useState<
    {
      value: number;
      label: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      const options = users.map((user) => ({
        value: user.id,
        label: user.username,
      }));
      setUserOptions(options);
    };
    fetchUsers();
  }, []);

  const onSubmit: SubmitHandler<CreateExpenseRequest> = (formInput) => {
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
        type="text"
        register={register}
        isRequired={true}
        error={errors.title?.message}
      />
      <FormField
        label="詳細"
        name="detail"
        type="text"
        register={register}
        isRequired={false}
        error={errors.detail?.message}
      />
      <FormField
        label="合計金額"
        name="amount"
        type="number"
        register={register}
        isRequired={true}
        min={0}
        error={errors.amount?.message}
      />
      <FormField
        label="支払日"
        name="paymentDate"
        type="date"
        register={register}
        isRequired={true}
        error={errors.paymentDate?.message}
      />
      <FormField
        label="自分から見た負担割合（0~1）"
        name="ratio"
        type="number"
        register={register}
        isRequired={true}
        min={0}
        max={1}
        error={errors.ratio?.message}
      />
      <SelectField
        label="支払い者"
        name="payerId"
        options={userOptions}
        register={register}
        isRequired={true}
        error={errors.payerId?.message}
      />

      <SubmitButton />
    </form>
  );
}
