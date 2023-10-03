function calculateNetSalary(basicSalary, benefits) {
    
    const grossSalary = basicSalary + benefits;
  
    const netSalary = grossSalary - (payee + nhifDeduction + nssfEmployeeContribution + housingLevy);
  
    return {
      grossSalary,
      payee,
      nhifDeduction,
      nssfEmployeeContribution,
      nssfEmployerContribution,
      housingLevy,
      netSalary,
    };
  }
  
  console.log(`Net Salary: ${salaryResult.netSalary} Ksh`);
