import {FunctionComponent, useState} from "react"

interface InterfaceInputTime {
    placeholder: string;
    timestamp: 'min' | 'sec';
    onMinChange?: (value: number) => void;
    onSecChange?: (value: number) => void;
}

const InputTime:FunctionComponent<InterfaceInputTime> = ({placeholder, timestamp, onMinChange, onSecChange}) => {
    const [min, setMin] = useState<number>(0);
    const [sec, setSec] = useState<number>(0);

    return(
        <input max={60} min={0} placeholder={placeholder} data-timestamp={timestamp} type="number"
            className="p-1 rounded-md outline-none text-center"
            onChange={(event) => {
                if (timestamp == 'min') {
                    setMin(Number(event.target.value));
                    if (onMinChange) {
                        onMinChange(min);
                    }
                }
                if (timestamp == 'sec') {
                    setSec(Number(event.target.value));
                    if (onSecChange) {
                        onSecChange(sec);
                    }
                }
            }}
            onKeyDown={(event) => {
                event.preventDefault();
            }}
        />
    );
}

export default InputTime;