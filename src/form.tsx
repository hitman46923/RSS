import {useForm } from "react-hook-form"
import { z } from "zod";

import { schema } from './zod'
type FormProps = {
    onClose: () => void;
  };

function Form ({ onClose }: FormProps) {
    const {register, handleSubmit} = useForm<FormData>({
        mode: 'onChange'
       
    });

    const onSubmit = (data: string)  => {
        console.log(data)
    }

    


    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="enter your name" />
            <input type="number" placeholder="enter your age" />
            <input type="email" placeholder="enter your email" />
            <input type="password" placeholder="enter your password" />
            <div>
        <label>
          <input type="radio" value="male" />
          Male
        </label>
        <label>
          <input type="radio" value="female"  />
          Female
        </label>
      </div>
            <button type="submit">Send</button>
        </form>
        </>

    )

}





export default Form