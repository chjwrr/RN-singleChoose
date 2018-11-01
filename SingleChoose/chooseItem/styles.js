import React from 'react';
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import {whiteColor,lineColor,titleColor,mainColor} from '../constValue/colorValue'

export default StyleSheet.create({

    container: {
        backgroundColor: whiteColor
    },
    line:{
        height: 1,
        width,
        backgroundColor: lineColor
    },
    item: {
        lineHeight: 52,
        fontSize: 14,
        color: titleColor,
        marginLeft: 16
    },
    selectItem: {
        lineHeight: 52,
        fontSize: 14,
        color: mainColor,
        marginLeft: 16
    }
})