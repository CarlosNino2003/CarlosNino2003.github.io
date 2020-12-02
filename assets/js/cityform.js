function checkTheCode()
    {
      var msg = "";
      var areaCode = document.getElementById("CODE").options[document.getElementById("CODE").selectedIndex].value;
		
      switch (parseInt(areaCode))
      {
        case 617:
          msg = "Boston's area code is " + areaCode;
    		break;
        case 212:
          msg = "Manhattan's area code is " + areaCode;
    		break;
        case 415:
          msg = "San Francisco's area code is " + areaCode;
    		break;
        case 813:
          msg = "Tampa's area code is " + areaCode;
			break;
		default:
          msg = "You did not select a city.";
      }
      
      alert(msg);

    }
    function checkTheNumber()
    {
      var num = document.getElementById("theNumber").value;
      var msg = "";
      
      if (num >= 100)

        msg = msg + "The number is greater than 100";
		else 
			msg = msg + "The number is less than 100";

      alert(msg);
    }
