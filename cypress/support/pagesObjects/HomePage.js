import { HomePageConsts } from "./utils/Constants";
import { getPath } from "./utils/functions";
class HomePage{

static typeDestination(destination){
    getPath(HomePageConsts.SEARCH_DESTINATION_BOX).type(destination)
}
static clickOnSearchBTN(){
    getPath(HomePageConsts.BTN_SEARCH).click()
}

}
export default HomePage;