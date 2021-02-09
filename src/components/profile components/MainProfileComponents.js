import React, {useEffect} from 'react';
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
    const data = useSelector(state => state.data)
    let blocks = useSelector(state => state.data.block)
    let customBlock = useSelector(state => state.data.customBlock)
    let theme = 'dark'
    useEffect(() => {
        dispatch(getData(id))
    }, [])
    const style = {
        dark: {
            background: 'url(https://www.mojandroid.sk/wp-content/uploads/2015/05/Dark-Cosmos-Stars-Clouds-Android-Wallpaper.jpg) no-repeat',
            backgroundSize: 'fill',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        },
        light: {
            background: 'blue',
        }
    }
    return (
        <div style={style[theme]} className={classes.wrapper}>
            <JustWrapper>
                {data.userInfo ? <>
                        <ViewHeader theme={theme} data={data}/>
                        {blocks.about && data.userInfo.message && <ViewMessage theme={theme} data={data}/>}
                        {blocks.contacts && <ViewContact theme={theme} data={data}/>}
                        {blocks.socialLink && <ViewLinks theme={theme} data={data}/>}
                        {blocks.map && customBlock.map && <MapBlock theme={theme} customBlock={customBlock} data={data} />}
                        {blocks.slider && customBlock.slider && <SliderBlock theme={theme} customBlock={customBlock} data={data} />}

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
