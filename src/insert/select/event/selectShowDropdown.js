// import selectHideDropdown from './selectHideDropdown'

export default function selectShowDropdown(self,{$selectOptCont,idx}){
  if(self.showDropDownIdx===idx)return
  // selectHideDropdown(self,self.showDropDownIdx)
  self._elementFocus(idx)
  self.showDropDownEle=$selectOptCont
  self.showDropDownIdx=idx
  // self.showDropDownEle.css({
  //   pointerEvents:'auto'
  // })
  self.showDropDownEle.addClass('cvf-show-select')
}
