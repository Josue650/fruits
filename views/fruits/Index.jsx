const React = require('react');
const Default = require('../layouts/Default.jsx')


class Index extends React.Component{
    render(){
        const {fruits} = this.props
        return(
            <Default title="Fruits Index Page">
                <ul>
                    {
                        fruits.map((fruit) => {
                            const {name, color, readyToEat, _id} = fruit
                            return (
                                <li key={_id}>
                                    <a href={`/fruits/${_id}`}>
                                    {name}</a> is {color}

                                     <br/>
                                    {
                                        readyToEat?
                                        'It\'s ready to eat':
                                        'It\'s not ready to eat'
                                    }
                                    <br/>
                                    <form method="POST" action={`/fruits/${_id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${color} ${name}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index
