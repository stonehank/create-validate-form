import $ from 'jquery'
import CreateValidateForm from '../src/index'
import './demo.scss'
import {verifyRules} from '../src/verifyRules'
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
