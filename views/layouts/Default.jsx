const React = require('react')

class Default extends React.Component {
    render(){
        const {fruit, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href='/fruits'>Go to Home Page For Fruits</a>
                        <a href="/fruits/new">Create a New Fruit</a>
                        { this.props.fruit? <a href={`/fruits/${fruit._id}/edit`}> {fruit.name} Edit Page </a> : ''}
                        { this.props.fruit? <a href={`/fruits/${fruit._id}`}>{fruit.name} Show Page </a> : ''}
                    </nav>
                    <h1>
                        {title}
                    </h1>

                    {this.props.children}
                </body>
            </html>
        )
    }
}
module.exports = Default
