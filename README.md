# RN-singleChoose
singleChoose单选组件（列表）

![image.png](https://upload-images.jianshu.io/upload_images/23011-1a1660d73f431862.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
render() {
        return (
            <View style={{flex:1}}>
                <SingleChooseView data={['德玛西亚', '盖伦', '请输入你的姓名和年龄', '这不是我的错', '你叫什么名字呀', '请输入详细的公司地址及电话和邮编还有你是谁', '阅']}
                                  selectIndex={2}
                                  onChooseItem={(index)=>{
                                      console.log('当前选中==',index)
                                  }}/>
            </View>
        )
    }
```

