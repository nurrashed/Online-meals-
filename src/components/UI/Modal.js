import React from 'react'
import ReactDom from 'react-dom'
import classes from './Modal.module.css'
//import { ReactDom } from 'react-';

const Backdrop = (props) => {
    return <div onClick={props.onBackdropClick} className={classes.backdrop} />
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>

}

const portalElement = document.getElementById('overlays')

export default function Modal(props) {
    return <React.Fragment>
        {ReactDom.createPortal(<Backdrop onBackdropClick={props.onHideClick}/>, portalElement)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </React.Fragment>
}
