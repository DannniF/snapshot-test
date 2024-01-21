import {useState, useEffect} from "react";

function Display ({user}) {
    useEffect(() => {
        console.log('Display Component mounted to Dom')
    }, [])

    return(
        <div>
            <h1>{user.login}</h1>
            <img src={user.avatar_url} alt="profile"/>
            <p>Profile: <a href={user.html_url} target = "blank">Here </a></p>
            {user.blog && <p>Blog: {user.blog}</p>}
            {user.company && <p>Company: {user.company}</p>}
            {user.location && <p>Location: {user.location}</p>}
        </div>
    )
}

export default Display