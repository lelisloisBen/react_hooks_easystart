import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';

const Home = () => {

    const {name} = useContext(UserContext);
    const {email} = useContext(UserContext);
    const {test} = useContext(UserContext);

    return (
        <>
        <div class="jumbotron jumbotron-fluid">
            <div class="container text-center">
                
            <h1>Home page</h1>

            {!name && !email ? "welcome to Samir's Boiler plate" : <>
                Hi <b>{name}</b>, 
                <br/>
                thank you for filling up the form, we will send an email at:  <b>{email}</b>
            </>
            }

            <br/>
            <br/>

            {test.map((item,index) => {
                return (
                    <div key={index}>
                        {item.key1} || {item.key2}
                    </div>
                )
            })}
            </div>
        </div>
        </>
    )
};

export default Home;