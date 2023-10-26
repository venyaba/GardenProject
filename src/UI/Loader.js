import { ThreeDots } from  'react-loader-spinner';


export const Loader = ({loaderClass})=>{
    return <ThreeDots 
    height="80" 
    width="80" 
    radius="9"
    color="#4fa94d" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass={loaderClass}
    visible={true}
     />
}

