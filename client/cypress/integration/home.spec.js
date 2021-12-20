describe('Home Tests', () => {
    
    /*
    https://www.youtube.com/watch?v=1bLPnmZhwKs (First test)
    https://www.youtube.com/watch?v=jyDr97ubWMQ&t=215s (Get, Click, Find)
    https://www.youtube.com/watch?v=naTXinVm58Y (Should, Expect)
    */

    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it("Open the home page and verify the url and the title", () => {
        // open the Home Page
        cy.visit('http://localhost:3000/');

        // assert the url
        cy.url().should("include", "3000");

        // assert the title
        cy.title().should("eq", "Castle");
    }) 

    it("Should load the Castle gif", () => {
        cy.get('img', { includeShadowDom: true}).eq(0)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/index-(3).gif")))
    })

    it("Clicks Play button and asserts the url", () => {
        // click the button
        cy.get("p").first().should("have.text" , "Play");
        cy.get(".play-button").click();

        // assert the url 
        cy.url().should("include", "3000");
    })

    it("Shows the Game Rules H1", () => {
        cy.get("h1").should("have.text", "Game Rules");
    })

    it("Shows the Goal of the game H2", () => {
        cy.get("h2").should("have.text", "Goal of the game");
    })

    it("Shows the second paragraph", () => {
        cy.get("p").eq(1).should("have.text", "Be the first to build your castle")
    })

    it("Shows the third paragraph", () => {
        cy.get("p").eq(2).should("have.text", "To ensure your victory you must complete 2 objectives:")
    })

    it("Shows the fourth paragraph", () => {
        cy.get("p").eq(3).should("have.text", "1. Amassing 20 points or more of technology")
    })

    // if you want to manipulate the text \/ or do something else with it you have to use the way of testing below.

    // it("Shows the Goal of the game H2", () => {
    //     cy.get("h2").should($heading => {
    //         // console.log($heading.text());
    //         expect($heading.text()).to.eq("Goal of the game");
    //     })
    // })

    it('Verifies if the imgages of the toolcards are rendered', () => {
        cy.get(".App").find("li").first();
        cy.get('img', { includeShadowDom: true}).eq(1)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/tools/treadwheel_crane.png")));
        cy.get('img', { includeShadowDom: true}).eq(2)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/tools/wheelbarrow.png")));
        cy.get('img', { includeShadowDom: true}).eq(3)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/tools/carpenter.png")));
        cy.get('img', { includeShadowDom: true}).eq(4)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/tools/blacksmith.png")));
    })

    it("Shows the fifth paragraph", () => {
        cy.get("p").eq(4).should("have.text", "2. Gathering all necessary material cards")
    })

    it("Verifies if the imgages of the materialcards are rendered", () => {
        cy.get(".App").find("li").eq(1);
        cy.get('img', { includeShadowDom: true}).eq(5)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/material/money.png")));
        cy.get('img', { includeShadowDom: true}).eq(6)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/material/labour.png")));
        cy.get('img', { includeShadowDom: true}).eq(7)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/material/wood.png")));
        cy.get('img', { includeShadowDom: true}).eq(8)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/material/stone.png")));
        cy.get('img', { includeShadowDom: true}).eq(9)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/material/mortar.png")));
    })

    it("Shows the sixt paragraph", () => {
        cy.get("p").eq(5).should("have.text", "Your opponent can also sabotage your material cards by using an attack card")
    })

    it("Shows the seventh paragraph", () => {
        cy.get("p").eq(6).should("have.text", "These attacks are:")
    })

    it("Verifies if the imgages of the attackcards are rendered", () => {
        cy.get(".App").find("li").eq(2);
        cy.get('img', { includeShadowDom: true}).eq(10)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/attack/bankruptcy.png")));
        cy.get('img', { includeShadowDom: true}).eq(11)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/attack/plague.png")));
        cy.get('img', { includeShadowDom: true}).eq(12)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/attack/fire.png")));
        cy.get('img', { includeShadowDom: true}).eq(13)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/attack/shortage.png")));
        cy.get('img', { includeShadowDom: true}).eq(14)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/attack/frost.png")));
    })

    it("Should show a list of which attack-card goes on which material-card", () => {
        cy.get(".App").find("li").eq(3).should("have.text", "Bankruptcy to sabotage Money");
        cy.get(".App").find("li").eq(4).should("have.text", "Plague to sabotage Labour");
        cy.get(".App").find("li").eq(5).should("have.text", "Fire to sabotage Wood");
        cy.get(".App").find("li").eq(6).should("have.text", "Shortage to sabotage Stone");
        cy.get(".App").find("li").eq(7).should("have.text", "Frost to sabotage Mortar");
    })

    it("Shows the eight paragraph", () => {
        cy.get("p").eq(7).should("have.text", "Luckily you also have defence cards that you can use to thwart the enemies attack on your materials")
    })

    it("Shows the nineth paragraph", () => {
        cy.get("p").eq(8).should("have.text", "These defence cards include:")
    })

    it("Verifies if the imgages of the attackcards are rendered", () => {
        cy.get(".App").find("li").eq(8);
        cy.get('img', { includeShadowDom: true}).eq(15)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/defense/loan.png")));
        cy.get('img', { includeShadowDom: true}).eq(16)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/defense/apothecary.png")));
        cy.get('img', { includeShadowDom: true}).eq(17)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/defense/water.png")));
        cy.get('img', { includeShadowDom: true}).eq(18)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/defense/quarry.png")));
        cy.get('img', { includeShadowDom: true}).eq(19)
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.src).to.be.eq("http://localhost:3000/images/defense/thaw.png")));
    })

    it("Should show a list of which attack-card goes on which material-card", () => {
        cy.get(".App").find("li").eq(9).should("have.text", "Loan to defend against Bankruptcy");
        cy.get(".App").find("li").eq(10).should("have.text", "Apothecary to defend against Plague");
        cy.get(".App").find("li").eq(11).should("have.text", "Water to defend against Fire");
        cy.get(".App").find("li").eq(12).should("have.text", "Quarry to defend against Shortage");
        cy.get(".App").find("li").eq(13).should("have.text", "Thaw to defend against Frost");
    })

    it("Shows the tenth paragraph", () => {
        cy.get("p").eq(9).should("have.text", "If an attack is successful and the player has no defence, the material card that was attacked is discarded along with the attack card used by your opponent")
    })

    it("Shows the eleventh paragraph", () => {
        cy.get("p").eq(10).should("have.text", "If the player has a defence card to protect his materials, then both the defence and attack cards are discarded and the material card stays in play")
    })
})