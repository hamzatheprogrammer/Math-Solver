  import React from 'react'
  import {useState} from 'react'
  import axios from 'axios'
  import './App.css'
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

  function App() {
    const [data, setData] = useState(null)
    const [equation, setEquation] = useState('')

    async function mathsolver(){
      try{
        const response = await axios.get(`https://api.maher-zubair.tech/ai/mathssolve?q=${equation}`)
        setData(response.data)
      }
      catch(err){
        console.log(err)
      }
    }

    function inpval(event){
      setEquation(event.target.value)
    }


    return (
      <div className='main-page'>
        <h1 className='mb-4'>Math Solver</h1>
        <label className='mb-3' htmlFor='equation'>Enter your math equation</label>
        <input className='mb-3 input-group-text' type="text" id='equation' name='equation' onChange={inpval}/>
        <button className='btn btn-danger mb-4  ' onClick={mathsolver}>Solve</button>


        <div className='result'>{data ? data.result : "loading ......"}</div>
      </div>
    )
  }

  export default App