import { useNavigate } from 'react-router';
import styles from './CategoryItem.module.css'

const CategoryItem = ({image, title, id})=>{
const navigate = useNavigate()


return <div className={styles.category} onClick={()=>navigate(`/category/${id}`)} key={id}>
<img src={`${process.env.REACT_APP_ENDPOINT_URL}/${image}`}/>
<span>{title}</span>
</div>
}

export default CategoryItem;