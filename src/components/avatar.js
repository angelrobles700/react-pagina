import React from "react";
import { MyContext } from "../context";
import userIcon from "../images/account.png"

export const Avatar =() =>(
    <MyContext.Consumer>
        {value=>(
            <div>
                <img src={userIcon} alt = "user icon" />
                <p>{value.user}</p>
            </div>
        )}
    </MyContext.Consumer>
)