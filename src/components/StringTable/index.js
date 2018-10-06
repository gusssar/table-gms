import React,{Component} from 'react'

class StringTable extends Component{
    render(){
        const {obj} = this.props;
        return(
            <tr>
                <td>
                    {obj.Name}
                </td>
                <td>
                    {obj.Email}
                </td>
                <td>
                    {obj.Phone}
                </td>
                <td>
                    {obj.Company}
                </td>
            </tr>
        )
    }
}

export default StringTable;