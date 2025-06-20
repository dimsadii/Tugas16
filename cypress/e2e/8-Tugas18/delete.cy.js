/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('Test API delete', () =>{
        cy.request({
            method: 'DELETE',
            url:'https://reqres.in/api/users/606',
            failOnStatusCode: false,
              headers:{
                'Content-Type': 'application/json',
                'x-api-key' : 'reqres-free-v1'
            }
                 

        })   
        .then((response) => {
            expect(response.status).to.eq(204)
           /// expect(response.body).to.not.be.empty


        })
    })
})
