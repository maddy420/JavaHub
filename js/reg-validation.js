function trim(str){
   return str.replace(/^\s*|\s*$/g,"");
}
function chkformreg()
{

	frminfo=document.regForm;
	
	if(trim(frminfo.name.value)=='')
	{
		alert('Please specify Your Name');
		frminfo.name.focus();
		return false
	}
	if(trim(frminfo.clg.value)=='')
	{
		alert('Please specify Your College Name');
		frminfo.clg.focus();
		return false
	}	
	if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(trim(frminfo.email.value))))
	{
		alert('Please specify Valid Email Address');
		frminfo.email.focus();
		return false;
	}
	if(trim(frminfo.countrycode.value)=='')
	{
		alert('Please specify Your Country Code');
		frminfo.countrycode.focus();
		return false
	}
	if(trim(frminfo.phonenumber.value)=='')
	{
		alert('Please specify Phone Number');
		frminfo.phonenumber.focus();
		return false
	}
	
	if(trim(frminfo.enquiry.value)=='')
	{
		alert('Please fill Your Enquiry');
		frminfo.enquiry.focus();
		return false
	}
         if(trim(frminfo.letters_code.value)=='')
	{
		alert("Please fill your Captcha");
		frminfo.letters_code.focus();
		return false
	}
        if(trim(frminfo.code.value)!=trim(frminfo.letters_code.value))
	{
		alert("Incorrect Captcha");
		frminfo.letters_code.focus();
		return false
	}
	return true;
}
