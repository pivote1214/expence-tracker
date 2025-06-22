export type CreateExpenseRequest = {
  title: string;
  detail: string;
  amount: number;
  paymentDate: string;
  ratio: number;
  payerId: string;
};
