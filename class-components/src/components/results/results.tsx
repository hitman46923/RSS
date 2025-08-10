import { useEffect,useState } from 'react';
import React from 'react';
import classes from './style.module.css'
import { useGetPeopleQuery } from '../../services/api'




function Results () {

  const { data, error, isLoading } = useGetPeopleQuery()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error</p>


  return (
    <div>
    {data?.results.slice(0, 3).map((person) => (
      <React.Fragment key={person.name}>
        <div className={classes.wrapper}>
          <h2>Item Name: {person.name}</h2>
          <h2 className={classes.item}>{person.height}</h2>
        </div>
        <div className="wrapper">
          <div></div>
          <div></div>
        </div>
      </React.Fragment>
    ))}
  </div>
)

}



export default Results








/*   function Results () {


    const [people, setPeople] = useState<Person[]>([]);

    useEffect(() => {
      fetch("https://swapi.py4e.com/api/people/")
        .then((response) => response.json())
        .then((data) => {
          setPeople(data.results);
        })
        
    }, []); 
    
    
    console.log(people)
    return (
      <div>
        {people.slice(0,3).map((person, index) => (
          <React.Fragment key={person.name}>
            <div className={classes.wrapper}>
              <h2> Item Name: {person.name}</h2>
              <h2 className={classes.item}> {person.height}</h2>
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

  export default Results

 */



  
/*   interface State {
    people: Person[];
    loading: boolean;
    error: string | null;
  } */
  


/* class Results extends Component<{}, State> {
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

export default Results; */
