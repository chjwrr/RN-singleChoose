import React, {PureComponent} from 'react';
import Render from './render'

export default class SingleChoose extends PureComponent {


    constructor(props) {
        super(props)
    };


    // item点击
    onItemClick(index){

        this.props.onChooseItem && this.props.onChooseItem(index)
    }


    render() {
        return Render.render.call(this);
    }
}
/*
* using

  <SingleChoose data={['德玛西亚', '盖伦', '请输入你的姓名和年龄', '这不是我的错', '你叫什么名字呀', '请输入详细的公司地址及电话和邮编还有你是谁', '阅']}
                    selectIndex={2} // 当前选中的index
                    onChooseItem={(index)=>{
                        console.log('当前选中==',index)
                        coding...
                    }}/>
  ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️ 最顶端父视图必须设置 flex:1
*/
