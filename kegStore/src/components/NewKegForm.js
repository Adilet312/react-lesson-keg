import React from "react";


class AddKegForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createKeg = (event) => { 
        event.preventDefault();
        const keg = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        };
        this.props.addKeg(keg);
        event.currentTarget.reset();
    };
    

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createKeg}>
                <input name="name" type="text" placeholder="Name" ref={this.nameRef} />
                <input name="price" placeholder="Price" ref={this.priceRef} />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Available!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" type="text" placeholder="Desc" ref={this.descRef}></textarea>
                <input name="image" type="text" placeholder="Image" ref={this.imageRef} />
                <button tyoe="submit">+ Add Keg</button>
            </form>
        )
    }
}

export default AddKegForm;