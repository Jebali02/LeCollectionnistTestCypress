function getPath(path) {
    if(path.includes("//")){
        return cy.xpath(path)
    }else{
        return cy.get(path)
    }
}
export  {getPath}