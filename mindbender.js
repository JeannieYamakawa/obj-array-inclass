module.exports = {
  companies: function(crm) {
    console.log(crm.companies);
    return crm.companies;
  },

  people: function(crm) {
    return crm.people;
  },

  employees: function(crm){
    var employeesList = [];
    var people = this.people(crm);

    for (var i = 0; i < people.length; i++) {
      if (people[i].employments.length > 0) {
        employeesList.push(people[i])
      }
    }

    return employeesList;
  },

  companiesReport: function(crm) {
    var employees = this.employees(crm);
    var companies = this.companies(crm);
    var report = "";

    for (var id in companies) {
        var company = companies[id];

      report += (company + "\n")
      for (var i = 0; i < employees.length; i++) {
        var person = employees[i];

        for (var j = 0; j < person.employments.length; j++) {
          var employments = person.employments;
          if (employments[j].companyId == id) {
            report += (person.firstName + " " + person.lastName + " - " + employments[j].title + "\n")
          }
        }
      }
    }

    return report;
  }
}
