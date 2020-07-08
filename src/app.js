import React, {Fragment} from 'react'
import './app.css'
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
           
            <Fragment >
                <div className="app">
                    <div className="card">
                        <h1 className="heading">BlackLivesMatter</h1>
                        <h3 className="heading">{advice}</h3>
                        <button className="button" onClick={this.fetchAdvice}>
                            <span>Give Me an advice</span>
                        </button>
                    </div>

                </div>
            </Fragment>
        )
    }
}

export default App;