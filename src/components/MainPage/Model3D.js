import React from 'react';
import classes from './Model3d.module.css'
import model from '../../vendors/MainPage/uploads_files_1969587_Cactus1.gltf'

const Model3D = () => {
    return (
        <div className={classes.wrapper}>
            <x-model style={{width: '100%', height:'100%'}} className={classes.xmodel} src={model}></x-model>
        </div>
    );
};

export default Model3D;
