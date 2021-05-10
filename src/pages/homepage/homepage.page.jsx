import React  from 'react'
import './homepage.styles.scss';
import ArticleItem from '../../components/articleItem/articleItem.component';
import {data} from '../../data/index';
function HomePage() {
    console.log(data);
    
    return (
        <div className="homepage container">

        <div className="homepage__articles">
            {
                data.map(item => <ArticleItem key={item.id} item={item}/>)
            }            
        </div>


                 
        </div>
    )
}

export default HomePage
