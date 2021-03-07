import 'pepjs'

import createTextFieldHtmlObj from '../insert/createTextFieldHtmlObj'
import CreateValidateElement from './CreateValidateElement'
import createDateTimeInside from '../insert/datetime/createDateTimeInside'


class CreateValidateDatetime extends CreateValidateElement{
  constructor({
    ele = null,
    rules = [],
    material = true,
    showSuccess = true,
  } = {}) {
    super({
      ele,
      rules,
      material,
      showSuccess,
    })
    this.init()
  }
  
  insertElement($wrapper,$curEle,idx){
    let type=$curEle.attr('type')
    let realType=type
    if(type==='datetime-local' || type==='datetime')realType='datetime'
    const [$container,dataObj]=createTextFieldHtmlObj(this,{$wrapper,$curEle,idx})
    createDateTimeInside(this,{
      $curEle,
      $container,
      dataObj,
      idx,
      realType,
    })
  }
}

export default CreateValidateDatetime
