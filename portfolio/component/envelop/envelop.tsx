import styles from "./envelop.module.scss";
import {Dispatch, SetStateAction} from "react";

type EnvelopProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
}
const Envelop = (props: EnvelopProps) =>
  <div onClick={() => props.setOpen(true)} className={styles.envelop}>
    Clique la
    !</div>;
export default Envelop;