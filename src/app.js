import React, {Fragment} from 'react'
// import './app.css'
import axios from 'axios'

class App extends React.Component {
    state  = {
        advice: ''
    };

    componentDidMount(){
       this.fetchAdvice()
    }

    fetchAdvice = () =>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=> {
            const {advice} = response.data.slip
            this.setState({advice})
            console.log(advice)
            console.log(response.status)
        }).catch((error) => {
            console.error(error);
            
        })
    }

    render (){

        const {advice} = this.state
        return(
           
            <Fragment>
                <h1>BlackLivesMatter</h1>
                <h3>{advice}</h3>
            </Fragment>
        )
    }
}

export default App;