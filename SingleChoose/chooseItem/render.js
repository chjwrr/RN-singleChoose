import React from 'react';

import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

import styles from './styles'

export default {

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.onItemClick}>
                    <Text numberOfLines={1} style={this.props.selectIndex === this.props.item.index ? styles.selectItem : styles.item}>
                        {this.props.item.item}
                    </Text>
                </TouchableOpacity>
                <View style={styles.line}/>
            </View>
        )
    }
}
