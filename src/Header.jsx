import { BsSearch } from "react-icons/bs";
import React,{useRef} from "react";
function Header(props) {

  const searchRef= useRef(null);
  return (
    <header className="header">
      <div className="header-container">
        <img
          className="logo"
          src="https://s3-alpha-sig.figma.com/img/1a0f/1be0/90e0b249ddf438f34c5850744747b61a?Expires=1701648000&Signature=feX7FAPLOC50A-11hMmTW1voHrENl4A2Sttbx-573ri1lDxeyltKuJiX4rsLMwri2l6KXSift4qlVaYyJuEv9G0fvxr9pTngeqqq457B5RgRhUxiEP8PGnnKdQaDFQizr3SvfNsBUfxcxXRjvi1B8r32EUmHlg9rKIB0wuY8-rsJ2wdEUgY-WQnxfJRns0cdbwcKn1sZX--IVB43BDhaQj99SnAc24r6MKmgqKFFAZ35gPDZ5u~mji8oR6ZSIDvtlgegJ4ml4T5F2OGWtC7XIVOspTcOZdyeTU2n9iEhN2GTpzBRrBtX19v8Gjzt6PivkAy5h9~ty0KexVq-NuODYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <div className="search-container">
          <div className="search-box">
            <div className="search-icon">
              <BsSearch />
            </div>
            <input onKeyDown={(e)=>{
              if(e.key=='Enter'){
                props.searchHandler(searchRef.current.value);
              }
              if(searchRef.current.value.trim()==''){
                props.searchHandler('')
              }
            }} className="search-text" ref={searchRef} placeholder="Search" />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header