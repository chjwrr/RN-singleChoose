import React from 'react';

import {
    FlatList
} from 'react-native';

import styles from './styles'
import ChooseItem from './chooseItem'

export default {

    render() {
        return (
            <FlatList style={styles.container}
                      extraData={this.state}
                      keyExtractor={(item, index) => String(index) }
                      data={this.state.data}
                      renderItem={(item)=> <ChooseItem item={item}
                                                      selectIndex={this.state.selectIndex}
                                                      onItemClick={this.onItemClick.bind(this, item)} />}
            />
        )
    }
}
