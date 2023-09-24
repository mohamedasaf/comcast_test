import { ChangeEvent } from "react";
import { Input } from "reactstrap";

interface IProps {
    onChange(value: string): void,
    placeholder: string
}
const InputBox = (props: IProps) => {
    const { onChange, placeholder } = props;
    return (
        <Input placeholder={placeholder} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} />
    )
}

export default InputBox;