import CategoryItem from "../CategoryItem"
import styles from './CategoryList.module.css'

const CategoryList = ({categories})=>{
    return <div className={styles.category_list}>
{categories.map(category=>(<CategoryItem {...category} key={category.id}/>))}
    </div>
}

export default CategoryList;