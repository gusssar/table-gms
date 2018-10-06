import React,{Component} from 'react';

class HeadreTable extends Component{

    render() {
        const {headerTable} = this.props;

        const a = <th>headerTable[0]</th>;
        const b = <th>headerTable[1]</th>;
        const c = <th>headerTable[2]</th>;
        const d = <th>headerTable[3]</th>;

        // const headerTableView = headerTable.map(function (title) {
        //     return (<th>title</th>)
        // });

        // for (let i=0; i<headerTable.length; i++){
        //     /**найти метод динамического пуша th */
        // }

        return(
            // {headerTableView}
            {a},
        {b},
        {c},
        {d}

        )
    }
}

export default HeadreTable