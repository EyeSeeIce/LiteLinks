import React, {useEffect} from 'react';
import {firebase} from "../../Firebase";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../redux/actions/actions";
import ViewHeader from "./VievHeader";
import JustWrapper from "../MyCustomComponents/JustWrapper";
import ViewContact from "./VievContact";
import ViewLinks from "./ViewLinks";
import ViewCustomBlocks from "./ViewCustomBlocks";

const MainProfileComponent = ({match, history}) => {
    let id = match.params.id
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    useEffect(() => {
        dispatch(getData(id))
    }, [])
    console.log(data)
    return (
        <>
            <JustWrapper>
                {data.userInfo ? <>
                    <ViewHeader data={data}/>
                    <ViewContact data={data} />
                    <ViewLinks data={data} />
                    <ViewCustomBlocks data={data} />
                </> : <div>Загрузка</div>}
            </JustWrapper>
        </>
    );
};

export default MainProfileComponent;
