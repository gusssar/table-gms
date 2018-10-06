import React, {Component} from 'react'
import StringTable from '../StringTable/index'
import HeaderTable from '../HeaderTable/index'
import profiles from './profiles.json'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

class App extends Component{




    render(){
        // const stringTable=profiles.map((data,index) =>
        //     <tbody><StringTable profiles={profiles}/></tbody>);

        let titleArr =[];
            for (let title in profiles[0]){
                titleArr.push(title);
            }


        console.log('--AppHeader---',titleArr);

        // const headerTable = <HeaderTable titleArr={titleArr}/>;

        const stringTable=profiles.map(function (obj) {
            return (<tbody><StringTable obj={obj}/></tbody>)
        });


        // console.log('---App---', a);
        return (
        <div>
            <table>
                {/*{headerTable};*/}
                {stringTable}
            </table>
        </div>

        )
    }

}

export default App