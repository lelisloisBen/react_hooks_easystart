import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';

const Demo = () => {

    const {name, setName} = useContext(UserContext);
    const {email, setEmail} = useContext(UserContext);
    const {buttonColor, setButtonColor} = useContext(UserContext);

    const {logo} = useContext(UserContext);

    const changeButtonColorHandler = () => {
        buttonColor === "blue" ? setButtonColor('limegreen') : setButtonColor('blue')
    }

    return (
        <>
            <div className="row">
                <div className="col text-center">
                    <img src={logo} alt="img" width="150px" />
                </div>
            </div>
        
            <div className="row">
                <div className="col">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link to="/">
                        Submit
                    </Link>
                </div>
            </div>

            <br/>

            <div className="row">
                <div className="col">
                    <button
                        className={buttonColor}
                        onClick={changeButtonColorHandler}
                    >
                        Click to Change the Button Color
                    </button>
                </div>
            </div>
            
        </>
    )
};

export default Demo;