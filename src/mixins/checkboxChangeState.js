/**
 * @param {Event} event
 * @param {Object} data
 */
export function checkboxChangeState(event, data) {
    if (data.checked && !(data.value in this.state.selectedItems)) {
        let state = this.state.selectedItems;
        state[data.value] = this.props.list[data.value];
        this.setState({
            selectedItems: state
        });
    }
    if (!data.checked && (data.value in this.state.selectedItems)) {
        let state = this.state.selectedItems;
        delete state[data.value];
        this.setState({
            selectedItems: state
        });
    }
}