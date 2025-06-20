/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('Test API singelUser', () =>{
        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/users/2',
            failOnStatusCode: false,
            body : {
                email: "janet.weaver@reqres.in"

            },
              headers:{
                'Content-Type': 'application/json'
            }
                /// 'x-api-key : reqres-free-v1'

        })   
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.empty


        })
    })
})