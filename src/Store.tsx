import React from 'react'

const Store = React.createContext()

const initialState = {}

function reducer() {

}

export function StoreProvider(props: any): JSX.Element {
    return <Store.Provider value='test'></Store.Provider>
}