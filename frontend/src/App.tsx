import "./index.css";
import FormExpense from "./components/ExpenseForm";

function App() {
  return (
    <div className="max-w-xl mx-auto p-6 space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold">家計簿アプリ</h1>
      </header>
      <FormExpense />
    </div>
  );
}

export default App;
