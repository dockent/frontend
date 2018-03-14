/**
 * @param {Event} e
 * @param {string} name
 * @param {string} value
 */
export function handleChange(e, {name, value}) {
    let model = this.state.model;
    model[name] = value;
    this.setState({
        model: model
    });
}

/**
 * @param {Event} e
 * @param {string} name
 * @param {bool} checked
 */
export function handleChangeCheckbox(e, {name, checked}) {
    let model = this.state.model;
    model[name] = checked;
    this.setState({
        model: model
    });
}