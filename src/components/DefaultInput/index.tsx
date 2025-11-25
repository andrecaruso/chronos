import styles from './styles.module.css';


type DefaultInputProps = {
    id : string;
    labelText?: string; //propriedade opcional
} & React.ComponentProps<'input'>; //pega os tipos possíveis de input


export function DefaultInput({ id, type, labelText, ...rest }: DefaultInputProps){
    //...rest permite que todos os outros atributos do input sejam passados
    return (
            <>
            { labelText ? <label htmlFor="input">{ labelText }</label> : ''}
            <input className={styles.input} type={type} id={id} {...rest} /> 
            </>
          );
};