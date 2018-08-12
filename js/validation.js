function trim(str){
   return str.replace(/^\s*|\s*$/g,"");
}
function chkform()
{

	frminfo=document.myForm;
	
	if(trim(frminfo.name.value)=='')
	{
		alert('Please specify Your Name');
		frminfo.name.focus();
		return false
	}
	if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(trim(frminfo.email.value))))
	{
		alert('Please specify Valid Email Address');
		frminfo.email.focus();
		return false;
	}
	if(trim(frminfo.mobile.value)=='')
	{
		alert('Please specify Mobile Number');
		frminfo.mobile.focus();
		return false
	}
	if(trim(frminfo.sub.value)=='')
	{
		alert('Please specify Subject');
		frminfo.sub.focus();
		return false
	}
	if(trim(frminfo.message.value)=='')
	{
		alert('Please specify Your Enquiry');
		frminfo.message.focus();
		return false
	}

	if (!empty($_POST['validator']) && $_POST['validator'] == $_SESSION['rand_code']) {
     //process your form here
     //at least destroy the session
    unset($_SESSION['rand_code']);
	return false
}


	return true;
}

// Function For summer internship of PopUp
function intchkform()
{

	frminfo=document.intForm;
	
	if(trim(frminfo.name.value)=='')
	{
		alert('Please specify Your Name');
		frminfo.name.focus();
		return false
	}
	if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(trim(frminfo.email.value))))
	{
		alert('Please specify Valid Email Address');
		frminfo.email.focus();
		return false;
	}
	if(trim(frminfo.contact.value)=='')
	{
		alert('Please specify Your Contact Number');
		frminfo.contact.focus();
		return false
	}
	if(trim(frminfo.clg.value)=='')
	{
		alert('Please specify Your College Name');
		frminfo.clg.focus();
		return false
	}
	if(trim(frminfo.enquiry.value)=='')
	{
		alert('Please specify Your Enquiry');
		frminfo.enquiry.focus();
		return false
	}
	return true;
}
