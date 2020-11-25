export default function createInputInside(self,$curEle,$container,dataObj,idx){
  $curEle[0].className='cvf-valid-field'
  $container.append($curEle)
  if(dataObj.result)self.dirty[idx]=true
  dataObj.reset=() => {
    $curEle.val('')
    dataObj.result=null
  }
  let {showClearBtn,hideClearBtn}=self.addClearBtn($container,$curEle,dataObj)
  self.bindValidateEvent($curEle,dataObj,idx,showClearBtn,hideClearBtn)
}
