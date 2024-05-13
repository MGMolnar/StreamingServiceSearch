export default function DropdownMenu(options: any, title: string) {
    //{options.options.map((optionValue: any) =>  <option key={optionValue.value} value={optionValue.value}>{optionValue.value}</option>)}
    {options.options.map((optionValue: any) =>  console.log(optionValue.value))}
    console.log(options);
    return (
        <div>
            <h3>{title}</h3>
            <select>
            </select>
        </div>
    )
}