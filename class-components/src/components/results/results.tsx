import React from "react";
import classes from './style.module.css'

class Results extends React.Component {






    componentDidMount(): void {
        fetch("https://swapi.py4e.com/api/people/")
  .then(response => response.json())
  .then(data => console.log(data));

        
    }









    render(): React.ReactNode {

        return (
            <div>
                <div  className={classes.wrapper }>
                <h2>Item name</h2>
                <h2 className={classes.item}>Item Description</h2>
                </div>
                <div className="wrapper">
                    <div></div>
                    <div></div>

                </div>

                <button>Error</button>
            </div>
        )
    }

}



export default Results;