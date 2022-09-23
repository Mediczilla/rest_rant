const React = require('react')



module.exports = Def


function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="" />
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}