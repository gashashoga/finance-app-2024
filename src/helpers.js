export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export const deleteItem = (key) => {
    return localStorage.removeItem(key);
}

const generateRandomColor = () =>
{
    const existingBudgetLength = fetchData('budget')?.length ?? 0
    return `${existingBudgetLength * 34} 65% 50%`
}

export const createBudget = ({
    name, amount
}) =>{
    const newItem = {
        id: crypto.randomUUID().toString(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        color: generateRandomColor()
    }
    const existingBudgets = fetchData("budget") ?? []
    return localStorage.setItem("budget",JSON.stringify([...existingBudgets,newItem]))
}

export const createExpense = ({
    name, amount,budgetId
}) =>{
    const newItem = {
        id: crypto.randomUUID().toString(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        budgetId: budgetId
    }
    const existingExpenses = fetchData("expenses") ?? []
    return localStorage.setItem("expenses",JSON.stringify([...existingExpenses,newItem]))
}

export const formatCurrency = (amt) =>{
    return amt.toLocaleString(undefined, {
        style: 'currency',
        currency: 'USD'
    })
}

export const calculateSPentByBudget = (budgetId) =>{
    const expenses = fetchData("expenses") ?? []
    const budgetSpent = expenses.reduce((acc,expense) => {
        if(expense.budgetId === budgetId){
            return acc += expense.amount
        }
        return acc
    }, 0)
    return budgetSpent

}

export const formatPercentage = (amt) =>{
    return amt.toLocaleString(undefined, {
        style: 'percent',
        minimumFractionDigits: 0,
    })
}

