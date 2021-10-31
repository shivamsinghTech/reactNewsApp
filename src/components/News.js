import React,{useState,useEffect} from 'react';
import axios from 'axios';
import SearchNews  from './SearchNews';
import "../App.css"
// apikey='8878701a674e4297a94880d5b3ebc932'

//https://newsapi.org/v2/top-headlines?country=Countryparams&category=CategoryParams&apikey=8878701a674e4297a94880d5b3ebc932



// api=76d5691a8a324552935743cd2d5300bf
const News=()=>{

    const [articles, setData]= useState([]);
    const[change,setChange]=useState();
    const[visib,setVisible]=useState(true);
    const [countryName,setCountry]=useState('id');
    const[category,setCategory]=useState('science')

   


    useEffect(()=>{

     const axiosData=async()=>{

           const response=await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryName}&category=${category}&apikey=76d5691a8a324552935743cd2d5300bf`);
           setData(response.data.articles)
           console.log(response)
            
               
     };
        

        axiosData();
    },[countryName])

    

    const hit=(e)=>{
        console.log(e.target.value);
        setChange(e.target.value);
        setVisible(false);
    }


   

  // handle onChange event of the dropdown
 
    
    return(<>
    
   
    <div className="row">
    <div className="column"> 
    <h4>Select country</h4>   
     <select value={countryName} onChange={(event)=>{setCountry(event.target.value)}}>
  
    
    <option value="ar">ar</option>
    <option value="at">at</option>
    <option value="be">be</option>
    <option value="bg">bg</option>
    <option value="de">de</option>
    <option value="ca">ca</option>
    <option value="ch">ch</option>
    <option value="bg">bg</option>
    <option value="hk">hu</option>
    <option value="id">id</option>
    <option value="in">in</option>
    <option value="it">it</option>
    <option value="no">no</option>
    <option value="rs">rs</option>
    <option value="sk">sk</option>
    <option value="za">za</option>

    </select> 
     

    
     </div>
    <div className="column"> 
    <h4>Select category</h4>   
    <select value={category} onChange={(event)=>{setCategory(event.target.value)}}>
  
    
    <option value="business">business</option>
    <option value="entertainment">entertainment</option>
    <option value="general">general</option>
    <option value="health">health</option>
    <option value="science">science</option>
    <option value="sports">sports</option>
    <option value="technology">technology</option>
    

    </select> 
    
    </div>
    <input type="text" placeholder="Search news" onChange={hit}/> 
   
  
   </div>

   {
       visib==true?
       <div>
       <div><h2>Headline News</h2></div>
       
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

</div>
</div>
 </div>
 </div>


 :

 <div>
 <h2>search News</h2>
<SearchNews change={change}/>
</div>
   }
    </>)
}



export default News;