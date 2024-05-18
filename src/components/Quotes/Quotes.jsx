import React,{useState} from 'react';
import axios from 'axios';
import dice from "../../Assets/images/icon-dice.svg";
import "./Quotes.css";
import divider from "../../Assets/images/pattern-divider-desktop.svg";
const Quotes = () => {

    const [quote,setQuote] = useState("Ready To get some advice?");
    const [count,setCount] = useState(0);

    const findQuotes = async()=>{

        var button = document.getElementById("myButton");
        button.disabled = true;
        const options = {
            method: 'GET',
            url: 'https://quotes15.p.rapidapi.com/quotes/random/',
            params: {
                language_code: 'en'
            },
            headers: {
                'X-RapidAPI-Key': '1d0a8ce116msh474343d8b8aa473p111560jsn3a4e8e9daa4d',
                'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
            }
            };
    
            try {
                const response = await axios.request(options);
                button.disabled = false;
                if(response.data.content.length > 100){
                    findQuotes();
                }
                else{
                    setQuote(response.data.content);
                    setCount(count+1);
                }
                
            } catch (error) {
                console.error(error);
                button.disabled = false;
            }
    }

  return (
    
    <div className='box'>
        <div className='Heading'>
            Advice #{count}
        </div>
      <p className='quote'>"{quote}"</p>
      <div className='divider'><img className='divider-image' src={divider} alt='divider'></img></div>
      <button id='myButton' className='Button' onClick={findQuotes}><img className='dice' src={dice} alt='button'></img> </button>
      
    </div>
  )
}

export default Quotes
