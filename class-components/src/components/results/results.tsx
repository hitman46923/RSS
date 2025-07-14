import React, { Component } from "react";
import classes from './style.module.css'


interface Person {
    id: number;
    name: string;
    height: number;
  }
  
  interface State {
    people: Person[];
    loading: boolean;
    error: string | null;
  }
  


class Results extends Component<{}, State> {
    state: State = {
      people: [],
      loading: true,
      error: null,
    };
  



componentDidMount(): void {
    fetch("https://swapi.py4e.com/api/people/")
    .then((response) => response.json())
    
    .then((data) => {
      this.setState({ people: data.results});
    })
     
    }




    render(): React.ReactNode {
        const { people} = this.state;
        console.log(people)
      
        return (
          <div>
            {people.slice(0,3).map((person, index) => (
              <React.Fragment key={index}>
                <div className={classes.wrapper}>
                  <h2> Item Name: {person.name}</h2>
                  <h2 className={classes.item}> Item Description: {person.height}</h2>
                </div>
      
                <div className="wrapper">
                  <div></div>
                  <div></div>
                </div>
              </React.Fragment>
            ))}
          </div>
        );
      }

    }

export default Results;
