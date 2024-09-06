import { useMemo } from "react"

const useSortedCustomers = (customers, sort) => {
    return useMemo(() => {
        if (sort === "new") {
            console.log("новые");

            return ([...customers].sort((a, b) => a.id - b.id))
        } else if (sort === "old") {
            console.log("старый");

            return ([...customers].sort((a, b) => b.id - a.id))
        }
        console.log("никакой");
        return customers
    }, [sort, customers])
}

export const useCustomer = (customers, sort) => {
    const sortedCustomers = useSortedCustomers(customers, sort)
    console.log(sortedCustomers);
    console.log("Сортировка завершена");

    return sortedCustomers
    // return useMemo(() => {
    //     return sortedCustomers
    // })
}