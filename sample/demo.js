import $ from 'jquery'
import CreateValidateForm from '../src/index'
import CreateValidateText from '../src/components/CreateValidateText'
import './demo.scss'
import {verifyRules} from '../src/verifyRules'
import CreateValidatePassword from '../src/components/CreateValidatePassword'
import CreateValidateSelect from '../src/components/CreateValidateSelect'
import CreateValidateTextarea from '../src/components/CreateValidateTextarea'
import CreateValidateDatetime from '../src/components/CreateValidateDatetime'
import CreateValidateFile from '../src/components/CreateValidateFile'
import CreateValidateCheckbox from '../src/components/CreateValidateCheckbox'
import CreateValidateRadio from '../src/components/CreateValidateRadio'
window.$=$

$(document).ready(() => {
  let allowFrom=new Date('2022-1-1')
  let allowTo=new Date('2017-4-6')
  let $showResult=$('#showResult')
  
  new CreateValidateForm({
    ele:'#custom-form',
    material:false,
    showSuccess:true,
    otpOptions:{
      otp1:{
        otpCount:4,
        sendAPI:'',
        verifyAPI:''
      }
    },
    uploadOptions:{
      noBackend:true,
      maxFiles:0,
      dnd: true,
      multiple: true,
      url: '/example/upload',
      method: 'POST',
      extraData: {x:1},
      headers: {},
      dataType: null,
      maxFileSize: 0,
      allowedTypes: '*',
      thumbnail:true,
      convertResponseToPath(id,data){
        console.log(id,data)
      },
      onUploadError(){
        console.log('Upload Error')
      },
      onInit(){},
      onComplete(){},
      onFallbackMode() {},
      onNewFile(){}, // params: id, file
      onBeforeUpload(){}, // params: id
      onUploadProgress(){}, // params: id, percent
      onUploadSuccess(){}, // params: id, data
      onUploadCanceled(){}, // params: id
      onUploadComplete(){}, // params: id
      onFileTypeError(){}, // params: file
      onFileSizeError(){}, // params: file
      onFileExtError(){}, // params: file
      onDragEnter(){},
      onDragLeave(){},
      onDocumentDragEnter(){},
      onDocumentDragLeave(){}
    },
    rules:[
      verifyRules.username,
      verifyRules.phone,
      verifyRules.disabled,
      verifyRules.email,
      verifyRules.password,
      verifyRules.singleSelect,
      verifyRules.disabled,
      verifyRules.multiSelect,
      verifyRules.disabled,
      verifyRules.msg,
      verifyRules.disabled,
      verifyRules.date(allowFrom,allowTo),
      verifyRules.disabled,
      null,
      verifyRules.date(allowFrom,allowTo),
      [(v) => !!v && v.length>0 || 'Need provide some file'],
      verifyRules.disabled,
      [(v) => !!v || 'Must accept this'],
      verifyRules.disabled,
      [(v) => (v!=null && v!=='') || 'Must choose a option'],
      [(v) => v==='b' || 'Must choose B'],
      [(v) => v==='b' || 'Must choose B'],
      verifyRules.disabled,
      [(v) => !!v || 'Must choose '],
      null
    ],
    allowedDate:[allowFrom,allowTo],
    afterValid:(ev,data) => {
      ev.preventDefault()
      $showResult.html(JSON.stringify(data))
    },
  })
})

$(document).ready(() => {
  window.textI=new CreateValidateText({
    ele:'#separate-msg',
    material:false,
    showSuccess:true,
    rules:verifyRules.username,
    afterValid(data){
      console.log(data)
    }
  })
  window.phoneI=new CreateValidateText({
    ele:'#separate-phone',
    material:false,
    showSuccess:true,
    rules:verifyRules.phone,
    afterValid(data){
      console.log(data)
    }
  })
  window.phoneIDisable=new CreateValidateText({
    ele:'#separate-phone-disable',
    material:false,
    showSuccess:true,
    rules:verifyRules.phone,
    afterValid(data){
      console.log(data)
    }
  })
  window.emailI=new CreateValidateText({
    ele:'#separate-email',
    material:false,
    showSuccess:true,
    rules:verifyRules.email
  })
  window.passwordI=new CreateValidatePassword({
    ele:'#separate-password',
    material:false,
    showSuccess:true,
    rules:verifyRules.password
  })
  window.singleSelectI=new CreateValidateSelect({
    ele:'#separate-single-select',
    material:false,
    showSuccess:true,
    rules:verifyRules.singleSelect
  })
  window.multipleSelectI=new CreateValidateSelect({
    ele:'#separate-multiple-select',
    material:false,
    showSuccess:true,
    rules:verifyRules.multiSelect
  })
  window.multipleSelectI=new CreateValidateTextarea({
    ele:'#separate-textarea',
    material:false,
    showSuccess:true,
    rules:verifyRules.msg
  })
  window.dateI=new CreateValidateDatetime({
    ele:'#separate-date',
    material:false,
    showSuccess:true,
    rules:verifyRules.required
  })
  window.timeI=new CreateValidateDatetime({
    ele:'#separate-time',
    material:false,
    showSuccess:true,
    rules:verifyRules.required
  })
  window.datetimeI=new CreateValidateDatetime({
    ele:'#separate-datetime',
    material:false,
    showSuccess:true,
    rules:verifyRules.required
  })
  window.fileI=new CreateValidateFile({
    ele:'#separate-file',
    material:false,
    showSuccess:true,
    rules:verifyRules.required,
    uploadOptions:{
      noBackend:true,
      maxFiles:0,
      dnd: true,
      multiple: true,
      url: '/example/upload',
      method: 'POST',
      extraData: {x:1},
      headers: {},
      dataType: null,
      maxFileSize: 0,
      allowedTypes: '*',
      thumbnail:true,
      convertResponseToPath(id,data){
        console.log(id,data)
      },
      onUploadError(){
        console.log('Upload Error')
      },
      onInit(){},
      onComplete(){},
      onFallbackMode() {},
      onNewFile(){}, // params: id, file
      onBeforeUpload(){}, // params: id
      onUploadProgress(){}, // params: id, percent
      onUploadSuccess(){}, // params: id, data
      onUploadCanceled(){}, // params: id
      onUploadComplete(){}, // params: id
      onFileTypeError(){}, // params: file
      onFileSizeError(){}, // params: file
      onFileExtError(){}, // params: file
      onDragEnter(){},
      onDragLeave(){},
      onDocumentDragEnter(){},
      onDocumentDragLeave(){}
    },
  })
  window.checkboxI=new CreateValidateCheckbox({
    ele:'#separate-checkbox',
    material:false,
    showSuccess:true,
    rules:[(v) => !!v || 'Must accept this'],
  })
  window.radioGroupI=new CreateValidateRadio({
    ele:'#separate-radio-group',
    material:false,
    showSuccess:true,
    rules:[(v) => (v!=null && v!=='') || 'Must choose a option'],
  })
  window.radioGroupSomeDisabledI=new CreateValidateRadio({
    ele:'#separate-radio-group-some-disabled',
    material:false,
    showSuccess:true,
    rules: [(v) => v==='b' || 'Must choose B'],
  })
  window.radioGroupAllDisabledI=new CreateValidateRadio({
    ele:'#separate-radio-group-all-disabled',
    material:false,
    showSuccess:true,
    rules: [(v) => v==='b' || 'Must choose B'],
  })
  window.checkboxI=new CreateValidateRadio({
    ele:'#separate-radio',
    material:false,
    showSuccess:true,
    rules:[(v) => (v!=null && v!=='') || 'Must choose a option'],
  })
})
