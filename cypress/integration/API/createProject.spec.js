///<reference types="Cypress" />

import { faker } from '@faker-js/faker';

describe('Create project', () => {
    
    it.only('successfully ', () => {
        const project = {
            name: `project-${faker.random.uuid()}`,
            description: faker.random.words(5)
        }

        cy.api_createProject(project)    
            .then(response => {
                expect(response.status).to.equal(201)
                expect(response.body.name).to.equal(project.name)
                expect(response.body.description).to.equal(project.description)

            })    
    });

})