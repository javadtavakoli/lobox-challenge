import { useEffect, useState } from "react";
import { ISelectOption } from "../components/select/types";

const useSelectOptions = () => {
    const [options, setSelectOptions] = useState<ISelectOption[]>([]);
    useEffect(() => {
        setSelectOptions([
            {
                key: crypto.randomUUID(),
                value: "Option 1",
            },
            {
                key: crypto.randomUUID(),
                value: "Option 2",
            },
            {
                key: crypto.randomUUID(),
                value: "Option 3",
            },
            {
                key: crypto.randomUUID(),
                value: "Option 4",
            },
        ])
    }, [])
    const onOptionAdded = (optionValue: string): ISelectOption | undefined => {
        if (!options.some(i => i.value === optionValue)) {
            const newOption = { value: optionValue, key: crypto.randomUUID() }
            setSelectOptions(_options => _options.concat(newOption))
            return newOption
        }
    }
    return { onOptionAdded, options }
}
export default useSelectOptions;