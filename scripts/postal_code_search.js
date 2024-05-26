var postalCodeList;
/************************************/

function load_postal_codes_list(question) {
  var country;

  postalCodeList = [];

  switch (question) {
    case "Core_Q6_3":
      if (api.fn.answers().Core_Q6_3a == 3 ) {
        postalCodeList = JSON.parse(postalCodeGermany); 
      }
      else
      {
        postalCodeList = JSON.parse(postalCodeAustria); //Austria
      }
      break;
    case "Core_Q6_4":
      if (api.fn.answers().Core_Q6_4a == 3 ) {
        postalCodeList = JSON.parse(postalCodeGermany); 
      }
      else
      {
        postalCodeList = JSON.parse(postalCodeAustria); //Austria
      }
      break;      
    case "Core_Q7_2":
      if (api.fn.answers().Core_Q7_2 == 3 ) {
        postalCodeList = JSON.parse(postalCodeGermany); 
      }
      else
      {
        postalCodeList = JSON.parse(postalCodeAustria); //Austria
      }
      break;         
    case "Core_Q14":      
      var country = api.fn.answers().Core_Q13;
      if (country.includes("Germany")) {
        postalCodeList = JSON.parse(postalCodeGermany); 
      }
      else if (country.includes("Austria")) 
      {
        postalCodeList = JSON.parse(postalCodeAustria); //Austria
      }
    break;  


    default:
      postalCodeList = JSON.parse(postalCodeAustria); //Austria
      break;
  }

  for (i = 0; i < postalCodeList.length; i++) {
    postalCodeList[i].Show = postalCodeList[i].Name;
  }

  aui_init_search_list(postalCodeList);
  console.log("load_postal_code_code done!");
}

function save_postal_code_value(question, value) {
  console.log("question:", question);
  console.log("value:", value);

  switch (question) {
    case "Core_Q6_3":
      api.fn.answers({Core_Q6_3_PostalCode: value}); 
      break;
    case "Core_Q6_4":
      api.fn.answers({Core_Q6_4_PostalCode: value}); 
      break;
    case "Core_Q7_2":
      api.fn.answers({Core_Q7_2_PostalCode: value}); 
      break;
    case "Core_Q14":              
      api.fn.answers({Core_Q14_PostalCode: value}); 
      break;
    default:
      break;
  }

  console.log("save postal_code  done!");
}

function show_postal_code_search_box(question) {
  load_postal_codes_list(question);
  
  var defaultValue = "";

  aui_show_external_search_box(question, defaultValue);
  
  $('.external-search-box').show(); 
}

function hide_postal_code_search_box() {
  aui_hide_external_search_box();
}