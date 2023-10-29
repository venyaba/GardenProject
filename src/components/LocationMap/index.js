import mapImg from '../../assets/contacts/map.png'
import styles from './LocationMap.module.css'

const LocationMap = ()=>{
    return<div className={styles.location}>
        <img src={mapImg}/>
    </div>
}

export default LocationMap;