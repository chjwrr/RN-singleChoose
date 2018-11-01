import React, {PureComponent} from 'react';
import {
    Platform,
    View,
    Image,
    TouchableOpacity,
    BackAndroid,
} from 'react-native'
import Render from './render'

export default class SingleChoose extends PureComponent {

   
    constructor(props) {
        super(props)

        this.state = {
            data: this.props.navigation.state.params.data,
            selectIndex: this.props.navigation.state.params.selectIndex
        };

        this.goBack = this.goBack.bind(this)

    };

    componentDidMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
        this.props.navigation.setParams({
            goBack:this.goBack
        })
    };

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    };

    // item点击
    onItemClick(item){
        this.setState({
            selectIndex: item.index
        },()=>{
            // this.props.onChooseItem && this.props.onChooseItem(item.index)
            //this.goBack()
        })
    }

    render() {
        return Render.render.call(this);
    }
}
/*
* using
*
  this.props.navigation.navigate('SingleChoose', {
            data: [{title: '第1行'}, // 数据
                {title: '第2行'},
                {title: '第3行'},
                {title: '第4行'},
                {title: '第5行'},
                {title: '第6行'},
                {title: '第7行'},
                {title: '第8行'},
                {title: '第9行'},
                {title: '第10行'},
            ],
            title: '德玛西亚', // 标题
            selectIndex: 8, // 没有则不传此属性
            onChooseItem:(index)=>{ // 返回下标
                // 选中的第几个
                console.log('选中：',index)
            }
        })
*/
