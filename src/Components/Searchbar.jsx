import { Component } from "react";

class Searchbar extends Component {
    state = {
        term: 'Search for video...'
    };

    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term)
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="video-search">Video Search</label>
                        <input onChange={this.handleChange} name='video-search' type='text' value={this.state.term}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Searchbar;