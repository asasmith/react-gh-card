import React from 'react'
import './App.css'
import Title from './Title'
import './Title.css'

class GithubCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        login: "asasmith",
        id: 11489171,
        node_id: "MDQ6VXNlcjExNDg5MTcx",
        avatar_url: "https://avatars2.githubusercontent.com/u/11489171?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/asasmith",
        html_url: "https://github.com/asasmith",
        followers_url: "https://api.github.com/users/asasmith/followers",
        following_url: "https://api.github.com/users/asasmith/following{/other_user}",
        gists_url: "https://api.github.com/users/asasmith/gists{/gist_id}",
        starred_url: "https://api.github.com/users/asasmith/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/asasmith/subscriptions",
        organizations_url: "https://api.github.com/users/asasmith/orgs",
        repos_url: "https://api.github.com/users/asasmith/repos",
        events_url: "https://api.github.com/users/asasmith/events{/privacy}",
        received_events_url: "https://api.github.com/users/asasmith/received_events",
        type: "User",
        site_admin: false,
        name: "Asa Smith",
        company: null,
        blog: "asasmith.com",
        location: "Baltimore MD",
        email: null,
        hireable: true,
        bio: "Front End Dev. Father. Coffee Lover. I used to build houses. Now I build websites. 🚀 ",
        public_repos: 57,
        public_gists: 1,
        followers: 10,
        following: 9,
        created_at: "2015-03-15T15:54:03Z",
        updated_at: "2018-12-30T18:27:29Z"
      }
    }
  }
  render() {
    const { user } = this.state
    return (
      <div className='gh-card'> 
        <Title title={user.name} location={user.location} bio={user.bio} url={user.html_url} repos={user.public_repos} followers={user.followers} following={user.following}/>
        {/* <h1 className='gh-card__title'>{user.name}</h1> */}
        <img className='gh-card__img' src={user.avatar_url}></img>
      </div>
    )
  }
}

export default GithubCard