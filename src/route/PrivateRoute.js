import React from 'react'
import { Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Product from '../pages/Product'

const PrivateRoute = ({ authenticate }) => {
    return (
        authenticate == true ? <Product /> : <Navigate to = "/login" />
    )
}

export default PrivateRoute