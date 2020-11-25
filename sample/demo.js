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
    material:true,
    showSuccess:false,
    rules:[
      verifyRules.username,
      verifyRules.phone,
      verifyRules.email,
      verifyRules.singleSelect,
      null,
      verifyRules.msg,
      verifyRules.date(allowFrom,allowTo),
      null,
      verifyRules.date(allowFrom,allowTo),
      [(v) => !!v || 'Muse accept this'],
    ],
    allowedDate:[allowFrom,allowTo],
    afterValid:(ev,data) => {
      ev.preventDefault()
      $showResult.html(JSON.stringify(data))
    }
  })
})
