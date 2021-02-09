import React, {useEffect, useState} from 'react';
import {firebase} from "../../Firebase";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../redux/actions/actions";
import ViewHeader from "./VievHeader";
import JustWrapper from "../MyCustomComponents/JustWrapper";
import ViewContact from "./VievContact";
import ViewLinks from "./ViewLinks";
import ViewCustomBlocks from "./ViewCustomBlocks";
import ViewMessage from "./ViewMessage";
import CircularProgress from "@material-ui/core/CircularProgress";
import classes from '../settings.module.css'
import MapBlock from "./ViewCustomBlocks";
import SliderBlock from "../SettingCustomsComponents/Slider/SliderBlock";


const MainProfileComponent = ({match, history}) => {
    let id = match.params.id
    const dispatch = useDispatch()
    const [theme, setTheme] = useState()
    const data = useSelector(state => state.data)
    let blocks = useSelector(state => state.data.block)
    let customBlock = useSelector(state => state.data.customBlock)
    useEffect(() => {
        dispatch(getData(id))
    }, [])
    useEffect(() => {
        if (data.userInfo){
            setTheme(data.userInfo.theme)
        }
    })
    const style = {
        dark: {
            background: 'url(https://www.mojandroid.sk/wp-content/uploads/2015/05/Dark-Cosmos-Stars-Clouds-Android-Wallpaper.jpg) no-repeat',
            backgroundSize: 'fill',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        },
        light: {
            background: 'url(https://newdesign.ucoz.ru/_ph/5/284936690.jpg) no-repeat',
            backgroundSize: 'fill',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }
    }
    return (
        <div style={theme ? style[theme] : null} className={classes.wrapper}>
            <JustWrapper>
                {data.userInfo ? <>
                        <ViewHeader theme={theme && theme} data={data}/>
                        {blocks.about && data.userInfo.message && <ViewMessage theme={theme && theme} data={data}/>}
                        {blocks.contacts && <ViewContact theme={theme && theme} data={data}/>}
                        {blocks.socialLink && data.socialLinks && <ViewLinks theme={theme && theme} data={data}/>}
                        {blocks.map && customBlock.map && <MapBlock theme={theme && theme} customBlock={customBlock} data={data} />}
                        {blocks.slider && customBlock.slider && <SliderBlock theme={theme && theme} customBlock={customBlock} data={data} />}

                    </>
                    :
                    <>
                        <JustWrapper style={{justifyContent: 'center'}}>
                            <CircularProgress/>
                        </JustWrapper>
                    </>
                }
            </JustWrapper>
        </div>
    );
};

export default MainProfileComponent;
