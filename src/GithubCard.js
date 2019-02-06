import React from 'react'
import './App.css'
import Title from './Title'
import SearchInput from './SearchInput'
import './Title.css'

export default class GithubCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: '',
      user: {},
      userLoaded: false,
    }

    this.search = this.search.bind(this)
    this.inputChange = this.inputChange.bind(this)
    // this.dataHandler = this.dataHandler.bind(this)
  }

  componentDidMount(){
    console.log('the github card componentDidMount')
  }

  inputChange(event) {
    this.setState({
      inputVal: event.target.value,
    })
  }

  search(e) {
    if(e.keyCode === 13) {
      e.preventDefault()
      const inputVal = this.state.inputVal
      const url = `https://api.github.com/users/${inputVal}`

      // this.getData('GET', url, this.dataHandler) for AJAX example

      fetch(url)
        .then((response) => {
          const res = response.json()
          return res
        })
        .then(function(response) {
          const user = response
          this.setState({
            inputVal: '',
            user,
            userLoaded: true,
          })
        }.bind(this));
    }
  }

  /* 
    * ajax example *
    getData(method, url, cb) {
      const req = new XMLHttpRequest();

      req.open(method, url, true)
      req.onload = () => {
        if(req.status >= 200 && req.status < 400) {
          cb(req.response)
        } else {
          console.log('error')
        }
      }

      req.send()
    }

    dataHandler(data) {
      const user = JSON.parse(data)
      console.log(user)
      this.setState({
        user,
      })
    }
  */

  render() {
    const { user } = this.state
    return (
      <div>
        <SearchInput 
          eventHandler={this.search}
          inputChange={this.inputChange}
          inputVal={this.state.inputVal}  
        />
        {this.state.userLoaded && 
          <div className='gh-card'> 
            <Title {...user}
              // title={user.name} 
              // location={user.location} 
              // bio={user.bio} 
              // url={user.html_url} 
              // repos={user.public_repos} 
              // followers={user.followers} 
              // following={user.following}
            />
            <img className='gh-card__img' src={user.avatar_url}></img>
          </div>
        }
      </div>
    )
  }
}