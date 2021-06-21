> 不引入框架，在原生`HTML`+`JS`下快速创建自定义规则表单

> No Framework Import, create a validation form in `HTML` + `JS` 

### Install

`npm install create-validate-form -S`

### Test Sample

`npm start`

### Support list:

- [x] text
- [x] password
- [x] checkbox
- [x] textarea
- [x] date
- [x] time
- [x] datetime
- [x] select(multiple)
- [x] file(multiple)
- [x] ratio(group)
- [ ] range

### Usage

```html
    <form id="custom-form" style="max-width:800px;margin:auto;">
        <input type="hidden" name="_token" value="ASYfywOp2y3LDkfoPuXUAY5sOVi79K6dmvZU2km6">
        <input type="hidden" name="token" value="caf6677cd78803e9bda5e44dc067cc46297626e8d247368cb8c9f7312a7e861a">
        <div class="col-sm-10 col-md-5 col-lg-4 col-xl-4">
            <input value="initial value" data-cvf  name="name"  placeholder="Enter your name" data-cvf-label="Name" />
        </div>
        <input data-cvf
               class="col-sm-10 col-md-5 col-lg-4 col-xl-4"
               value="12123423"
               type="text"
               name="phone"
               placeholder=""
               data-cvf-otp-name="otp1"
               data-cvf-label="Phone NO."
               data-mask="###-###-####"
        />
        <input data-cvf class="col-sm-10 col-md-5 col-lg-4 col-xl-4" disabled value="12123423" type="text" name="phone" placeholder="" data-cvf-label="Phone NO.(disabled)" data-mask="###-###-####"/>
        <input data-cvf class="col-sm-10 col-md-6"data-cvf-material="false" type="text" name="email" placeholder="" data-cvf-label="Email"  />
        <input data-cvf class="col-sm-10 col-md-6" type="password" name="password" placeholder="" data-cvf-label="Password" data-cvf-eyeicon />
        <select data-cvf class="col-sm-10 col-md-5 col-lg-6 " name="platform" data-cvf-label="Preferred Advertising Platform">
            <option value="volvo" disabled>Choose one</option>
            <option value="1">opt 1</option>
            <option value="2">xxx 2</option>
            <option value="3">aaa 3</option>
            <option value="4">opt 4</option>
            <option value="5">abc 5</option>
        </select>
        <select data-cvf class="col-sm-10 col-md-5 col-lg-6 " name="platform" disabled data-cvf-label="Choose(Disabled)">
            <option value="volvo" disabled>Choose one2</option>
            <option value="1">opt 1</option>
            <option value="2">opt 2</option>
            <option value="3">opt 3</option>
            <option value="4">opt 4</option>
        </select>
        <select data-cvf class="col-sm-10 col-md-10 col-lg-6 " data-cvf-material="false" name="multiple" data-cvf-label="Multiple Choose" data-cvf-multiple="true">
            <option disabled>Choose multiple</option>
            <option value="1">opt 1</option>
            <option value="2">abc 2</option>
            <option value="3">cde 3</option>
            <option value="4">aaa 4</option>
            <option value="5">ccc 5</option>
            <option value="6">bbb 6</option>
            <option value="7">ook 7</option>
            <option value="8">obb 8</option>
        </select>
        <select data-cvf class="col-sm-10 col-md-10 col-lg-6 " data-cvf-material="false" disabled name="multiple" data-cvf-label="Multiple Choose(Disabled)" data-cvf-multiple="true">
            <option disabled>Choose multiple</option>
            <option value="1">opt 1</option>
            <option value="2">opt 2</option>
            <option value="3">opt 3</option>
            <option value="4">opt 4</option>
            <option value="5">opt 5</option>
            <option value="6">opt 6</option>
            <option value="7">opt 7</option>
            <option value="8">opt 8</option>
        </select>
        <textarea data-cvf class="col-sm-10 col-lg-12" rows="3"  data-cvf-material="false" name="message" placeholder=""  data-cvf-label="Message"></textarea>
        <textarea data-cvf class="col-sm-10 col-lg-12" rows="3"  data-cvf-material="false" disabled name="message" placeholder=""  data-cvf-label="Message(disabled)"></textarea>
        <input data-cvf class="col-sm-10 col-lg-12" type="date" name="date" data-cvf-label="Select Date"
               data-cvf-from="2022-1-1" data-cvf-to="2017-4-6" data-cvf-initDate="2022-1-1" data-cvf-initView="day"/>

        <input data-cvf class="col-sm-10 col-lg-12" type="date" name="date" disabled data-cvf-label="Select Date(disabled)"
               data-cvf-from="2022-1-1" data-cvf-to="2017-4-6" data-cvf-initDate="2022-1-1" data-cvf-initView="day"/>

        <input data-cvf class="col-sm-10 col-lg-12" type="time" name="time" data-cvf-label="Select Time" data-cvf-initHour="13" data-cvf-initMinute="38" />

        <input data-cvf class="col-sm-10 col-lg-12" type="datetime-local" name="datetime" data-cvf-label="Select DateTime"
               data-cvf-from="2022-1-1" data-cvf-to="2017-4-6" data-cvf-initDate="2022-1-1" data-cvf-initView="day"/>

        <input data-cvf class="col-sm-10 col-lg-12"  type="file"  name="file upload" placeholder="" data-cvf-label="File Upload"  />

        <input data-cvf class="col-sm-10 col-lg-12" disabled  type="file"  name="file upload" placeholder="" data-cvf-label="File Upload(Disabled)"  />

        <input data-cvf class="col-6"  type="checkbox" checked value="5" name="include email" placeholder="" data-cvf-label="Include email"  />

        <input data-cvf class="col-6"  disabled type="checkbox" checked value="5" name="include email" placeholder="" data-cvf-label="Include email(disabled)"  />

        <div data-cvf data-cvf-type="radio" class="col-6" data-cvf-group-name="gender" data-cvf-group-label="Choose your gender">
            <input type="radio"  value="0" name="gender" data-cvf-label="Female"  />
            <input type="radio"  value="1" name="gender" data-cvf-label="Male"  />
        </div>

        <div data-cvf data-cvf-type="radio" data-cvf-vertical class="col-sm-10 col-lg-6" data-cvf-group-name="answer" data-cvf-group-label="Choose answer B">
            <input type="radio"  value="a" data-cvf-label="A"  />
            <input type="radio"  value="b" data-cvf-label="B"  />
            <input type="radio"  value="c" data-cvf-label="C"  />
            <input type="radio"  value="d" data-cvf-label="D"  />
        </div>
        <div data-cvf data-cvf-type="radio" data-cvf-vertical class="col-sm-10 col-lg-6" data-cvf-group-name="answer" data-cvf-group-label="Choose answer B(Some disabled)">
            <input type="radio"  value="a" data-cvf-label="A" disabled />
            <input type="radio"  value="b" data-cvf-label="B"  />
            <input type="radio"  value="c" data-cvf-label="C" disabled />
            <input type="radio"  value="d" data-cvf-label="D"  />
        </div>
        <div data-cvf data-cvf-type="radio" data-cvf-vertical data-cvf-disabled class="col-sm-10 col-lg-6" data-cvf-group-name="answer" data-cvf-group-label="Choose answer B(All disabled)">
            <input type="radio"  value="a" data-cvf-label="A" disabled />
            <input type="radio"  value="b" data-cvf-label="B"  />
            <input type="radio"  value="c" data-cvf-label="C" disabled />
            <input type="radio"  value="d" data-cvf-label="D"  />
        </div>
        <input data-cvf class="col-sm-10 col-lg-6" type="radio"  value="xxx" name="custom" data-cvf-label="Some Value"  />
        <input data-cvf class="col-sm-10 col-lg-6" type="radio" disabled  value="xxx" name="custom" data-cvf-label="Some Value(disabled)"  />
        <div class="col-sm-10 col-lg-6" style="text-align: center;">
            <button data-cvf  type="submit" class="form-submit-btn" data-cvf-submit="1" >Submit</button>
        </div>
    </form>
```

```js
$(document).ready(() => {
  let allowFrom=new Date('2022-1-1')
  let allowTo=new Date('2017-4-6')
  let $showResult=$('#showResult')
 new CreateValidateForm({
     ele:'#custom-form',
     material:true,
     showSuccess:true,
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
```

