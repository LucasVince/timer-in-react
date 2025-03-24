import {FunctionComponent} from "react"

interface InterfaceInputTime {
    placeholder: string;
}

const InputTime:FunctionComponent<InterfaceInputTime> = ({placeholder}) => {
    return(
        <input max={60} min={0} placeholder={placeholder} type="number"
        className="p-1 rounded-md outline-none text-center"
        />
    );
}

export default InputTime;