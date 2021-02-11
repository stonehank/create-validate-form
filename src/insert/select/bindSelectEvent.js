import selectHideDropdown from './event/selectHideDropdown'
import selectShowDropdown from './event/selectShowDropdown'
import selectChoose from './event/selectChoose'

export default function bindSelectEvent(self,{
  value,name,optEles,dataObj,$selectResult,$selectOptCont,isMulti,idx,showClearBtn,hideClearBtn
}){
  setTimeout(() => {
    self._elementBlur(idx)
  },0)
  if(dataObj.isDisabled){
    return
  }
  $selectOptCont.on('pointerdown',false)
  for(let i=0; i<value.length; i++){
    optEles[i].text(name[i])
    optEles[i].on('pointerdown',false)
    optEles[i].on('click',(ev) => {
      if(optEles[i].hasClass('cvf-disabled'))return
      ev.stopPropagation()
      if(isMulti){
        if(dataObj.result==null)dataObj.result=[]
        if(dataObj.textShow==null)dataObj.textShow=[]
        let existIdx=dataObj.result.indexOf((value[i]))
        if(existIdx===-1){
          dataObj.result.push(value[i])
          dataObj.textShow.push(name[i])
          optEles[i].addClass('cvf-select-active')
        }else{
          dataObj.result.splice(existIdx,1)
          dataObj.textShow.splice(existIdx,1)
          optEles[i].removeClass('cvf-select-active')
        }
        if(dataObj.result.length===0 && dataObj.textShow.length===0){
          hideClearBtn()
        }else{
          showClearBtn()
        }
      }else{
        dataObj.result=value[i]
        dataObj.textShow=name[i]
        optEles.forEach(($ele) => $ele.removeClass('cvf-select-active'))
        optEles[i].addClass('cvf-select-active')
        showClearBtn()
      }
      selectChoose(self,{
        idx,$selectResult,$selectOptCont,isMulti
      })
    })
  }

  $selectResult.on('focus',(ev) => {
    ev.stopPropagation()
    self.dirty[idx]=true
    selectShowDropdown(self,{idx,$selectOptCont,$selectResult})
  })
  $selectResult.on('blur',() => {
    // ev.stopPropagation()
    selectHideDropdown(self,idx)
  })
}
