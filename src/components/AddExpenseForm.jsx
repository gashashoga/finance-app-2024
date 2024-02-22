import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { useEffect, useRef } from "react"
import { useFetcher } from "react-router-dom"

const AddExpenseForm = ({budget}) => {
    const fetcher = useFetcher()
    const formRef = useRef()
    const focusRef = useRef()
    const issubmitting = fetcher.state === "submitting"

    useEffect(() => {
        if(!issubmitting){
            formRef.current.reset()
            focusRef.current.focus()
        }
    },[issubmitting])

    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Add New
                <span>
                    {budget?.length === 1 && `${budget.map((budg) => (budg.name))}`}
                </span>
                Expense
            </h2>
            <fetcher.Form method="post" className="grid-sm" ref={formRef}>
                <div className="expense-inputs">
                    <div className="grid-xs">
                        <label htmlFor="newExpense">Expoense Name</label>
                        <input type="text" name="newExpense" id="newExpense" ref={focusRef} required />
                    </div>
                    <div className="grid-xs">
                        <label htmlFor="newExpenseAmount">Amount</label>
                        <input type="number" step="0.01" inputMode="decimal" name="newExpenseAmount" id="newExpenseAmount" required />
                    </div>
                </div>
                <div className="grid-xs" hidden={budget.length === 1}>
                    <label htmlFor="newExpenseBudget">Budget Category</label>
                    <select name="newExpenseBudget" id="newExpenseBudget" required>
                        {
                            budget.sort((a,b) => a.createdAt - b.createdAt).map((budget) =>{
                                return(
                                    <option key={budget.id} value={budget.id}>{budget.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <input type="hidden" name="_action" value="createExpense" />
                <button type="submit" disabled={issubmitting} className="btn btn-dark">
                    {
                        issubmitting? (
                            <span>Adding Expense...</span>
                        ) : (
                            <>
                            <span>Add Expense</span><PlusCircleIcon width={20} />
                            </>
                        )
                    }
                </button>
            </fetcher.Form>   
        </div>
    )
}

export default AddExpenseForm