import React, { Component } from 'react';
import './style.css';

class Guess extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			randomNumber: Math.floor(Math.random() * 10 ) + 1,
			userGuess: "",
			outcome: "",
			history: [],
			count: 0
		}
	}

	handleInput(event){
		this.setState({
			input: event.target.value
		})
	}

	handleChange(e){
		this.setState({ 
			userGuess: e.target.value 
		})

	}

	submitGuess(e){
		e.preventDefault();
		let { randomNumber, userGuess } = this.state;
		userGuess = parseInt(userGuess);
		let newOutcome = "";

		if(userGuess > randomNumber){
			newOutcome = "Too High!";
		} else if(userGuess < randomNumber){
			newOutcome = "Too Low!";
		} else if (userGuess === randomNumber){
			newOutcome = "You got it!"	
		} else {
			newOutcome = "No guess given";
		}
		const newHistory = `You guessed: ${userGuess}. Outcome: ${newOutcome}`;

		this.setState({
			outcome: newOutcome,
			history: [newHistory, ...this.state.history]
		});

	}

	resetGuess(e){
		this.setState({
			randomNumber: Math.floor(Math.random() * 10 ) + 1,
			userGuess: "",
			history: [],
			outcome: "",
		})
		this.matchCounter();
		
	}

	matchCounter(e){
		this.setState({
			count: this.state.count + 1
		})
		console.log('yasss');
		
	}



	render(){
		const { outcome, history, count } = this.state;

		const historyOutput = history.map((item, index) => {
			return <h5 key={index}>{item}</h5>

		})
		
		return(
			<div>
				<h1></h1>
					<div className="row">
					<h2 className ='offset-sm-1'>Game's Played: {count}</h2>
						<div className="offset-sm-2 col-xs-6">
							<form onSubmit={(e) => this.submitGuess(e)}>
								<div className="input-group">
									<input onChange={(e) => this.handleChange(e)} type="number" className="form-control" value={this.state.userGuess}/>
										<span className="input-group-btn">
											<button className="btn btn-danger">Guess a Number</button>
											<button onClick={(e) => this.resetGuess(e)} className="btn btn-danger">Reset</button>
											</span>
										</div>
									</form>
								<h3 className={(outcome === 'Too Low!') ? 'text-danger' : (outcome === 'Too High!') ? 'text-success' : 'text-primary'}>{outcome}</h3>
							</div>
						<div className="col-sm-8">
						{historyOutput}
					</div>
				</div>
			</div>
		)
	}
}

export default Guess; 