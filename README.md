
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
- [ ] ratio
- [ ] range

### 案例

```html
 <form id="custom-form" style="max-width:800px;margin:auto;">
        <div class="col-sm-10 col-md-5 col-lg-4 col-xl-4">
            <input value="initial value" data-cvf  name="name"  placeholder="Enter your name" data-cvf-label="Name" />
        </div>
        <input data-cvf class="col-sm-10 col-md-5 col-lg-4 col-xl-4" value="12123423" type="text" name="phone" placeholder="" data-cvf-label="Phone NO." data-mask="###-###-####"/>
        <input data-cvf class="col-sm-10 col-md-5 col-lg-4 col-xl-4"data-cvf-material="false" type="text" name="email" placeholder="" data-cvf-label="Email"  />
        <input data-cvf class="col-12" type="password" name="password" placeholder="" data-cvf-label="Password" data-cvf-eyeicon />
        <select data-cvf class="col-sm-10 col-md-5 col-lg-5 " name="platform" data-cvf-label="Preferred Advertising Platform">
            <option value="volvo" disabled>Choose one</option>
            <option value="1">opt 1</option>
            <option value="2">opt 2</option>
            <option value="3">opt 3</option>
            <option value="4">opt 4</option>
        </select>
        <select data-cvf class="col-sm-10 col-md-10 col-lg-7 " data-cvf-material="false" name="multiple" data-cvf-label="Multiple Choose" data-cvf-multiple="true">
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
        <textarea data-cvf class="col-sm-10 col-lg-12" rows="8"  data-cvf-material="false" name="message" placeholder=""  data-cvf-label="Message"></textarea>
        <input data-cvf class="col-sm-10 col-lg-12" type="date" name="date" data-cvf-label="Select Date"
               data-cvf-from="2022-1-1" data-cvf-to="2017-4-6" data-cvf-initDate="2022-1-1" data-cvf-initView="day"/>
        <input data-cvf class="col-sm-10 col-lg-12" type="time" name="time" data-cvf-label="Select Time" data-cvf-initHour="13" data-cvf-initMinute="38" />
        <input data-cvf class="col-sm-10 col-lg-12" type="datetime-local" name="datetime" data-cvf-label="Select DateTime"
               data-cvf-from="2022-1-1" data-cvf-to="2017-4-6" data-cvf-initDate="2022-1-1" data-cvf-initView="day"/>
        <input data-cvf class="col-sm-10 col-lg-12"  type="file"  name="file upload" placeholder="" data-cvf-label="File Upload"  />
        <input data-cvf class="col-sm-10 col-lg-12"  type="checkbox" checked value="5" name="include email" placeholder="" data-cvf-label="Include email"  />
        <div class="col-sm-10 col-lg-12" style="text-align: center;">
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
    material:false,
    showSuccess:false,
    uploadOptions:{
      noBackend:true, // This option is easy for debug
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
      verifyRules.email,
      verifyRules.password,
      verifyRules.singleSelect,
      null,
      verifyRules.msg,
      verifyRules.date(allowFrom,allowTo),
      null,
      verifyRules.date(allowFrom,allowTo),
      [(v) => !!v && v.length>0 || 'Need provide some file'],
      [(v) => !!v || 'Muse accept this'],
    ],
    allowedDate:[allowFrom,allowTo],
    afterValid:(ev,data) => {
      ev.preventDefault()
      $showResult.html(JSON.stringify(data))
    },
  })
})
```

