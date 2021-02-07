export default function bindRadioEvent(self,$selectorContainer,dataObj){
  let {idx}=dataObj
  $selectorContainer.on('click',function(){
    let index=$selectorContainer.index(this)
    self.dirty[idx] = true
    let $curSelectorTick=$(this).find('.radio-ticker')
    let $allSelectorTick=$selectorContainer.find('.radio-ticker')
    if(!$curSelectorTick.hasClass('cvf-radio-selector-tick')){
      $allSelectorTick.removeClass('cvf-radio-selector-tick')
      $curSelectorTick.addClass('cvf-radio-selector-tick')
      dataObj.result=dataObj.valueList[index]
    }
    self.validEle(dataObj)
    console.log(index)
  })
}
