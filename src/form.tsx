import {useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
type FormProps = {
    onClose: () => void;
  };

function Form ({ onClose }: FormProps) {
    const {register, handleSubmit} = useForm({
        mode: 'onChange'
    });


    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="enter your name" />

            <button type="submit">Send</button>
        </form>
        </>

    )

}





export default Form