import React, { Fragment } from 'react'
import Card from '../Card/Card'

const Container = (props) => {
    return (
        <Fragment>
            {props.children}
            <Card />
        </Fragment>
    )
}

export default Container