import $ from 'jquery'
import bindSelectEvent from './bindSelectEvent'
import copyAttr from '../../init/copyAttr'

export default function createSelectInside(self,$curEle,$container,dataObj,idx){
  let $options=$curEle.children()
  let value=[]
  let name=[]
  let optEles=[]

  let isMulti=$curEle.attr('data-cvf-multiple')!=null
  let $selectResult=$('<input class="cvf-select-result cvf-valid-field" readonly="readonly"/>')
  let $selectWrapper=$('<div class="cvf-select-wrapper"></div>')
  let $selectOptCont=$('<div class="cvf-select-option-container"></div>')
  $selectWrapper=copyAttr($curEle,$selectWrapper,['data-cvf-label','data-cvf-multiple','class'])

  for(let i=0; i<$options.length; i++){
    let $selectOptItem=$('<div class="cvf-select-option-item"></div>')
    optEles.push(copyAttr($options.eq(i),$selectOptItem,['value']))
    value.push($options.eq(i).attr('value'))
    name.push($options.eq(i).text())
    $selectOptCont.append($selectOptItem)
  }
  $selectWrapper.append($selectResult)
  $selectWrapper.append($selectOptCont)

  for(let i=0; i<value.length; i++){
    optEles[i].text(name[i])
  }
  dataObj.reset=() => {
    $selectResult.val('')
    optEles.forEach((optE) => $(optE).removeClass('cvf-select-active'))
    dataObj.result=null
    dataObj.textShow=null
  }
  dataObj.reset()

  self._elementBlur(idx)
  $container.append($selectWrapper)


  // $selectResult.blur()
  let {showClearBtn,hideClearBtn}=self.addClearBtn($selectWrapper,$selectResult,dataObj)
  bindSelectEvent(self,{
    value,name,optEles,dataObj,$selectResult,$selectOptCont,isMulti,idx,showClearBtn,hideClearBtn
  })
}
