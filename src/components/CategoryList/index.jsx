import CategoryItem from "../CategoryItem"
import styles from './CategoryList.module.css'

const CategoryList = ({categories})=>{
    return <div className={styles.category_list}>
{categories.map(category=>(<CategoryItem {...category}/>))}
    </div>
}

export default CategoryList;