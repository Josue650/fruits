const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title='Create New Fruit'>
            <form method="POST" action="/fruits">
                Name: <input type="text" name="name" placeholder='Name of Fruit Here'></input><br/>
                Color: <input type="text" name="color" placeholder='Color of Fruit Here'></input><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat"></input><br/>
                <input type="submit" value="Submit Fruit"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New
