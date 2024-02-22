import { CurrencyDollarIcon } from "@heroicons/react/24/solid"
import { Form, useFetcher } from "react-router-dom"
import {useRef,useEffect} from "react"
const AddBugetForm = () =>{
    const fetcher = useFetcher()
    const issubmitting = fetcher.state === "submitting"

    const formRef = useRef()
    const focusRef = useRef()

    useEffect(() => {
        if(!issubmitting){
            formRef.current.reset()
            focusRef.current.focus()
        }
    },[issubmitting])



    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Create budget
            </h2>
            <fetcher.Form method="post" ref={formRef} className="grid-sm">
                <div className="grid-xs">
                    <label htmlFor="newBudget"> Budget Name</label>
                    <input type="text" name="newBudget" id="newBudget" ref={focusRef} placeholder="e.g. Groceries" required />

                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">Amount</label>
                    <input type="number" step="0.01" name="newBudgetAmount" id="newBudgetAmount" placeholder="e.g. 200$" required inputMode="decimal" />
                </div>
                <input type="hidden" name="_action" value="createBudget" />
                <button type="submit" disabled={issubmitting} className="btn btn-dark">
                    {
                        issubmitting? (
                            <span>Creating Budget...</span>
                        ) : (
                            <>
                            <span>Create Budget</span><CurrencyDollarIcon width={20} />
                            </>
                        )
                    }
                </button>
            </fetcher.Form>
        </div>
    )
}

export default AddBugetForm