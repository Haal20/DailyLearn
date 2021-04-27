import React from 'react'

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount(){
        const userId = this.props.userId

        fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({users: data});
            console.log(data);
        })
    }

    render(){
        const users = this.state.users;
        return(
        <div>
            <ul>
                {users.map(user => 
                    <li key={user.id}>
                    id: {user.id}<br/>
                    name: {user.name}<br/>
                    username: {user.username}<br/>
                    email: {user.email}<br/>
                    </li>
                )}
            </ul>
        </div>
        );
    }
}

export default User