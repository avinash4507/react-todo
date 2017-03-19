var React = require('react');

var TodoSearch = React.createClass({
    handleSearch: function () {
        let searchText = this.refs.searchText.value;
        let showCompleted = this.refs.showCompleted.checked;

        this.props.handleSearch(searchText, showCompleted);
    },
    render: function () {
        return (
            <div>
                <div>
                    <input type="text" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        Show Completed Todos
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;