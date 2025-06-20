/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('Test API singelUser', () =>{
        cy.request({
            method: 'PUT',
            url:'https://reqres.in/api/users/',
            failOnStatusCode: false,
            body : {
                name: "morpheus",
                job: "zion resident",
                
            },
              headers:{
                'Content-Type': 'application/json',
                'x-api-key' : 'reqres-free-v1'
             }
                

        })   
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('name', 'morpheus')
            expect(response.body).to.have.property('job', 'zion resident')

        })
    })

})