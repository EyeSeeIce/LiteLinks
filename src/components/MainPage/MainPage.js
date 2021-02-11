import React, {useEffect, useRef, useState} from 'react';
import {firebase} from "../../Firebase";
import {KeyboardArrowUpOutlined} from "@material-ui/icons";
import {connect, useSelector} from 'react-redux'
import {createUser, getUid} from "../../redux/actions/actions";
import Wrapper from "./CustomMainPageComponents/Wrapper";
import classes from './MainPage.module.css'
import logo from './../../vendors/MainPage/logo.svg'
import Modal from "./Modal";
import UserMenu from "./UserMenu";
import Links from "./Links";
import img1 from './../../vendors/MainPage/images/Blob.svg'
import callService from '../../vendors/MainPage/images/CalService.svg'
import blobBg from '../../vendors/MainPage/images/bgBlob.svg'
import money from '../../vendors/MainPage/images/money.svg'
import {Link} from "react-scroll";
import Button from "./CustomMainPageComponents/Button";
import FormWrapper from "../MyCustomComponents/FormWrapper";
import TextField from "@material-ui/core/TextField";
import axios from "axios";



const MainPage = ({getUid, uid, history}) => {
    const [users, setUsers] = useState(0)
    const [user, setUser] = useState('')
    const [authState, setAuthState] = useState(false)
    const [open, setOpen] = useState(false)
    const [frame, setFrame] = useState(false)
    const [frameStyle, setFrameStyle] = useState(false)
    let name = useRef()
    let email = useRef()
    let message = useRef()
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                getUid(user.uid)
                setAuthState(true)
                /*history.push('/settings')*/
                setUser(user.email)

            } else {
                history.push('/')
                setAuthState(false)
            }
        })
    })
    useEffect(() => {
        firebase.database().ref(`users/`).once('value', snp => {
            let a = Object.keys(snp.val())
            setUsers(35 + a.length)
        })
    })
    const close = e => {
        setOpen(false)
    }

    const style = {
        close: {
            transform: 'translateY(-100%)'
        },
        open: {
            transform: 'translateY(0%)'
        }
    }
    const closeFrame = e => {
        setFrameStyle(true)
        setTimeout(() => {
            setFrame(false)
        }, 300)
    }

    return (
        <div className={classes.container}>
            <Wrapper>
                {/*<div className={classes.navigation}>
                    <nav>
                        <Links/>
                    </nav>
                </div>*/}
                <Modal open={open} close={close}/>
                <section className={classes.header} id='main'>
                    <div className={classes.headerTop}>
                        <div className={classes.logo}>
                            <img src={logo} alt=""/>
                        </div>

                        <div className={classes.login}>
                            <UserMenu close={close} setOpen={setOpen} history={history} user={user}/>
                        </div>
                    </div>
                    <div className={classes.headerTitle}>
                        <h1>Lite Links</h1>
                    </div>
                    <div className={classes.headerText}>
                        <p>
                            Быстрый и удобный способ обменяться контактами!
                        </p>
                    </div>
                </section>
                <section className={classes.about} id='about'>
                    <div className={classes.block}>
                        <img className={classes.image} src={img1} alt=""/>
                        <p>Наша планета полона интересными людьми. Встречая таких, мы хотели бы взять их контакты или
                            оставить свои, ведь наверняка захочется пообщаться еще. Но в современном мире количество
                            социальных сетей и способов связи просто зашкваливает!</p>
                    </div>
                    <div className={classes.block}>
                        <p>К счастью, Lite Links решает эту проблему! Сервис позволит объеденить вашу контактную
                            информацию в одном месте и делиться ею в одно касание!</p>
                        <img className={classes.image} src={callService} alt=""/>
                    </div>
                    <div className={classes.block}>
                        <img className={classes.image} src={money} alt=""/>
                        <p>Проект Lite Links является абсолюнто бесплатным! Любой человек может пройти регистрацию и получить свою индивидуальную
                        ссылку!</p>
                    </div>
                </section>
                <section className={classes.howItLook} id='howItLook'>
                    <h2 className={classes.howItLookTitle}>Вот как это выглядит</h2>
                    {frame ?
                        <div className={classes.howItWrapper}>

                            <div style={frameStyle ? style.close : style.open} className={classes.howItContainer}>
                                <img src={blobBg} alt=""/>
                                <iframe src="https://litelinks.ru/profile/Ocn6gjBaSQTxfpcQfNdm6qCxwSs1"
                                        className={classes.frame} frameBorder="0"></iframe>
                                <h3 className={classes.howItLookTitle}>Правда здорово?</h3>
                                <KeyboardArrowUpOutlined style={{cursor: 'pointer'}} fontSize={"large"}
                                                         onClick={closeFrame}/>
                            </div>
                        </div>
                        : <div className={classes.openFrame} onClick={() => {
                            setFrame(true)
                            setFrameStyle(false)
                        }}>Открыть</div>}

                </section>
                <section className={classes.footer} id='footer'>

                </section>
            </Wrapper>
        </div>
    )
        ;
};

const mapDispatchToProps = {
    getUid
}
export default connect(null, mapDispatchToProps)(MainPage);
