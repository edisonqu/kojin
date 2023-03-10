import React from "react";

var Button = React.createClass({
    render: function() {
        return (

            <div className="flex space-x-2 justify-center">
                    <button type="button" className="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Dark</button>
            </div>
        );
    }
});

export default Button