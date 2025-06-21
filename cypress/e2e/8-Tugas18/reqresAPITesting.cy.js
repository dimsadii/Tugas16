/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('Test API update', () =>{
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

    
     it('Test API singelUser', () =>{
        cy.request({
            method: 'GET',
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
            
        })
    })

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
            expect(response.body).to.not.be.null


        })
    })

     it('Test API create', () =>{
        cy.request({
            method: 'POST',
            url:'https://reqres.in/api/users/',
            failOnStatusCode: false,
            body : {
                name: "morpheus",
                job: "leader",
                
            },
              headers:{
                'Content-Type': 'application/json',
                'x-api-key' : 'reqres-free-v1'
             }
                

        })   
        .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('name', 'morpheus')
            expect(response.body).to.have.property('job', 'leader')

        })
    })
       
        it('Test API login unsuccesful', () =>{
        cy.request({
            method: 'POST',
            url:'https://reqres.in/api/login',
            failOnStatusCode: false,
            body : {
                email:'peter@klaven'
                
            },
              headers:{
                'Content-Type': 'application/json',
                'x-api-key' : 'reqres-free-v1'
             }
                

        })   
        .then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.not.be.null
          
        })
    })
      it('Test API delayed response', () =>{
        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/users?page=2',
            failOnStatusCode: false,
            
                
              headers:{
                'Content-Type': 'application/json',
                'x-api-key' : 'reqres-free-v1'
             }
                

        })   
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
          
        })
    })      

})