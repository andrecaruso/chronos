import styles from './styles.module.css';


type DefaultButtonProps = {
    icon : React.ReactNode;
    color?: 'green' | 'red';
} & React.ComponentProps<'button'>; //pega os tipos possíveis de button


export function DefaultButton({icon, color = 'green' , ...props }: DefaultButtonProps){
    //...rest permite que todos os outros atributos do button sejam passados
    return (
            <>
            <button className={`${styles.button} ${styles[color]}`}  {...props}>
                {icon}
            </button>
            </>
          );
};