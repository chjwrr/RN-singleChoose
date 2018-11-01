import React, {Component,PureComponent} from 'react';
import Render from './render'
import PropTypes from 'prop-types'

export default class chooseItem extends Component {

    constructor(props) {
        super(props)

    }

    shouldComponentUpdate(nextProps, nextState) {
        // 需要更新的是 当前选中的及上一次选中的
        return this.props.item.index === nextProps.selectIndex || this.props.item.index == this.props.selectIndex
    }
    render() {
        return Render.render.call(this);
    }
}

chooseItem.propsType = {
    item: PropTypes.object.isRequired, // 数据源
    selectIndex: PropTypes.any, // 选中的index
    onItemClick: PropTypes.func,// item点击事件
}
chooseItem.defaultProps = {

}

