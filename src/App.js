import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import EmployeeCard from "./components/EmployeeCard";
import employees from "./employees.json";

function App() {
  return (
    <Wrapper>
      <Header>Employee Directory</Header>
      <EmployeeCard
        name={employees[0].name}
        image={employees[0].image}
        occupation={employees[0].occupation}
        branchLocation={employees[0].branch}
      />
      <EmployeeCard
        name={employees[1].name}
        image={employees[1].image}
        occupation={employees[1].occupation}
        branchLocation={employees[1].branch}
      />
      <EmployeeCard
        name={employees[2].name}
        image={employees[2].image}
        occupation={employees[2].occupation}
        branchLocation={employees[2].branch}
      />
      <EmployeeCard
        name={employees[3].name}
        image={employees[3].image}
        occupation={employees[3].occupation}
        branchLocation={employees[3].branch}
      />
      <EmployeeCard
        name={employees[4].name}
        image={employees[4].image}
        occupation={employees[4].occupation}
        branchLocation={employees[4].branch}
      />
    </Wrapper>
  );
}

export default App;