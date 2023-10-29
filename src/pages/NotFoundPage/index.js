import notFoundImg from '../../assets/notFaundPage/notFound.png'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () =>{
    return <div className={styles.notFound_wrapper} >
        <img src={notFoundImg}/>
    </div>
}

export default NotFoundPage;