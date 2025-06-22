import type { ExpenseFormData } from "../components/ExpenseForm";

export async function postExpense(formInput: ExpenseFormData): Promise<void> {
  // jsonに変換
  const jsonFormInput = JSON.stringify(formInput);
  alert(jsonFormInput);
  // APIにPOSTリクエストを送信
  try {
    const apiUrl = "http://localhost:8000/api/expenses";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonFormInput,
    });

    const result = await response.json();
    console.log("Expense posted:", result);
  } catch (error) {
    console.error("Error posting expense:", error);
  }
}
