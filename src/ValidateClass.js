
class CreateValidateForm {
  constructor({
    eleLength= null,
    showSuccess = true,
    rules = [],
  } = {}) {
    if (eleLength == null) throw new Error('Need ele length')
    this.len = eleLength
    this.rules = rules
    this.showSuccess=showSuccess
    this.isValidates = Array(this.len).fill(null)
    this.dirty = []
    this.errorMsg = []
    this.allValid = false
  }


  validAll(dataObjArr) {
    this.allValid = true
    for (let i = 0; i < dataObjArr.length; i++) {
      if(this.validEle(dataObjArr[i])===false){
        this.allValid=false
      }
    }
    return this.allValid
  }

  validEle(dataObj) {
    if (!dataObj) return null
    let {result:eleValue,idx:index}=dataObj
    if(!this.dirty[index]){
      this.isValidates[index] = null
      this.validate_render(dataObj,index)
      return null
    }
    let curRules = this.rules[index]
    let valid = null
    if (Array.isArray(curRules)) {
      for (let i = 0; i < curRules.length; i++) {
        let curRule = curRules[i]
        if (typeof curRule === 'string') {
          throw TypeError('rules must be array')
        } else if (typeof curRule !== 'function') {
          curRule = null
        }
        if (curRule) {
          let msg = curRule(eleValue)
          if (msg !== true) {
            this.isValidates[index] = false
            this.errorMsg[index] = msg
            valid = false
          } else {
            valid = true
          }
        }
        if (!valid) break
      }
    }
    this.isValidates[index] = valid
    this.validate_render(dataObj,index)
    return valid
  }

  validate_render(dataObj,index) {
    let {$msgEle, $fieldEle, $labelEle} = dataObj
    let errorMsg = this.errorMsg[index]
    let isValid = this.isValidates[index]
    if (isValid === true) {
      if($fieldEle){
        $fieldEle.removeClass('cvf-error')
        if(this.showSuccess)$fieldEle.addClass('cvf-success')
      }
      $labelEle.removeClass('cvf-text-error')
      if(this.showSuccess)$labelEle.addClass('cvf-text-success')
      $msgEle.text(null)
    } else if (isValid === false) {
      if($fieldEle){
        $fieldEle.removeClass('cvf-success')
        $fieldEle.addClass('cvf-error')
      }
      $labelEle.removeClass('cvf-text-success')
      $labelEle.addClass('cvf-text-error')
      $msgEle.text(errorMsg)
    }else{
      if($fieldEle){
        $fieldEle.removeClass('cvf-success')
        $fieldEle.removeClass('cvf-error')
      }
      $labelEle.removeClass('cvf-text-success')
      $labelEle.removeClass('cvf-text-error')
      $msgEle.text('')
    }
  }
}

export default CreateValidateForm
