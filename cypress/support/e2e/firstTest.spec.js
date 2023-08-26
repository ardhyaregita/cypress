describe('Test case kasirAja', () => {

    beforeEach(() => {
        cy.visit("https://kasirdemo.belajarqa.com")
      })

      it("Test Case 1: Verify landing page contains 'hai, kasirAja'", () => {
        cy.contains("hai, kasirAja").should('be.visible')
      })
    
       it("Test Case 2: Verify short description of page", () => {
        cy.contains("kasirAja sebuah sistem POS simple, mudah, cepat, dan modern").should('be.visible')
       })
    
      it("Test Case 3: Verify Login form contains email, password, and login button", () => {
        cy.contains("email").should('be.visible')
        cy.contains("password").should('be.visible')
        cy.contains("login").should('be.visible')
      })
    
      it("Test Case 4: Verify Login form contains 'ingin mencoba, daftar ?'", () => {
        cy.contains("ingin mencoba, daftar ?").should('be.visible')
      })

      it("Test Case 5: Verify user login with invalid credentials", () => {
        cy.get('#email').type("tokosbgn@mail.com")
            .should('have.value','tokosbgn@mail.com')
        cy.get('#password').type("password")
        cy.get('.chakra-button').click()
        cy.wait(2000)
        cy.contains("Kredensial yang Anda berikan salah").should('be.visible')
      })
    
      it("Test Case 6: Verify user login without inputting email", () => {
        cy.get('#email').type(" ")
        cy.get('#password').type("password")
        cy.get('.chakra-button').click()
        cy.wait(2000)
        cy.contains("is not allowed to be empty").should('be.visible')
      })

      it("Test Case 7: Verify user login with valid credentials", () => {
        cy.get('#email').type("tokosbgn@mail.com")
        cy.wait(5000)
        cy.get('#password').type("12345")
        cy.wait(5000)
        cy.get('.chakra-button').click()
        cy.wait(5000)
        cy.contains("kasirAja").should('be.visible')
      })
    
      
})