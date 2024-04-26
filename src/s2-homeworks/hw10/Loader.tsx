import s from './Loader.module.css'
import preloader from './../../assets/images/loading.svg'

export const Loader = () => <img src={preloader} className={s.loader}/>
