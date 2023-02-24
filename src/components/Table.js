function TableData (props){
    const {data,onRowClick} = props;
    let key =Object.keys(data[0])
    return (
        <table>
        <thead>
            <tr>
                {key.map((e,i)=>(
                    <th key={i}>{e}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((x,i)=>(
                <tr onClick={()=>onRowClick(x)} key={i}>
                    {key.map((y,ind)=>(
                        <td key={ind}>{x[y]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
    )
}
export default TableData;