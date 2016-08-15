var chai = require('chai');
var expect = chai.expect;
var mindbender = require('../mindbender');
var data = require('../data');


describe('mindbender', function() {
  describe('#companies', function() {
    it('should return the companies object', function() {
      var result = mindbender.companies(data);

      var expectedResult = {
                              0: "Nicolas and Sons",
                              57: "Mueller LLC",
                              2: "Mohr, King and Gleason",
                              3: "Grimes Inc",
                              142: "Schmidt-Rolfson",
                              5: "Shanahan, Altenwerth and Nikolaus",
                              6: "Dickens, Blanda and Bosco",
                              31: "Nikolaus Inc",
                              89: "Rempel, Berge and Bogan",
                              9: "Steuber, Wisozk and Gorczany"
                            }

      expect( result ).to.deep.equal(expectedResult);
    })
  })

  describe('#people', function() {
    it('should return the all of the people object', function() {
      var result = mindbender.people(data);

      var expectedResult = [
                            {
                              id: 2,
                              firstName: "Savannah",
                              lastName: "Clementina",
                              employments: []
                            },
                            {
                              id: 3,
                              firstName: "Elyse",
                              lastName: "Jensen",
                              employments: [ { companyId: 142, title: "Chief Communications Consultant" } ]
                            },
                            {
                              id: 4,
                              firstName: "Frieda",
                              lastName: "Tess",
                              employments: [ { companyId: 31, title: "Dynamic Data Specialist" } ]
                            },
                            {
                              id: 6,
                              firstName: "Elise",
                              lastName: "Camylle",
                              employments:
                              [
                                { companyId: 57, title: "Regional Applications Designer" },
                                { companyId: 9, title: "Internal Mobility Executive" }
                              ]
                            },
                            {
                              id: 8,
                              firstName: "Francis",
                              lastName: "Arlo",
                              employments: []
                            },
                            {
                              id: 9,
                              firstName: "Clementina",
                              lastName: "Geraldine",
                              employments:
                              [
                                { companyId: 6, title: "Direct Response Agent" },
                                { companyId: 3, title: "Investor Metrics Officer" }
                              ]
                            },
                            {
                              id: 10,
                              firstName: "Jeanie",
                              lastName: "Annie",
                              employments: [ ]
                            },
                            {
                              id: 11,
                              firstName: "Myra",
                              lastName: "Sylvester",
                              employments: [ { companyId: 57, title: "Direct Directives Officer" } ]
                            },
                            {
                              id: 12,
                              firstName: "Magdalen",
                              lastName: "Wendy",
                              employments:
                              [
                                { companyId: 9, title: "Product Operations Officer" },
                                { companyId: 3, title: "Customer Paradigm Designer" }
                              ]
                            },
                            {
                              id: 16,
                              firstName: "Eloisa",
                              lastName: "Aubree",
                              employments:
                              [
                                { companyId: 89, title: "Internal Configuration Producer" },
                                { companyId: 31, title: "Regional Branding Administrator" }
                              ]
                            },
                            {
                              id: 17,
                              firstName: "Rozella",
                              lastName: "Walter",
                              employments: []
                            },
                            {
                              id: 18,
                              firstName: "Brent",
                              lastName: "Shannon",
                              employments:
                              [
                                { companyId: 31, title: "District Implementation Developer" },
                                { companyId: 57, title: "District Factors Designer" }
                              ]
                            },
                            {
                              id: 19,
                              firstName: "Jaren",
                              lastName: "Easter",
                              employments:
                              [
                                { companyId: 142, title: "District Communications Director" }
                              ]
                            },
                            {
                              id: 20,
                              firstName: "Jaqueline",
                              lastName: "Genoveva",
                              employments: []
                            },
                            {
                              id: 22,
                              firstName: "Darby",
                              lastName: "Della",
                              employments: [ { companyId: 57, title: "Principal Branding Strategist" } ]
                            },
                            {
                              id: 27,
                              firstName: "Jane",
                              lastName: "Otto",
                              employments: []
                            },
                          ]

      expect( result ).to.deep.equal(expectedResult);
    })
  })

  describe('#employees', function() {
    it('should return the all of the people object', function() {
      var result = mindbender.employees(data);

      var expectedResult = [
                                  {
                                    id: 3,
                                    firstName: "Elyse",
                                    lastName: "Jensen",
                                    employments: [ { companyId: 142, title: "Chief Communications Consultant" } ]
                                  },
                                  {
                                    id: 4,
                                    firstName: "Frieda",
                                    lastName: "Tess",
                                    employments: [ { companyId: 31, title: "Dynamic Data Specialist" } ]
                                  },
                                  {
                                    id: 6,
                                    firstName: "Elise",
                                    lastName: "Camylle",
                                    employments:
                                    [
                                      { companyId: 57, title: "Regional Applications Designer" },
                                      { companyId: 9, title: "Internal Mobility Executive" }
                                    ]
                                  },
                                  {
                                    id: 9,
                                    firstName: "Clementina",
                                    lastName: "Geraldine",
                                    employments:
                                    [
                                      { companyId: 6, title: "Direct Response Agent" },
                                      { companyId: 3, title: "Investor Metrics Officer" }
                                    ]
                                  },
                                  {
                                    id: 11,
                                    firstName: "Myra",
                                    lastName: "Sylvester",
                                    employments: [ { companyId: 57, title: "Direct Directives Officer" } ]
                                  },
                                  {
                                    id: 12,
                                    firstName: "Magdalen",
                                    lastName: "Wendy",
                                    employments:
                                    [
                                      { companyId: 9, title: "Product Operations Officer" },
                                      { companyId: 3, title: "Customer Paradigm Designer" }
                                    ]
                                  },
                                  {
                                    id: 16,
                                    firstName: "Eloisa",
                                    lastName: "Aubree",
                                    employments:
                                    [
                                      { companyId: 89, title: "Internal Configuration Producer" },
                                      { companyId: 31, title: "Regional Branding Administrator" }
                                    ]
                                  },
                                  {
                                    id: 18,
                                    firstName: "Brent",
                                    lastName: "Shannon",
                                    employments:
                                    [
                                      { companyId: 31, title: "District Implementation Developer" },
                                      { companyId: 57, title: "District Factors Designer" }
                                    ]
                                  },
                                  {
                                    id: 19,
                                    firstName: "Jaren",
                                    lastName: "Easter",
                                    employments:
                                    [
                                      { companyId: 142, title: "District Communications Director" }
                                    ]
                                  },
                                  {
                                    id: 22,
                                    firstName: "Darby",
                                    lastName: "Della",
                                    employments: [ { companyId: 57, title: "Principal Branding Strategist" } ]
                                  },
                                ]


      expect( result ).to.deep.equal(expectedResult);
    })
  })

  describe('#companiesReport', function() {
    it('should return a report of employees for each company', function() {
      var result = mindbender.companiesReport(data);

      var expectedResult = `
                            Nicolas and Sons \n
                            Mueller LLC \n
                                Elise Camylle - Regional Applications Designer \n
                                Myra Sylvester - Direct Directives Officer \n
                                Brent Shannon - District Factors Designer \n
                                Darby Della - Principal Branding Strategist \n
                            Mohr, King and Gleason \n
                            Grimes Inc \n
                                Clementina Geraldine - Investor Metrics Officer \n
                                Magdalen Wendy - Customer Paradigm Designer \n
                            Schmidt-Rolfson \n
                                Elyse Jensen - Chief Communications Consultant \n
                                Jaren Easter - District Communications Director \n
                            Shanahan, Altenwerth and Nikolaus \n
                            Dickens, Blanda and Bosco \n
                                Clementina Geraldine - Direct Response Agent \n
                            Nikolaus Inc \n
                                Frieda Tess - Dynamic Data Specialist \n
                                Eloisa Aubree - Regional Branding Administrator \n
                                Brent Shannon - District Implementation Developer \n
                            Rempel, Berge and Bogan \n
                                Eloisa Aubree - Internal Configuration Producer \n
                            Steuber, Wisozk and Gorczany \n
                                Elise Camylle - Internal Mobility Executive \n
                                Magdalen Wendy - Product Operations Officer \n
                            `

      // check the result
      expect( result ).to.equal(expectedResult);
    })
  })
})
