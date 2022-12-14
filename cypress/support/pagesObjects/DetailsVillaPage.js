import HomePage from "./HomePage";
import { DetailsVillaPageConsts } from "./utils/Constants";
import { getPath } from "./utils/functions";
class DetailsVillaPage {
    static clickOnInformationRequestBTN(){
        getPath(DetailsVillaPageConsts.INFORMATION_REQUEST_BTN).click()
    }
    static FillFirstName(FirstName){
        getPath(DetailsVillaPageConsts.FIRSTNAME_BOX).type(FirstName)
    }
    static FillLastName(LastName){
        getPath(DetailsVillaPageConsts.LASTNAME_BOX).type(LastName)
    }
    static FillEmail(Email){
        getPath(DetailsVillaPageConsts.EMAIL_BOX).type(Email)
    }
    static FillPhone(Phone){
        getPath(DetailsVillaPageConsts.PHONE_BOX).type(Phone)
    }
    static clickOnSendRequestBTN(){
        getPath(DetailsVillaPageConsts.SEND_REQUEST_BTN).click()
    }
    
}
export default DetailsVillaPage;