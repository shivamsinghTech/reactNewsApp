import React,{useState,useEffect} from 'react';
import axios from 'axios';

const SearchNews=(props)=>{

    const [articles, setData]= useState([]);

    const[set,setChange]=useState()




    useEffect(()=>{

        const axiosData=async()=>{
   
              const response=await axios.get(`https://newsapi.org/v2/everything?q=${props.change}&apiKey=76d5691a8a324552935743cd2d5300bf`);
              setData(response.data.articles)
              console.log(response)
               // let user=await response.data;
               // setValue(response.data.va);
               //       console.log(response.data);
                   //   console.log(data);
                     
                  
        };
           
   
           axiosData();
       },[props])


    //    const hit=(e)=>{
    //     console.log(e.target.value);
    //     setChange(e.target.value);
    // }


    return(
     
        <div className="inp">

{/* <input type="text" placeholder="Search news" onChange={hit}/>  */}
        <div className="html">
        <div className="body">


       
        <div className="grid">

{

articles.map((ele)=>{
    return(
        <div className="grid-item">
        <div className="card">
          <img className="card-img" src={ele.urlToImage} alt="Rome" />
          <div className="card-content">
            <h1 className="card-header">{ele.title}</h1>
            <p className="card-text">
             {ele.description}
            </p>
            <p className="card-btn">{ele.author}<span>→</span></p>
            <p className="card-btn">{ele.publishedAt}<span>→</span></p>
          </div>
        </div>
      </div>
      )
})
}

</div></div></div>
</div>)
}
export default SearchNews;