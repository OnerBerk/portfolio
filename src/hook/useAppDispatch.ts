// hooks/useAppDispatch.ts
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store/store";

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
