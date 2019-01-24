import React from 'react'
import './App.css'
import Title from './Title'
import SearchInput from './SearchInput'
import './Title.css'
import { timingSafeEqual } from 'crypto';

class GithubCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
      },
    }

    this.search = this.search.bind(this)
    // this.dataHandler = this.dataHandler.bind(this)
  }

  componentDidMount(){
    console.log('the github card componentDidMount')
  }

  search(e) {
    if(e.keyCode === 13) {
      const inputVal = document.querySelector('#search input').value //todo: move this to state
      const url = `https://api.github.com/users/${inputVal}`

      // this.getData('GET', url, this.dataHandler)

      fetch(url)
        .then((response) => {
          const res = response.json()
          return res
        })
        .then(function(response) {
          const user = response
          console.log(`this in the fetch part`)
          console.log(this)
          this.setState({
            user,
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
        <SearchInput eventHandler={this.search}/>
        <div className='gh-card'> 
          <Title title={user.name} location={user.location} bio={user.bio} url={user.html_url} repos={user.public_repos} followers={user.followers} following={user.following}/>
          {/* <h1 className='gh-card__title'>{user.name}</h1> */}
          <img className='gh-card__img' src={user.avatar_url}></img>
        </div>
      </div>
    )
  }
}

export default GithubCard