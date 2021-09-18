import React, { Component } from "react";

class Id extends Component {
    componentWillMount() {
        alert('Silahkan cetak code')
    }

    state = {
        idMeja: '',
        kodeUnik: ''
    }

    handleidMeja = (event) => {
        const { name, value } = event.target
        this.setState((state) => {
            return {
                [name]: value
            }
        })
    }

    handlekodeUnik = (event) => {
        const { name, value } = event.target
        this.setState((state) => {
            return {
                [name]: value
            }
        })
    }

    render() {
        return (
            <>
                <label for="idMeja">Nomor Meja:</label><br />
                <input onChange={this.handleidMeja} name='idMeja' value={this.state.idMeja} style={{ color: '#6e0234' }} />
                <br />
                <label for="kodeUnik">Kode Unik:</label><br />
                <input type="number" onChange={this.handlekodeUnik} name='kodeUnik' value={this.state.kodeUnik} style={{ color: '#6e0234' }} />
                <br /><br />
                <label for="Kode Transaksi:">Kode Transaksi:</label><br />
                <span style={{ color: '#6e0234' }}>{this.state.idMeja}{this.state.kodeUnik}</span>
            </>
        )
    }
}

export default Id;